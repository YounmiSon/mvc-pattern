import axios from "axios";

// 액션 타입(다른 모듈과 이름 중복되지 않게 하려고 덕스 패턴에서 액션 타입 정의할 때는 접두사를 붙인다)
const ADD_POST = "board/ADD_POST";
const GET_POST_ALL = "board/GET_POST_ALL";
const GET_POST = "board/GET_POST";
const DELETE_POST = "board/DELETE_POST";
const EDIT_POST = "board/EDIT_POST";

// 액션 생성 함수
export const addPost = (title, content, nav) => {
  // console.log(title);
  // console.log(content);
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: "http://localhost:8000/board/write",
      data: {
        title,
        content,
      },
    });
    try {
      if ((title === "" && content === "") || title === "" || content === "")
        throw new Error("ERR! 공백 비허용 에러");
      const { data } = post; //post.data값과 같다
      // controller에서 send로 보내니까 그제서야 여기 console이 찍혔다
      // console.log(post);
      dispatch({ type: ADD_POST, payload: data });
      nav("/");
    } catch {
      alert("내용을 모두 입력하세요");
      nav("/write");
    }
  };
};

export const getPostAll = () => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: "http://localhost:8000/board",
    });
    const { data } = post;
    // console.log(post); // 데이터 들어옴
    // data는 Post 전부가 담긴 배열이다
    dispatch({ type: GET_POST_ALL, payload: data });
  };
};

export const getPost = (postId) => {
  // console.log(postId);
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: `http://localhost:8000/board/${postId}`,
    });
    const { data } = post;
    // console.log(post);
    dispatch({ type: GET_POST, payload: data });
  };
};

export const deletePost = (postId, nav) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "delete",
      url: `http://localhost:8000/board/${postId}`,
    });
    try {
      const { data } = post;
      // console.log(post);
      dispatch({ type: DELETE_POST, payload: data });
      alert("삭제 완료!");
      nav("/");
    } catch {
      console.log("err");
    }
  };
};

export const editPost = (id, title, content, nav) => {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "put",
      url: `http://localhost:8000/board/${id}`,
      data: {
        id,
        title,
        content,
      },
    });
    const { data } = post; //post.data값과 같다
    // controller에서 send로 보내니까 그제서야 여기 console이 찍혔다
    console.log(post);
    dispatch({ type: EDIT_POST, payload: data });
    // try {
    //   if ((title === "" && content === "") || title === "" || content === "")
    //     throw new Error("ERR! 공백 비허용 에러");
    //   const { data } = post; //post.data값과 같다
    //   // controller에서 send로 보내니까 그제서야 여기 console이 찍혔다
    //   // console.log(post);
    //   dispatch({ type: EDIT_POST, payload: data });
    //   nav("/");
    // } catch {
    //   alert("내용을 모두 입력하세요");
    //   nav("/:id/edit");
    // }
  };
};

// 초기값
const init = {
  posts: [],
  postDetails: {},
};

// 리듀서
export default function board(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      // 새로운 data객체, payload : data로 해놨으니까
      const newPost = { ...payload };
      // 기존 값(기존 게시글)에 새로 생성된 post의 내용을 담아서 보낸다
      // 즉 return하는 값은↓
      // ...payload : 새로 생성된 게시글의 내용, posts :[...state.posts : 기존 게시글이 담겨있는 배열, 새로운 게시글]
      return {
        ...payload,
        posts: [...state.posts, newPost],
        // 객체에도 넣어주자 그래야 오류가 안난다
        postDetails: { ...state.posts, newPost },
      };

    case GET_POST_ALL: {
      return {
        ...state,
        posts: [...payload],
      };
    }

    case GET_POST: {
      return {
        ...state,
        postDetails: { ...payload },
      };
    }

    case DELETE_POST: {
      return { ...state };
    }

    case EDIT_POST:
      const editedPost = { ...payload };

      return {
        ...state,
        posts: [...state.posts, editedPost],
        postDetails: { ...state.posts, editedPost },
      };

    default:
      return { ...state };
  }
}
