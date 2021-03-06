import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mainApi from "../app/mainApi";

const MainApi = new mainApi();

const initialState = {
  userInfo: [],
  folderList: [{ memberId: "" }],
  articleList: [],
  paging: { page: 0, limit: 3 },
  isLoading: false,
  hashtagList: [],
};

export const getMainAxios = createAsyncThunk(
  "main/getMain",
  async (_, { dispatch }) => {
    const resp = await MainApi.getMain();
    dispatch(setMain(resp.data));
    return resp;
  },
);

export const getMainWithAxios = createAsyncThunk(
  "main/getMain",
  async (_, { dispatch }) => {
    await MainApi.getMainWith(data => {
      dispatch(setMain(data));
    });
  },
);

export const getMainByHashtagAxios = createAsyncThunk(
  "main/getMainByHashtag",
  async chosenHashtag => {
    const res = await MainApi.getMainByHashtag(chosenHashtag);
    return res;
  },
);

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    // setLoading: (state, action) => {
    //   state.is_loading = action.payload;
    // },
    setMain: (state, action) => {
      const userInfo = action.payload.memberList;
      const folderList = action.payload.articleFolderList;
      const articleList = action.payload.articleList;
      state.userInfo = userInfo;
      state.folderList = folderList;
      state.articleList = articleList;
    },
    // setNewPaging: (state, action) => {
    //   state.data = initialState.data;
    //   state.paging.page = 1;
    //   state.paging.load = true;
    //   state.paging.next = null;
    // },
  },
  extraReducers: {
    [getMainAxios.fulfilled]: (state, action) => {
      // state.paging.page += 1;
      state.isLoading = false;
    },
    [getMainWithAxios.fulfilled]: (state, action) => {
      // state.paging.page += 1;
      state.isLoading = false;
    },
    [getMainByHashtagAxios.fulfilled]: (state, action) => {
      state.hashtagList = action.payload.data;
    },
  },
});

export const { setLoading, setMain } = mainSlice.actions;

export default mainSlice.reducer;
