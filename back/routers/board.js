// express, router 사용 설정
const express = require("express");
const router = express.Router();
const boardController = require("../controllers/board_controller");

// localhost:8000/board/write 경로가 된거임
// 프론트에서 axios를 보내면 가장 먼저 라우터로 들어오게된다

// RESTful API로 깔끔하게 작성하기
//
router.post("/write", boardController.addPost);
// /board 전체 글 가져오기
router.get("/", boardController.getPostAll);

// /board/:id 글 조회하기(얘도 그냥 글 가져오는거니까 get요청을 사용한다)
router.get("/:id", boardController.getPost);
// /board/delete 글 삭제하기
router.delete("/:id", boardController.deletePost);
// /board/:id/edit 글 수정하기
router.put("/:id", boardController.editPost);

module.exports = router;
