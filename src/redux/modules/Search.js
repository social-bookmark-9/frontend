import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "../app/searchApi";

const SearchApi = new searchApi();

const initialState = {
  isLoading: false,
  articleList: [],
  paging: { isFirst: true, isLast: false, page: 0, sort: "createAt" },
};

export const getSearchArticleResultAxios = createAsyncThunk(
  "search/getSearchArticleResult",
  async ({ hashtag, titleOg, page }, { dispatch }) => {
    const res = await SearchApi.getSearchArticle({ hashtag, titleOg, page });
    dispatch(setSearchArticles(res.data));
    console.log(res);
    return res.data;
  },
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchArticles: (state, action) => {
      state.articleList = action.payload.articleList;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPaging: (state, action) => {
      state.articleList = initialState.articleList;
      state.paging.page = 1;
      state.paging.isFirst = true;
      state.paging.isLast = false;
      state.paging.next = null;
    },
  },
  extraReducers: {
    [getSearchArticleResultAxios.fulfilled]: (state, action) => {
      state.paging.isFirst = !action.payload.isFirst;
      state.paging.isLast = action.payload.isLast;
      state.paging.page += 1;
      state.isLoading = false;
    },
  },
});

export const { setSearchArticles, setLoading, setPaging } = searchSlice.actions;
export default searchSlice.reducer;
