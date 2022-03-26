import axios from "axios";
import Swal from "sweetalert2";
import { getToken, getTokens, getReToken } from "../../shared/utils";
import { refreshTokensAxios } from "../modules/User";
export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async kakaoLogin({ code, navigate, dispatch }) {
    const kakaoLoginConfig = {
      method: "GET",
      url: `${this.base}${process.env.REACT_APP_KAKAO_URI}?code=${code}`,
    };
    return axios(kakaoLoginConfig)
      .then(res => {
        if (res.data.data.login === true) {
          navigate("/", { replace: true });
          return res.data;
        }
        if (res.data.data.login === false) {
          navigate(
            "/user/nickname",
            {
              state: {
                kakaoId: res.data.data.kakaoMemberInfo.kakaoId,
                email: res.data.data.kakaoMemberInfo.email,
                profileImage: res.data.data.kakaoMemberInfo.profileImage,
              },
            },
            {
              replace: true,
            },
          );
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        if (err.message === "expired") {
          dispatch(refreshTokensAxios(getTokens));
        }
      });
  }

  async register({ userInfo, navigate }) {
    const registerConfig = {
      method: "POST",
      url: `${this.base}/api/users/register`,
      headers: { "content-type": "application/json" },
      data: JSON.stringify(userInfo),
    };
    return axios(registerConfig)
      .then(res => {
        navigate("/", { replace: true });
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async checkUser() {
    const checkUserConfig = {
      method: "GET",
      url: `${this.base}/api/users/check`,
      headers: {
        "content-type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(checkUserConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async refreshTokens({ tokens, navigate }) {
    const refreshTokensConfig = {
      method: "POST",
      url: `${this.base}/api/users/token`,
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify(tokens),
    };
    return axios(refreshTokensConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async logout(navigate) {
    const logoutConfig = {
      method: "GET",
      url: `${this.base}/api/users/logout`,
      headers: {
        "content-type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: getReToken(),
    };
    return axios(logoutConfig)
      .then(res => {
        console.log(res);
        Swal.fire({
          text: "로그아웃 되었습니다",
          confirmButtonText: "확인",
          confirmButtonColor: "#353C49",
        }).then(res => {
          navigate("/", { replace: true });
        });
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
