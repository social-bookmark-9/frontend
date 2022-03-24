import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../app/userApi";
import Swal from "sweetalert2";
const UserApi = new userApi();
const initialState = {
  userInfo: null,
  myInfo: null,
  isLogin: false,
  isMe: false,
};
export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLogin",
  async ({ code, navigate }, { dispatch }) => {
    const user = await UserApi.kakaoLogin({ code, navigate, dispatch });
    if (user) {
      dispatch(setMyInfo(user.data));
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
      return user;
    }
  },
);

export const checkUserAxios = createAsyncThunk(
  "user/checkUser",
  async ({ token, navigate }, { dispatch }) => {
    const user = await UserApi.checkUser({ token, navigate });
    console.log(user);
    if (user) {
      dispatch(setUser(user.data));
      return user;
    }
  },
);

export const refreshTokensAxios = createAsyncThunk(
  "user/refreshTokens",
  async ({ tokens, navigate }, { dispatch }) => {
    const user = await UserApi.refreshTokens({ tokens, navigate });
    console.log(user);
    if (user) {
      dispatch(setMyInfo(user.data));
      return user;
    }
  },
);

export const logoutAxios = createAsyncThunk(
  "user/logout",
  async (navigate, { dispatch }) => {
    dispatch(deleteUserFromSession());
    navigate("/", { replace: true });
    return true;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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

    [logoutAxios.fulfilled]: (state, action) => {
      if (action.payload) {
        state.isLogin = false;
      }
      Swal.fire({
        text: "로그아웃 되었습니다",
        confirmButtonText: "확인",
      });
    },

    [checkUserAxios.fulfilled]: (state, action) => {
      state.myInfo = action.payload.data.myInfo;
      state.isLogin = true;
      state.isMe = true;
    },
  },
});
export const { setMyInfo, deleteUserFromSession, setUser } = userSlice.actions;
export default userSlice.reducer;
