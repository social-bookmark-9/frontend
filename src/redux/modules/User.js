import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../app/userApi";


const UserApi = new userApi();

const initialState = {
  token: null,
  is_login: false,
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLoginAxios",
  async ({code, navigate}, {dispatch}) => {
    const user = await UserApi.kakaoLogin({code, navigate});
    console.log(user);
    if (user) {
      console.log("여기는 user.js의 if(user)")
      console.log(user);
      dispatch(setUser(user.data));
      return user;
    }
  },
);

export const registerAxios = createAsyncThunk(
  "user/registerAxios",
  async({ userInfo, navigate}, {dispatch}) => {
    console.log("유저인포");
    console.log(userInfo);
    const user = await UserApi.register({ userInfo, navigate});
    if (user) {
      console.log("여기는 register의 if(user)")
      console.log(user);
      dispatch(setUser(user.data));
      return user;
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("셋유저 스테이트");
      console.log(state);
      sessionStorage.setItem("accessToken", action.payload.token.accessToken);

    },
    // getUser: (state, action) => {
    //   state.token = sessionStorage.getItem("accessToken");
    //   state.is_login = true;
    // },
    
  },
  extraReducers: {
    [registerAxios.fulfilled]: (state, action) => {
      console.log("레지스터 풀필드 페이로드?");
      console.log(state);
      state.token = action.payload.data.token.accessToken;
      state.is_login = action.payload.data.login;
    },

    // [kakaoLoginAxios.fulfilled]: (state, action) => {
    //   console.log("로그인 풀필드 페이로드?");
    //   console.log(state);
    //   console.log(action);
    //   if (state.login === true) {
    //   state.token = action.payload.token.accessToken;
    //   state.is_login = action.payload.data.login;
    //   }
    // },
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;
