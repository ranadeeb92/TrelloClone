const List = require("../models/list");
const Card = require("../models/card");
const position = require("../helpers/position");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = (req, res, next) => {
  const id = req.params.id;
  Card.findById(id)
    .then((card) => res.json({ card }))
    .catch((err) => next(new HttpError("Card not found", 404)));
};

const createCard = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    const listId = req.body.listId;

    const card = new Card({
      listId,
      boardId: req.body.list.boardId,
      title: req.body.card.title,
      position: position(),
    });

    card
      .save()
      .then((card) => {
        List.findByIdAndUpdate(
          listId,
          { $push: { cards: card._id } },
          { new: true }
        ).then((_) => res.json({ card }));
      })
      .catch((err) =>
        next(new HttpError("Creating Card failed, please try again", 500))
      );
  } else {
    return next(new HttpError("Card title is empty"), 404);
  }
};

const updateCard = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    const cardId = req.params.id;
    Card.findByIdAndUpdate(cardId, { ...req.body.card }, { new: true })
      .then((card) => res.json({ card }))
      .catch((err) =>
        next(new HttpError("Updating card failed, please try again"), 500)
      );
  } else {
    return next(new HttpError("Card Title is empty"), 404);
  }
};

exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
