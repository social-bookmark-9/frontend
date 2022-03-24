import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import articleApi from "../app/articleApi";

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

export const getArticleAxios = createAsyncThunk(
  "article/getArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.getArticle({ articleId, navigate });
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
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.reviewHide({ articleId, navigate });
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
      console.log("겟아티클:", action.payload);
      state.data = action.payload;
    },
    setReview: (state, action) => {
      state.data = action.payload;
    },
    setReviewHide: (state, action) => {},
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
    },
  },
});

export const { setArticle, setReview } = articleSlice.actions;

export default articleSlice.reducer;
