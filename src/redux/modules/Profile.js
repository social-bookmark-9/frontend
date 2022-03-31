import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
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
  "profile/getProfile",
  async (memberId, { dispatch }) => {
    const resp = await ProfileApi.getProfile(memberId);
    dispatch(setProfile(resp.data));
    dispatch(setFolder(resp.data.articleFolderListResponseDto));
    console.log(resp);
    return resp;
  },
);

export const getProfileWithAxios = createAsyncThunk(
  "profile/getProfileWith",
  async (memberId, { dispatch }) => {
    const resp = await ProfileApi.getProfileWith(memberId);
    dispatch(setProfile(resp.data));
    dispatch(setFolder(resp.data.articleFolderListResponseDto));
    console.log(resp);
    return resp;
  },
);

export const editProfileUserDescAxios = createAsyncThunk(
  "profile/editProfileUserDesc",
  async ({ userDesc }) => {
    const resp = await ProfileApi.editProfileUserDesc({ userDesc });
    console.log(resp);
    return resp;
  },
);

export const editProfileUserNameAxios = createAsyncThunk(
  "profile/editProfileUserName",
  async ({ nickname }) => {
    const resp = await ProfileApi.editProfileUserName({ nickname });
    console.log(resp);
    return resp;
  },
);

export const editProfileImageAxios = createAsyncThunk(
  "profile/editProfileImage",
  async (formData, { getState }) => {
    const resp = await ProfileApi.editProfileImage(formData);
    console.log(resp);
    return resp;
  },
);

export const editProfileHashtagAxios = createAsyncThunk(
  "profile/editProfileHashtag",
  async hashTag => {
    const resp = await ProfileApi.editProfileHashtag(hashTag);
    console.log(resp);
    Swal.fire({
      text: "관심분야가 변경되었습니다",
      confirmButtonText: "확인",
    });
    return resp;
  },
);

export const editProfileSnsUrlAxios = createAsyncThunk(
  "profile/editProfileSnsUrl",
  async ({ urlData, memberId, navigate }) => {
    const resp = await ProfileApi.editProfileSnsUrl(urlData);
    console.log(resp);
    Swal.fire({ text: "저장되었습니다", confirmButtonText: "확인" });
    navigate(`/mypage/${memberId}`);
    return resp;
  },
);

export const editReminderEmailAxios = createAsyncThunk(
  "profile/editReminderEmailAxios",
  async remindEmail => {
    const res = await ProfileApi.editReminderEmail(remindEmail);
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
