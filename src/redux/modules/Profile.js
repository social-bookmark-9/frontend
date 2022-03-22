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
};

export const getProfileAxios = createAsyncThunk(
  "profile/getProfileAxios",
  async (memberId, { dispatch }) => {
    const resp = await ProfileApi.getProfile(memberId);
    dispatch(setProfile(resp.data));
    dispatch(setFolder(resp.data));
    return resp;
  },
);

export const editProfileUserDescAxios = createAsyncThunk(
  "profile/editProfileUserDescAxios",
  async ({userDesc}) => {
    const res = await ProfileApi.editProfileUserDesc({userDesc});
    return res;
  }
)

export const editProfileUserNameAxios = createAsyncThunk(
  "profile/editProfileUserNameAxios",
  async ({nickname}) => {
    const res = await ProfileApi.editProfileUserName({nickname});
    console.log(res);
    return res;
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const memberInfo = action.payload.memberInfoResponseDto;
      state.memberInfo = { ...memberInfo };
    },
  },
  extraReducers: {
    [getProfileAxios.fulfilled]: (state, action) => {
      state.folder = action.payload.articleFolderList;
    },
    [editProfileUserDescAxios.fulfilled]: (state, action) => {
      console.log(action);
    }
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;