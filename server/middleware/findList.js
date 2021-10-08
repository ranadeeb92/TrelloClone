const HttpError = require("../models/httpError");
const List = require("../models/list");

const findList = (req, res, next) => {
  const listId = req.body.listId;
  List.findById(listId)
    .then((list) => {
      req.body.list = list;
      next();
    })
    .catch((err) => next(new HttpError("Can't find list.", 500)));
};

module.exports = findList;
