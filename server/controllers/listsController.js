const List = require("../models/list");
const Board = require("../models/board");
const position = require("../helpers/position");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const list = new List({
      title: req.body.list.title,
      boardId: req.body.boardId,
      position: position(),
    });

    list.save()
      .then((list) => {
        res.json({ list })
      })
      .catch((err) => next(new HttpError("Creating list failed, please try again", 500)));
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
}

exports.createList = createList;

