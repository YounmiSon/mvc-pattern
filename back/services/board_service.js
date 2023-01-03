// Service  : 시퀄라이즈 관련
// 사용자의 요구사항을 처리, DB데이터가 필요하면 repository에 요청한다

// 작업할 모델(DB) 불러오기
const { Post } = require("../model");

// findAll, detroy, create, delete 등 DB 작업 처리해서 내보내기
// 필요시 where 사용

module.exports.addPost = async (title, content) => {
  try {
    return await Post.create({ title, content });
  } catch (error) {
    console.log(error);
  }
};
