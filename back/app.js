const express = require("express");
const cors = require("cors");
const { sequelize } = require("./model");
const { boardRouter } = require("./routers");

const app = express();

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

const options = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(options));

app.use("/board", boardRouter);

// 포트 대기
app.listen(8000, () => {
  console.log("서버 대기 중");
});
