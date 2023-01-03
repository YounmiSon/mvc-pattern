// express, router 사용 설정
const express = require("express");
const router = express.Router();
const boardController = require("../controllers/board_controller");

// localhost:8000/board/write 경로가 된거임
router.post("/write", boardController.addPost);

module.exports = router;
