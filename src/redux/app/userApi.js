import axios from "axios";

export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  getToken = () => sessionStorage.getItem("accessToken");

  async kakaoLogin({ code, navigate }) {
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
      headers: { "X-AUTH-TOKEN": this.getToken() },
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
}
