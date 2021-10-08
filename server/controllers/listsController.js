const List = require("../models/list");
const Board = require("../models/board");
const position = require("../helpers/position");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  const boardId = req.body.boardId;
  if (errors.isEmpty()) {
    const list = new List({
      title: req.body.list.title,
      boardId: boardId,
      position: position(),
    });

    list
      .save()
      .then((list) => {
        Board.findByIdAndUpdate(
          boardId,
          { $push: { lists: list._id } },
          { new: true }
        ).then((_) => res.json({ list }));
      })
      .catch((err) =>
        next(new HttpError("Creating list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const updateList = (req, res, next) => {
  const errors = validationResult(req);
  const listId = req.params.id;
  if (errors.isEmpty()) {
    List.findByIdAndUpdate(listId, { title: req.body.title }, { new: true })
      .then((list) => res.json({ list }))
      .catch((err) =>
        next(new HttpError("Updating the list failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.createList = createList;
exports.updateList = updateList;
