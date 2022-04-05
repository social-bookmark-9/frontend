import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import searchApi from "../app/searchApi";

const SearchApi = new searchApi();

const initialState = {
  isLoading: false,
  articleList: [],
  paging: { next: true, page: 0, sort: "createAt" },
};

export const getSearchArticleResultAxios = createAsyncThunk(
  "search/getSearchArticleResult",
  async ({ hashtag, titleOg, page, sort }, { dispatch }) => {
    await SearchApi.getSearchArticle({ hashtag, titleOg, page, sort }, data => {
      setPaging(data);
      dispatch(setSearchArticles(data));
    });
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
      console.log(action.payload);
      state.articleList = initialState.articleList;
      state.paging.page = 1;
      state.paging.isLast = action.payload.isLast;
      state.paging.next = action.payload.isFirst;
    },
  },
  extraReducers: {
    [getSearchArticleResultAxios.fulfilled]: (state, action) => {
      state.paging.page += 1;
      state.isLoading = false;
    },
  },
});

export const { setSearchArticles, setLoading, setPaging } = searchSlice.actions;
export default searchSlice.reducer;
