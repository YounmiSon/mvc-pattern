import React, { useState } from "react";
import { addPost } from "../modules/board";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Write = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [inputs, setInputs] = useState({ title: "", content: "" });

  const inputsHadler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    // console.log({ ...inputs });
  };

  const submitHandler = () => {
    // inputs안에 객체로 지금 들어있으니까 보낼 때는 값을 또 나눠서 보내줘야됨 그니까 자꾸 title 안찍혔음
    dispatch(addPost(inputs.title, inputs.content, nav));
    // console.log({ ...inputs });
  };

  return (
    <div>
      <Link to="/">돌아가기</Link>
      <br />
      <input name="title" onChange={inputsHadler} placeholder="제목" />
      <input name="content" onChange={inputsHadler} placeholder="내용" />
      <button onClick={submitHandler}>등록</button>
    </div>
  );
};

export default Write;
