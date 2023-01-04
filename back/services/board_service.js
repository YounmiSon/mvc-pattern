// Service  : 시퀄라이즈 관련
// 사용자의 요구사항을 처리, DB데이터가 필요하면 repository에 요청한다

// 작업할 모델(DB) 불러오기
// require를 계속 써서 의존성을 자꾸 만드는 건 지양한다
// class 문법 쓰면 좀 깔끔하게 정리해서 쓸 수 있음
const { Post } = require("../model");

// findAll, destroy, create, delete 등 DB 작업 처리해서 내보내기
// 필요시 where 사용

// 인자로 title, content 보내줘야 됨
module.exports.addPost = async (title, content) => {
  try {
    return await Post.create({ title, content });
    // 서비스 볼륨이 커져서 처리해야할 쿼리문이 많아지면 repository로
  } catch (error) {
    console.log(error);
  }
};

module.exports.getPostAll = async () => {
  try {
    // throw new Error("게시글 에러~~~");
    return await Post.findAll();
  } catch (error) {
    console.log(error);
  }
};

module.exports.getPost = async (postId) => {
  try {
    return await Post.findOne({
      where: { postId: postId },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.deletePost = async (postId) => {
  try {
    return await Post.destroy({
      where: { postId: postId },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.editPost = async (id) => {
  try {
    return await Post.update({
      where: { postId: id },
    });
  } catch (error) {
    console.log(error);
  }
};
