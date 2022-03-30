import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../app/userApi";

const UserApi = new userApi();

const initialState = {
  userInfo: null,
  myInfo: null,
  isLogin: false,
  isMe: false,
  register: {
    checkMemberName: "",
    usableMemberName: false,
  },
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLogin",
  async ({ code, navigate }, { dispatch }) => {
    const user = await UserApi.kakaoLogin({ code, navigate, dispatch });
    if (user) {
      dispatch(setMyInfo(user.data));
      console.log(user);
      return user;
    }
  },
);

export const checkMemberNameAxios = createAsyncThunk(
  "user/checkMemberName",
  async (memberNameData, { dispatch }) => {
    console.log(memberNameData);
    const user = await UserApi.checkMemberName(memberNameData);
    if (user) {
      dispatch(setMessage(user.message));
      console.log(user);
      return user;
    }
  },
);

export const registerAxios = createAsyncThunk(
  "user/register",
  async ({ userInfo, navigate }, { dispatch }) => {
    const user = await UserApi.register({ userInfo, navigate });
    if (user) {
      dispatch(setMyInfo(user.data));
      console.log(user);
      return user;
    }
  },
);

export const checkUserAxios = createAsyncThunk(
  "user/checkUser",
  async ({ token, navigate }, { dispatch }) => {
    const user = await UserApi.checkUser({ token, navigate });
    if (user) {
      dispatch(setUser(user.data));
      console.log(user);
      return user;
    }
  },
);

export const refreshTokensAxios = createAsyncThunk(
  "user/refreshTokens",
  async ({ tokens, navigate }, { dispatch }) => {
    const user = await UserApi.refreshTokens({ tokens, navigate });
    if (user) {
      dispatch(setMyInfo(user.data));
      console.log(user);
      return user;
    }
  },
);

export const kakaoLogoutAxios = createAsyncThunk(
  "user/logout",
  async navigate => {
    const user = await UserApi.kakaoLogout(navigate);
    // dispatch(deleteUserFromSession());
    console.log(user);
    return user;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.register.checkMemberName = action.payload;
      if (action.payload === "사용 가능한 닉네임 입니다") {
        state.register.usableMemberName = true;
      } else {
        state.register.usableMemberName = false;
      }
    },
    setMyInfo: (state, action) => {
      sessionStorage.setItem("accessToken", action.payload.token.accessToken);
      sessionStorage.setItem("refreshToken", action.payload.token.refreshToken);
      const myInfo = action.payload.myInfo;
      state.myInfo = { ...myInfo };
      state.isLogin = action.payload.login;
      state.isMe = action.payload.login;
    },
    deleteUserFromSession: (state, action) => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
    },
    setUser: (state, action) => {
      const myInfo = action.payload.myInfo;
      state.myInfo = { ...myInfo };
    },
  },
  extraReducers: {
    [registerAxios.fulfilled]: (state, action) => {
      state.myInfo = action.payload.data.myInfo;
      state.isLogin = true;
      state.isMe = true;
    },
    [kakaoLoginAxios.fulfilled && kakaoLoginAxios.user === true]: (
      state,
      action,
    ) => {
      state.myInfo = action.payload.data.myInfo;
      state.isLogin = true;
      state.isMe = true;
    },

    [kakaoLogoutAxios.fulfilled]: (state, action) => {
      if (action.payload) {
        state.isLogin = false;
        state.isMe = false;
      }
    },

    [checkUserAxios.fulfilled]: (state, action) => {
      state.myInfo = action.payload.data.myInfo;
      state.isLogin = true;
      state.isMe = true;
    },
  },
});
export const { setMessage, setMyInfo, deleteUserFromSession, setUser } =
  userSlice.actions;
export default userSlice.reducer;
