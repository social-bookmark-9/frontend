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
    const resp = await ArticleApi.postArticle({ articleData, navigate });
    console.log(resp);
    // return resp;
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

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action) => {
      const articleList = action.payload;
      state.data = articleList;
    },
  },
  extraReducers: {},
});

export const { setArticle } = articleSlice.actions;

export default articleSlice.reducer;
