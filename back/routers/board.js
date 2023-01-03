// express, router 사용 설정
const express = require("express");
const router = express.Router();
const boardController = require("../controllers/board_controller");

router.post("/write", boardController.addPost);

module.exports = router;
