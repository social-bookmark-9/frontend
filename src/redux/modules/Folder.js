import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import folderApi from "../app/folderApi";

const FolderApi = new folderApi();

const initialState = {
  userInfo: {},
  folderList: [],
};

export const getFoldersAxios = createAsyncThunk(
  "folder/getFolder",
  async (folderData, { dispatch }) => {
    const resp = await FolderApi.getFolders();
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolder: (state, action) => {
      const articleFolderList = action.payload.articleFolderListResponseDto;
      state.articleFolderList = articleFolderList;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export default folderSlice.reducer;
