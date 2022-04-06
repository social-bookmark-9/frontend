import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
  "folder/getFolderWith",
  async (folderId, { dispatch }) => {
    const resp = await FolderApi.getFolderWith(folderId);
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const getFolderListAxios = createAsyncThunk(
  "folder/getFolderList",
  async (_, { dispatch }) => {
    await FolderApi.getFolderList(data => {
      dispatch(setFolderList(data));
    });
  },
);

export const createFolderWithAxios = createAsyncThunk(
  "folder/createFolder",
  async ({ folderData, articleData, navigate }, { dispatch }) => {
    const resp = await FolderApi.createFolder({ folderData, navigate });
    dispatch(postArticleAxios({ articleData, navigate }));
    return resp;
  },
);

export const createFolderAxios = createAsyncThunk(
  "folder/createFolder",
  async ({ folderData, navigate }, { dispatch }) => {
    const resp = await FolderApi.createFolder({ folderData, navigate });
    Swal.fire({ text: "폴더가 생성되었습니다", confirmButtonText: "확인" });
    dispatch(getFolderListAxios());
    return resp;
  },
);

export const updateFolderNameAxios = createAsyncThunk(
  "folder/updateFolderName",
  async ({ folderId, articleFolderName }) => {
    const resp = await FolderApi.updateFolderName({
      folderId,
      articleFolderName,
    });
    return resp;
  },
);

export const deleteFolderAxios = createAsyncThunk(
  "folder/deleteFolder",
  async ({ folderId, navigate }) => {
    const resp = await FolderApi.deleteFolder({ folderId, navigate });
    navigate("/", { replace: true });
    return resp;
  },
);

export const addLikeAxios = createAsyncThunk(
  "folder/addLike",
  async folderId => {
    const resp = await FolderApi.addLike(folderId);
    return resp;
  },
);

export const cancelLikeAios = createAsyncThunk(
  "folder/addLike",
  async folderId => {
    const resp = await FolderApi.cancelLike(folderId);
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
    [getFolderWithAxios.fulfilled]: (state, action) => {
      state.articleList =
        action.payload.data.articlesInfoInFolderResponseDtoList;
    },
  },
});

export const { setFolder, setFolderList } = folderSlice.actions;

export default folderSlice.reducer;
