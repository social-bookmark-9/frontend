import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import profileApi from "../app/profileApi";

const ProfileApi = new profileApi();

const initialState = {
  memberInfo: {},
  articleFolderList: []
};

export const getProfileAxios = createAsyncThunk(
  'profile/getProfileAxios',
  async (memberId, {dispatch, getState}) => {
    console.log(getState());
    const resp = await ProfileApi.getProfile({memberId});
    console.log("여기", resp)
    dispatch(setProfile(resp.data));
    return resp;
  }
)

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers:{
    setProfile: (state, action) => {
      const memberInfo = action.payload.memberInfo;
      console.log(action.payload);
      const articleFolderList = action.payload.articleFolderList;
      console.log(action.payload);
      state.memberInfo = {...memberInfo};
      state.articleFolderList = articleFolderList;
    }
  },
  extraReducers: {
    [getProfileAxios.fulfilled] : (state, action) => {
    }
  }
})


export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;