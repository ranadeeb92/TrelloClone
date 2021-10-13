const Board = require("../models/board");
const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const Card = require("../models/card");
const Comment = require("../models/comment");

// get Board
const getBoard = async (req, res, next) => {
  const id = req.params.id;
  await Board.findById(id).populate([{ path: "lists", populate: { path: "cards" } }])
    .then((board) => {
      res.json(board)
    })
    .catch((err) => {
      return next(new HttpError("Board not Found", 404));
    });
};

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      boards,
    });
  });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const board = new Board({
      title: req.body.board.title,
    });
    board
      .save()
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => {
            res.json({ board });
          }
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoard = getBoard;
