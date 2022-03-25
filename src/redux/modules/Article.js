import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import articleApi from "../app/articleApi";
import api from "../app/api";

const ArticleApi = new articleApi();

const initialState = {
  data: {},
};

export const postArticleAxios = createAsyncThunk(
  "article/postArticle",
  async ({ articleData, navigate }, { dispatch }) => {
    const resp = await ArticleApi.postArticle({ articleData, navigate });
    return resp;
  },
);

// export const getArticleDB = createAsyncThunk(
//   "article/getArticle",
//   async ({ articleId, navigate }, { dispatch }) => {
//     await api
//       .getArticle({ articleId, navigate })
//       .then(resp => {
//         dispatch(setArticle(resp.data));
//         return resp;
//       })
//       .catch(err => console.log(err));
//   },
// );

export const getArticleAxios = createAsyncThunk(
  "article/getArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.getArticle({ articleId, navigate });
    dispatch(setArticle(resp.data));
    return resp;
  },
);

export const getArticleWithAxios = createAsyncThunk(
  "article/getArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.getArticleWith({ articleId, navigate });
    dispatch(setArticle(resp.data));
    return resp;
  },
);

export const updateReviewAxios = createAsyncThunk(
  "article/updateReview",
  async ({ articleId, review, navigate }, { dispatch }) => {
    const resp = await ArticleApi.updateReview({ articleId, review, navigate });
    return resp;
  },
);

export const reviewHideAxios = createAsyncThunk(
  "article/reviewHide",
  async (articleId, { dispatch }) => {
    const resp = await ArticleApi.reviewHide(articleId);
    dispatch(setReviewHide());
    return resp;
  },
);

export const saveMyArticleAxios = createAsyncThunk(
  "article/saveArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.saveMyArticle({ articleId, navigate });
    return resp;
  },
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.data = action.payload;
    },
    setReview: (state, action) => {
      state.data = action.payload;
    },
    setReviewHide: (state, action) => {
      state.review = action.payload;
    },
  },
  extraReducers: {
    [updateReviewAxios.fulfilled]: (state, action) => {
      state.review = action.payload.data.review;
    },
    [postArticleAxios.fulfilled]: (state, action) => {
      Swal.fire({
        text: "링크가 저장되었습니다",
        confirmButtonText: "확인",
      });
      state.localdata = null;
    },
  },
});

export const { setArticle, setReview, setReviewHide } = articleSlice.actions;

export default articleSlice.reducer;
