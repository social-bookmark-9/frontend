import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleApi from "../app/articleApi";

const ArticleApi = new articleApi();

const initialState = {
  message: "",
  data: [],
  // paging: { load: true, next: null, size: 3 },
  // is_loading: false,
};

export const getArticlesAxios = createAsyncThunk(
  "article/getArticles",
  async (articleData, { dispatch }) => {
    const resp = await ArticleApi.getArticles();
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
  extraReducers: {
    [getArticlesAxios.fulfilled]: (state, action) => {
      state.is_loading = false;
    },
  },
});

export const { setArticle } = articleSlice.actions;

export default articleSlice.reducer;
