import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../app/userApi";

const UserApi = new userApi();

const initialState = {
  token: null,
  is_login: true,
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLoginAxios",
  async ({ code, navigate }, { dispatch }) => {
    const user = await UserApi.kakaoLogin({ code, navigate });
    if (user) {
      dispatch(setUserToSession(user.data));
      return user;
    }
  },
);

export const registerAxios = createAsyncThunk(
  "user/registerAxios",
  async ({ userInfo, navigate }, { dispatch }) => {
    const user = await UserApi.register({ userInfo, navigate });
    if (user) {
      dispatch(setUserToSession(user.data));
      return user;
    }
  },
);

export const logoutAxios = createAsyncThunk(
  "user/logoutAxios",
  async ({ navigate }, { dispatch }) => {
    dispatch(deleteUserFromSession());
    navigate("/", { replace: true });
    return true;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToSession: (state, action) => {
      sessionStorage.setItem("accessToken", action.payload.token.accessToken);
    },
    deleteUserFromSession: (state, action) => {
      sessionStorage.removeItem("accessToken");
    },
  },
  extraReducers: {
    [registerAxios.fulfilled]: (state, action) => {
      state.token = action.payload.data.token.accessToken;
      state.is_login = action.payload.data.login;
    },
    [kakaoLoginAxios.fulfilled]: (state, action) => {
      state.token = action.payload.data.token.accessToken;
      state.is_login = action.payload.data.login;
    },
    [logoutAxios.fulfilled]: (state, action) => {
      if (action.payload) {
        state.token = initialState.token;
        state.is_login = false;
      }
      alert("로그아웃 완료");
    },
  },
});

export const { setUserToSession, deleteUserFromSession } = userSlice.actions;
export default userSlice.reducer;
