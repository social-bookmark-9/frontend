import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import folderApi from "../app/folderApi";
import { postArticleAxios } from "./Article";
// import { postArticleAxios } from "./Article";

const FolderApi = new folderApi();

const initialState = {
  folderInfo: {},
  articleList: [],
};

export const getFolderAxios = createAsyncThunk(
  "folder/getFolder",
  async (folderId, { dispatch }) => {
    const resp = await FolderApi.getFolder(folderId);
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const getFolderWithAxios = createAsyncThunk(
  "folder/getFolder",
  async (folderId, { dispatch }) => {
    const resp = await FolderApi.getFolderWith(folderId);
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const getFolderListAxios = createAsyncThunk(
  "folder/getFolderList",
  async (_, { dispatch }) => {
    const resp = await FolderApi.getFolderList();
    dispatch(setFolderList(resp.data));
    return resp;
  },
);

export const createFolderAxios = createAsyncThunk(
  "folder/createFolder",
  async ({ folderData, articleData, navigate }, { dispatch }) => {
    const resp = await FolderApi.createFolder({ folderData, navigate });
    dispatch(postArticleAxios({ articleData, navigate }));
    return resp;
  },
);

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setFolder: (state, action) => {
      state.folderInfo = action.payload;
    },
    setFolderList: (state, action) => {
      state.myFolderList = action.payload;
    },
  },
  extraReducers: {
    [getFolderAxios.fulfilled]: (state, action) => {
      state.articleList =
        action.payload.data.articlesInfoInFolderResponseDtoList;
    },
  },
});

export const { setFolder, setFolderList } = folderSlice.actions;

export default folderSlice.reducer;
