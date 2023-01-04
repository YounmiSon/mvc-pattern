const express = require("express");
const cors = require("cors");
const { sequelize } = require("./model");
const { boardRouter } = require("./routers");

const app = express();

sequelize
  // sequelize와 sync가 맞는지 체크하고 DB 생성해주는 부분
  // force : 강제로 sync 맞춰줄지 선택하는 옵션
  .sync({ force: false });
try {
  // 포트 연결, sequelize 연결 중 뭐가 먼저 될지는 모른다
  // 포트 대기도 이 안에서 처리해주면 된다
  app.listen(8000, () => {});
  console.log("sequelize 연결됨");
} catch (error) {
  console.log(err);
}

const options = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(options));

// 라우터
// 대분류 라우터는 복수형으로 써준다 웬만하면
app.use("/board", boardRouter);

// next 함수를 써서 예외처리를 해준다
// 단, 예외처리 미들웨어는 무조건 가장 아래에 작성한다
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});
