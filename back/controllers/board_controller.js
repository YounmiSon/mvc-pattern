// Controller : req, res => 요청, 응답 처리
// 요청에 맞는 데이터를 model에 의뢰하고(처리) 지정된 뷰에 모델 객체를 넘겨준다
// 서비스를 실행시키는 함수 구현, 실행(요청에 따라 어떤 처리할지 결정을 서비스에 넘겨준다)

// service 파일 불러오기
const boardService = require("../services/board_service");

// 내보낼 이름, 전달할 값, 서비스의 어떤 함수를 호출할지 ...
exports.addPost = async (req, res, next) => {
  // const { title, content } = req.body;
  // console.log(title);
  try {
    const { title, content } = req.body;
    if ((title === "" && content === "") || title === "" || content === "")
      throw new Error("공백 안됨");
    const newPost = await boardService.addPost(title, content);
    res.send(newPost);
  } catch (e) {
    // next보다 res.send를 먼저 보내야됨, 그래야 프론트에서 처리가 됨
    res.send(e);
    next(e);
  }

  // if ((title === "" && content === "") || title === "" || content === "") {
  //   res.send("error");
  // } else {
  // // req는 했는데 res 받는 곳이 없다
  // // 그럼 service에서 create만 되고 끝임, 프론트에서 axios보낸
  // // return async (dispatch, getState) => {
  // //  const post = await axios({ ...
  // // ↑ 이 부분에서 멈춰있는거임 응답이 안오니까(?)
  // const b = await boardService.addPost(title, content);
  // // 그래서 res.sed에 뭐 담을거임?
  // // 위에 그럼 서비스에 가보면 return await Post.create({ title, content });
  // // 해서 return 받은 값이 있으니까 이걸 변수에 담아서 할당하면 된다
  // res.send(b);
  // // console.log(b);
};

exports.getPostAll = async (req, res, next) => {
  try {
    // console.log(req.body);
    const datas = await boardService.getPostAll();
    // console.log(datas); // 여기로 Post 데이터(객체)들이 담긴 배열이 들어온다
    res.send(datas);
  } catch (e) {
    next(e);
  }
};

exports.getPost = async (req, res) => {
  let postId = req.params.id;
  // console.log(req);
  const post = await boardService.getPost(postId);
  res.send(post);
};

exports.deletePost = async (req, res) => {
  let postId = req.params.id;
  // console.log(req.params.id);
  const post = await boardService.deletePost(postId);
  // console.log(post); // 1이 나옴 = true, destroy하고 나서 return값을 boolean 타입으로 반환된다
  // 그래서 자꾸 0아니면 1이 나온거고
  // send값으로 자꾸 숫자가 들어가니까
  // express deprecated res.send(status): Use res.sendStatus(status) instead
  // 위와 같은 오류가났다 찾아보니까 내가 숫자 할당 해준거라고 해서 toString으로 바꿔준거임
  res.send(toString(post));
};

exports.editPost = async (req, res, next) => {
  try {
    const { id, title, content } = req.body;
    console.log(req.body);
    if ((title === "" && content === "") || title === "" || content === "")
      throw new Error("공백 안됨");
    const newPost = await boardService.editPost(id);
    res.send(newPost);
  } catch (e) {
    res.send(e);
    next(e);
  }
};
