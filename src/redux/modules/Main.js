import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mainApi from "../app/mainApi";

const MainApi = new mainApi();

const initialState = {
  userInfo: [],
  folderList: [],
  articleList: [],
  paging: { page: 0, limit: 3 },
  is_loading: false,
};

export const getMainAxios = createAsyncThunk(
  "main/getMain",
  async (_, { dispatch }) => {
    const resp = await MainApi.getMain();
    dispatch(setMain(resp.data));
    return resp;
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
      // state.is_loading = false;
    },
  },
});

export const { setLoading, setMain } = mainSlice.actions;

export default mainSlice.reducer;
