import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPost, getPostAll } from "../modules/board";

const Board = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getPostAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posts = useSelector((state) => state.board.posts);
  // console.log(posts);
  return (
    <>
      <h1>게시판</h1>
      <Link to="/write">글쓰기</Link>
      {posts.map(({ postId, title, content }, idx) => (
        <ul key={idx}>
          <li
            onClick={() => {
              dispatch(getPost(postId));
              nav(`/${postId}`);
            }}
            style={{ cursor: "pointer" }}
          >
            제목 : {title}
          </li>
        </ul>
      ))}
    </>
  );
};

export default Board;
