import React from "react";
import { Link } from "react-router-dom";
const Board = () => {
  return (
    <>
      <h1>게시판</h1>
      <Link to="/write">글쓰기</Link>
    </>
  );
};

export default Board;
