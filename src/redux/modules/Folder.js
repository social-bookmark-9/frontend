import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import folderApi from "../app/folderApi";

const FolderApi = new folderApi();

const initialState = {
  message: "",
  folder_list: [],
};

export const getFoldersAxios = createAsyncThunk(
  "folder/getFolders",
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
      const folderList = action.payload;
      state.folder_list = folderList;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export default folderSlice.reducer;
