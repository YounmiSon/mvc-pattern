// Controller : req, res => 요청, 응답 처리
// 요청에 맞는 데이터를 model에 의뢰하고(처리) 지정된 뷰에 모델 객체를 넘겨준다
// 서비스를 실행시키는 함수 구현, 실행(요청에 따라 어떤 처리할지 결정을 서비스에 넘겨준다)

// service 파일 불러오기
const boardService = require("../services/board_service");

// 내보낼 이름, 전달할 값, 서비스의 어떤 함수를 호출할지 ...
module.exports.addPost = async (req, res) => {
  const { title, content } = req.body;
  console.log(title);
  boardService.addPost(title, content);
};
