const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardController");
const commentsController = require("../controllers/commentsController");

const {
  validateBoard,
  validateList,
  validateListUpdate,
  validateCard,
  validateComment
} = require("../validators/validators");
const findList = require("../middleware/findList");

router.post("/lists", validateList, listsController.createList);

router.put("/lists/:id", validateListUpdate, listsController.updateList);

router.get("/boards", boardsController.getBoards);

router.post("/boards", validateBoard, boardsController.createBoard);

router.get("/boards/:id", boardsController.getBoard);

router.get("/cards/:id", cardsController.getCard);

router.use(findList);

router.post("/cards", validateCard, cardsController.createCard);

router.put("/cards/:id", validateCard, cardsController.updateCard);

router.delete("/cards/:id", cardsController.deleteCard);

router.post("/comments", validateComment, commentsController.createComment);

module.exports = router;
