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
    console.log("아티클리스트가져오기: ", resp);
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const getFolderListAxios = createAsyncThunk(
  "folder/getFolderList",
  async (_, { dispatch }) => {
    const resp = await FolderApi.getFolderList();
    console.log("폴더목록가져오기: ", resp);
    dispatch(setFolderList(resp.data));
    return resp;
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
