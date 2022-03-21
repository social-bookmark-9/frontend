import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mainApi from "../app/mainApi";

const MainApi = new mainApi();

const initialState = {
  userInfo: {},
  folderList: [],
};

export const getMainAxios = createAsyncThunk(
  "main/getMain",
  async (folderData, { dispatch }) => {
    const resp = await MainApi.getFolders();
    // dispatch(setMain(resp.data));
    return resp;
  },
);

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMain: (state, action) => {
      const userInfo = action.payload.memberInfo;
      const folderList = action.payload.articlefolderList;
      state.userInfo = { ...userInfo };
      state.folderList = folderList;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export default folderSlice.reducer;
