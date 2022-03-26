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
    const res = await ProfileApi.getProfile(memberId);
    dispatch(setProfile(res.data));
    dispatch(setFolder(res.data.articleFolderListResponseDto));
    return res;
  },
);

export const getProfileWithAxios = createAsyncThunk(
  "profile/getProfileAxios",
  async (memberId, { dispatch }) => {
    const res = await ProfileApi.getProfileWith(memberId);
    dispatch(setProfile(res.data));
    dispatch(setFolder(res.data.articleFolderListResponseDto));
    return res;
  },
);

export const editProfileUserDescAxios = createAsyncThunk(
  "profile/editProfileUserDescAxios",
  async ({ userDesc }) => {
    const res = await ProfileApi.editProfileUserDesc({ userDesc });
    return res;
  },
);

export const editProfileUserNameAxios = createAsyncThunk(
  "profile/editProfileUserNameAxios",
  async ({ nickname }) => {
    const res = await ProfileApi.editProfileUserName({ nickname });
    return res;
  },
);

export const editProfileImageAxios = createAsyncThunk(
  "profile/editProfileImageAxios",
  async (formData, { getState }) => {
    const res = await ProfileApi.editProfileImage(formData);
    return res;
  },
);

export const editProfileHashtagAxios = createAsyncThunk(
  "profile/editProfileHashtagAxios",
  async hashTag => {
    const res = await ProfileApi.editProfileHashtag(hashTag);
    return res;
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
