import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleApi from "../app/articleApi";

const ArticleApi = new articleApi();

const initialState = {
  status: null,
  message: "",
  data: {},
  // paging: { load: true, next: null, size: 3 },
  // is_loading: false,
};

export const postArticleAxios = createAsyncThunk(
  "article/postArticle",
  async ({ articleData, navigate }, { dispatch }) => {
    console.log(articleData);
    const resp = await ArticleApi.postArticle({ articleData, navigate });
    return resp;
  },
);

export const getArticleAxios = createAsyncThunk(
  "article/getArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.getArticles({ articleId, navigate });
    dispatch(setArticle(resp.data));
    return resp;
  },
);

export const updateReviewAxios = createAsyncThunk(
  "article/updateReview",
  async ({ articleId, review, navigate }, { dispatch }) => {
    const resp = await ArticleApi.updateReview({ articleId, review, navigate });
    dispatch(setReview(resp.data));
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
      state.data = action.payload.article;
    },
    setReview: (state, action) => {
      state.data = action.payload.review;
    },
    setReviewHide: (state, action) => {},
  },
  extraReducers: {
    [updateReviewAxios.fulfilled]: (state, action) => {
      state.review = action.payload.data.review;
    },
  },
});

export const { setArticle, setReview } = articleSlice.actions;

export default articleSlice.reducer;
