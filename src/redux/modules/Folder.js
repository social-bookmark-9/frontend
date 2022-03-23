import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import folderApi from "../app/folderApi";
import { postArticleAxios } from "./Article";
// import { postArticleAxios } from "./Article";

const FolderApi = new folderApi();

const initialState = {
  articleFolderList: [],
};

export const getFolderAxios = createAsyncThunk(
  "folder/getFolder",
  async (folderId, { dispatch }) => {
    const resp = await FolderApi.getFolder(folderId);
    console.log("아티클리스트가져오기: ", resp);
    // dispatch(setFolder(resp.data));
    // return resp;
  },
);

export const createFolderAxios = createAsyncThunk(
  "folder/createFolder",
  async ({ folderData, articleData, navigate }, { dispatch }) => {
    console.log(folderData);
    console.log(articleData);
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
      const articleFolderList = action.payload.articleFolderListResponseDto;
      state.articleFolderList = articleFolderList;
    },
  },
});

export const { setFolder } = folderSlice.actions;

export default folderSlice.reducer;
