import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
  articleFolderList: [
    {
      folderId: 0,
      folderName: "",
      hashTag1: "",
      hashTag2: "",
      hashTag3: "",
      likeCnt: 0,
      completeRate: 0,
      isHide: true,
      articleList: [
        {
          title: "",
          content: "",
        },
      ],
    },
  ],
};


export const getProfileAxios = createAsyncThunk(
  'profile/getProfileAxios',
  async (memberId, {dispatch}) => {
    const resp = await ProfileApi.getProfile(memberId);
    dispatch(setProfile(resp));
    dispatch(setFolder(resp));
    return resp;
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers:{
    setProfile: (state, action) => {
      const memberInfo = action.payload.memberInfoResponseDto;
      state.memberInfo = {...memberInfo};
    }
  },
  extraReducers: {
    [getProfileAxios.fulfilled] : (state, action) => {
      state.folder = action.payload.articleFolderList;
    }
  }
})


export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;