import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import profileApi from "../app/profileApi";

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
};

export const getProfileAxios = createAsyncThunk(
  "profile/getProfileAxios",
  async (memberId, { dispatch }) => {
    const res = await ProfileApi.getProfile(memberId);
    console.log(res);
    dispatch(setProfile(res.data));
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
    console.log(res);
    return res;
  },
);

export const editProfileImageAxios = createAsyncThunk(
  "profile/editProfileImageAxios",
  async (formData, { getState }) => {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }
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
      state.folderInfo = action.payload.articleFolderListResponseDto;
    },
  },
  extraReducers: {
    [editProfileUserDescAxios.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
    },
    [editProfileImageAxios.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
