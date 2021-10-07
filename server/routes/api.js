const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardController");
const { validateBoard, validateList, validateListUpdate, validateCard } = require("../validators/validators");

router.post("/lists", validateList, listsController.createList);

router.put("/lists/:id", validateListUpdate, listsController.updateList)

router.get("/boards", boardsController.getBoards);

router.post("/boards", validateBoard, boardsController.createBoard);

router.get("/boards/:id", boardsController.getBoard);

router.get("/cards/:id", cardsController.getCard);

router.post("/cards", validateCard, cardsController.createCard);

module.exports = router;
