const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const { validateBoard, validateList, validateListUpdate } = require("../validators/validators");

router.post("/lists", validateList, listsController.createList);

router.put("/lists/:id", validateListUpdate, listsController.updateList)

router.get("/boards", boardsController.getBoards);

router.post("/boards", validateBoard, boardsController.createBoard);

router.get("/boards/:id", boardsController.getBoard);

module.exports = router;
