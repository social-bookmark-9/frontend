import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileApi from "../app/profileApi";
import { setFolder } from "./Folder";

const ProfileApi = new profileApi();

const initialState = {
  memberInfo: {
    memberId: "",
    nickname: "",
    email: "",
    profileImage: null,
    userDesc: "",
    instagramUrl: null,
    githubUrl: null,
    brunchUrl: null,
    blogUrl: null,
    websiteUrl: null,
  },
  folderInfo: [],
  defaultFolder: {},
};

export const getProfileAxios = createAsyncThunk(
  "profile/getProfileAxios",
  async (memberId, { dispatch }) => {
    const resp = await ProfileApi.getProfile(memberId);
    dispatch(setProfile(resp.data));
    dispatch(setFolder(resp.data.articleFolderListResponseDto));
    console.log(resp);
    return resp;
  },
);

export const getProfileWithAxios = createAsyncThunk(
  "profile/getProfileAxios",
  async (memberId, { dispatch }) => {
    const resp = await ProfileApi.getProfileWith(memberId);
    dispatch(setProfile(resp.data));
    dispatch(setFolder(resp.data.articleFolderListResponseDto));
    console.log(resp);
    return resp;
  },
);

export const editProfileUserDescAxios = createAsyncThunk(
  "profile/editProfileUserDescAxios",
  async ({ userDesc }) => {
    const resp = await ProfileApi.editProfileUserDesc({ userDesc });
    console.log(resp);
    return resp;
  },
);

export const editProfileUserNameAxios = createAsyncThunk(
  "profile/editProfileUserNameAxios",
  async ({ nickname }) => {
    const resp = await ProfileApi.editProfileUserName({ nickname });
    console.log(resp);
    return resp;
  },
);

export const editProfileImageAxios = createAsyncThunk(
  "profile/editProfileImageAxios",
  async (formData, { getState }) => {
    const resp = await ProfileApi.editProfileImage(formData);
    console.log(resp);
    return resp;
  },
);

export const editProfileHashtagAxios = createAsyncThunk(
  "profile/editProfileHashtagAxios",
  async hashTag => {
    const resp = await ProfileApi.editProfileHashtag(hashTag);
    console.log(resp);
    return resp;
  },
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.memberInfo = action.payload.memberInfoResponseDto;
      state.folderInfo = action.payload.articleFolderListResponseDto.slice(
        1,
        9,
      );
      state.defaultFolder = action.payload.articleFolderListResponseDto[0];
    },
  },
  extraReducers: {
    [editProfileUserDescAxios.fulfilled]: (state, action) => {},
    [editProfileImageAxios.fulfilled]: (state, action) => {},
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
