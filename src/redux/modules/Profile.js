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

export const editProfileImageAxios = createAsyncThunk(
  "profile/editProfileImageAxios",
  async (formData, {getState}) => {
    // const _image = getState().image.imageUrl;
    // formData.append("image", _image);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }
    const res = await ProfileApi.editProfileImage(formData);
    console.log(res);
  }
)

export const editProfileSnsUrlAxios = createAsyncThunk(
  "profile/editProfileSnsUrlAxios",
  async ({urlList}) => {
    const res = await ProfileApi.editProfileSnsUrl({urlList});
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
      console.log(state);
      console.log(action);
    },
    [editProfileImageAxios.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
    }
  },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;