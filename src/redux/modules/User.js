import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../App/userApi";

const UserApi = new userApi();

const initialState = {
  user: null,
  is_login: false,
};

export const kakaoLoginAxios = createAsyncThunk(
  "user/kakaoLoginAxios",
  async code => {
    console.log(code);
    const user = await UserApi.kakaoLogin(code);
    if (user) {
      // return user;
      console.log(user);
    }
  },
);

// const kakaoLogin = (code) => {
//   return function (dispatch, getState, { history }) {
//     axios({
//       method: "GET",
//       url:``
//     })
//       .then((res) => {
//         console.log(res);

//         const ACCESS_TOKEN = res.data.accessToken;

//         localStorage.setItem("token", ACCESS_TOKEN);

//         history.replace("/")

//       }).catch(err => {
//           console.log("소셜로그인 에러", err);
//           window.alert("로그인 실패");
//           history.replace("/login");
//         })
//   }
// }

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      sessionStorage.setItem("token", action.payload.token);
    },
  },
  extraReducers: {
    // [registerAxios.fulfilled]: (state, action) => {
    //   return state;
    // },

    [kakaoLoginAxios.fulfilled]: (state, action) => {
      // state.user = action.payload.user;
      state.is_login = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
