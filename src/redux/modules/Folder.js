import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import folderApi from "../app/folderApi";

const FolderApi = new folderApi();

const initialState = {
  message: "",
  data: [],
};

export const getFolderAxios = createAsyncThunk(
  "folder/getFolderAxios",
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
      state.data = folderList;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export default folderSlice.reducer;
