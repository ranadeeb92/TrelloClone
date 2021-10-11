const Card = require("../models/card");
const Comment = require("../models/comment");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createComment = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    const cardId = req.body.cardId;

    const comment = new Comment({
      cardId,
      text: req.body.comment.text,
    });

    comment
      .save()
      .then((comment) => {
        Card.findByIdAndUpdate(
          cardId,
          { $push: { comments: comment._id }, $inc: { commentsCount: 1 } },
          { new: true },
        ).then(_ => res.json({ comment }));
      })
      .catch(_ =>
        next(new HttpError("Creating Comment failed, please try again", 500))
      );
  } else {
    return next(new HttpError("Comment Title is Empty", 404));
  }
}

exports.createComment = createComment;
