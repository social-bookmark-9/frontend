import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import userApi from "../app/userApi";

const UserApi = new userApi();

const initialState = {
  isMe: false,
  myInfo: null,
  userInfo: null,
  memberId: null,
  isLogin: false,
  register: {
    checkMemberName: "",
    usableMemberName: false,
  },
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLogin",
  async ({ code, navigate }, { dispatch }) => {
    await UserApi.kakaoLogin({ code, navigate }, data => {
      dispatch(setMyInfo(data));
    });
  },
);

export const checkMemberNameAxios = createAsyncThunk(
  "user/checkMemberName",
  async (memberNameData, { dispatch }) => {
    const user = await UserApi.checkMemberName(memberNameData);
    console.log(user);
    if (user) {
      dispatch(setMessage(user.message));
      return user;
    }
  },
);

export const registerAxios = createAsyncThunk(
  "user/register",
  async ({ userInfo, navigate }, { dispatch }) => {
    console.log(userInfo);
    const user = await UserApi.register({ userInfo, navigate });
    if (user) {
      dispatch(setMyInfo(user.data));
      Swal.fire({
        text: "회원가입이 완료되었습니다!",
        confirmButtonText: "확인",
      });
      return user;
    }
  },
);

export const checkUserAxios = createAsyncThunk(
  "user/checkUser",
  async (token, { dispatch }) => {
    console.log(token);
    const user = await UserApi.checkUser(token, data => {
      dispatch(setUser(data));
    });
    return user;
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
  async (navigate, { dispatch }) => {
    const user = await UserApi.kakaoLogout(navigate);
    dispatch(deleteUserFromSession());
    Swal.fire({
      text: "로그아웃 되었습니다",
      confirmButtonText: "확인",
    }).then(() => {
      navigate("/", { replace: true });
    });
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
      state.isMe = action.payload.login;
      state.isLogin = action.payload.login;
      state.memberId = action.payload.myInfo.memberId;
    },
    deleteUserFromSession: (state, action) => {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
    },
    setUser: (state, action) => {
      console.log(action.payload);
      const myInfo = action.payload.myInfo;
      state.myInfo = { ...myInfo };
      state.memberId = action.payload.myInfo.memberId;
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
      state.isLogin = true;
      state.isMe = true;
    },
  },
});
export const { setMessage, setMyInfo, deleteUserFromSession, setUser } =
  userSlice.actions;
export default userSlice.reducer;
