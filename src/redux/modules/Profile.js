import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ProfileApi from "../app/ProfileApi";
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
  articleFolderList: [{
    folderId: 0,
    folderName: "",
    hashTag1: "",
    hashTag2: "",
    hashTag3: "",
    likeCnt: 0,
    completeRate: 0,
    isHide: true,
    articleList: [{
      title: "",
      content: "",
        }]
  }]
}
export const getProfileAxios = createAsyncThunk(
  'profile/getProfileAxios',
  async (_, {dispatch, getState}) => {
    const { memberId } = getState().profile.memberId;
    const resp = await ProfileApi.getProfileAxios({ memberId });
    dispatch(setProfile(resp.data));
    return resp;
  }
)
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers:{
    setProfile: (state, action) => {
    }
  },
  extraReducers: {
    [getProfileAxios.fulfilled] : (state, action) => {
    }
  }
})
export default profileSlice.reducer;