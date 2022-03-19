import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  "profile/getProfileAxios",
  async (_, { dispatch, getState }) => {},
);
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});
export default profileSlice.reducer;
