import React, { useState } from "react";
import { addPost } from "../modules/board";
import { useDispatch } from "react-redux";
const Write = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ title: "", content: "" });

  const inputsHadler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    // console.log({ ...inputs });
  };

  const submitHandler = () => {
    dispatch(addPost(inputs.title, inputs.content));
    // console.log({ ...inputs });
  };

  return (
    <div>
      <input name="title" onChange={inputsHadler} placeholder="제목" />
      <input name="content" onChange={inputsHadler} placeholder="내용" />
      <button onClick={submitHandler}>등록</button>
    </div>
  );
};

export default Write;
