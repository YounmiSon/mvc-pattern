import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deletePost, editPost, getPost } from "../modules/board";

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const nav = useNavigate();

  const postDetails = useSelector((state) => state.board.postDetails);
  // 여기가 글을 새로 등록하고 나면 자꾸 빈값이 들어와서 페이지가 터지는거임
  // postDetails를 찍으면 빈 객체가 나올때도 있고 아닐때도 있고 이랬음
  // console.log(postDetails); // {} 이런식으로
  // 근데 생각하고보니까 addPost하고 나서 리듀서에서 posts 배열에만 값을 넣어줬음
  // 지금 불러오는 값은 postDetails라는 객체값인데 여긴 안하고 걍 배열에만 오지게 넣고 있었던거임
  // 그래서 addPost하는 리듀서에서 객체에도 전체 글+등록한 글 값을 넣어줬더니 해결 완.

  useEffect(() => {
    const id = location.pathname.split("/")[1];
    // console.log(id);
    dispatch(getPost(id));
  }, []);

  const id = location.pathname.split("/")[1];

  const deleteBtn = (id, nav) => {
    dispatch(deletePost(id, nav));
  };

  return (
    <div>
      <ul>
        <li>제목 : {postDetails.title}</li>
        <li>내용 : {postDetails.content}</li>
        <li>작성일 : {postDetails.createdAt}</li>
        <li>수정일 : {postDetails.updatedAt}</li>
      </ul>
      <button
        onClick={() => {
          deleteBtn(id, nav);
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          nav(`/${id}/edit`);
        }}
      >
        수정
      </button>
    </div>
  );
};

export default Detail;
