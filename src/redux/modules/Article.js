import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import articleApi from "../app/articleApi";

const ArticleApi = new articleApi();

const initialState = {
  data: {},
  recommendList: [],
};

export const postArticleAxios = createAsyncThunk(
  "article/postArticle",
  async ({ articleData, navigate }, { dispatch }) => {
    const resp = await ArticleApi.postArticle({ articleData, navigate });
    if (resp) {
      Swal.fire({
        text: "링크가 저장되었습니다",
        confirmButtonText: "확인",
      });
    }
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

export const getArticleWithAxios = createAsyncThunk(
  "article/getArticleWith",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.getArticleWith({ articleId, navigate });
    dispatch(setArticle(resp.data));
    return resp;
  },
);

export const deleteArticleAxios = createAsyncThunk(
  "article/deleteArticle",
  async ({ articleId, navigate }) => {
    const resp = await ArticleApi.deleteArticle({ articleId, navigate });
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

export const updateTitleOgAxios = createAsyncThunk(
  "article/updateTitleOg",
  async ({ articleId, titleOg }, { dispatch }) => {
    const resp = await ArticleApi.updateTitleOg({ articleId, titleOg });
    dispatch(setNewTitleOg(resp.data));
    return resp;
  },
);

export const changeArticleFolderAxios = createAsyncThunk(
  "article/changeFolder",
  async ({ articleId, articleFolderName }) => {
    const resp = await ArticleApi.changeArticleFolder({
      articleId,
      articleFolderName,
    });
    return resp;
  },
);

export const updateHashtagAxios = createAsyncThunk(
  "article/updateHashtag",
  async ({ articleId, tagData }, { dispatch }) => {
    const resp = await ArticleApi.updateHashtag({ articleId, tagData });
    Swal.fire({ text: "변경되었습니다", confirmButtonText: "확인" });
    return resp;
  },
);

export const saveArticleAxios = createAsyncThunk(
  "article/saveArticle",
  async ({ articleId, navigate }, { dispatch }) => {
    const resp = await ArticleApi.saveArticle({ articleId, navigate });
    Swal.fire({
      text: "아티클이 저장되었습니다",
      confirmButtonText: "확인",
    });
    return resp;
  },
);

export const saveAllArticleAxios = createAsyncThunk(
  "article/saveAllArticle",
  async ({ folderId, articleFolderName }, { dispatch }) => {
    const resp = await ArticleApi.saveAllArticle({
      folderId,
      articleFolderName,
    });
    Swal.fire({
      text: "모든 아티클이 저장되었습니다",
      confirmButtonText: "확인",
    });
    return resp;
  },
);

export const getArticleReviewAxios = createAsyncThunk("reviews", async () => {
  const res = await ArticleApi.getArticleReview();
  return res.data;
});

export const updateReadCountAxios = createAsyncThunk(
  "article/updateHashtag",
  async (articleId, { dispatch }) => {
    const resp = await ArticleApi.updateReadCount(articleId);
    return resp;
  },
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.data = action.payload;
      state.recommendList = action.payload.recommendArticles;
    },
    setReview: (state, action) => {
      state.data = action.payload;
    },
    setReviewHide: (state, action) => {
      state.review = action.payload;
    },
    setNewTitleOg: (state, action) => {},
  },
  extraReducers: {
    [updateReviewAxios.fulfilled]: (state, action) => {},
    [postArticleAxios.fulfilled]: (state, action) => {
      state.localdata = initialState;
    },
    [getArticleReviewAxios.fulfilled]: (state, action) => {
      state.reviewList = action.payload;
    },
  },
});

export const { setArticle, setReview, setReviewHide, setNewTitleOg } =
  articleSlice.actions;

export default articleSlice.reducer;
