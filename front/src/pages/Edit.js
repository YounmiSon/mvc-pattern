import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { editPost } from "../modules/board";

const Edit = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const location = useLocation();

  const title = useRef();
  const content = useRef();

  const posts = useSelector((state) => state.board.postDetails);
  //   console.log(posts);
  const id = location.pathname.split("/")[1];
  //   console.log(id);

  useEffect(() => {
    title.current.value = posts.title;
    content.current.value = posts.content;
  }, []);

  const submitHandler = () => {
    dispatch(editPost(id, title.current.value, content.current.value, nav));
  };

  return (
    <div>
      <Link to="/">돌아가기</Link>
      <br />
      <input ref={title} placeholder="제목" />
      <input ref={content} placeholder="내용" />
      <button onClick={submitHandler}>등록</button>
    </div>
  );
};

export default Edit;
