import axios from "axios";

export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async kakaoLogin({code, navigate}) {
    const kakaoLoginConfig = {
      method: "GET",
      url: `${this.base}${process.env.REACT_APP_KAKAO_URI}?code=${code}`,
    };
    return axios(kakaoLoginConfig)
      .then(res => {
        if (res.data.data.login === true) {
          navigate("/", {replace:true})
          return (res.data);
        };
        if (res.data.data.login === false) {
          navigate(
            "/user/nickname", {
              state : {
                kakaoId: res.data.data.kakaoMemberInfo.kakaoId,
                email: res.data.data.kakaoMemberInfo.email,
                profileImage: res.data.data.kakaoMemberInfo.profileImage
              }
            }, {
              replace:true
            }
          )
          return (false);
        };
      })
      .catch(err => console.log(err.response));
  }

  async register({ userInfo, navigate }) {
    console.log(userInfo);
    const registerConfig = {
      method: "POST",
      url: `${this.base}/api/users/register`,
      headers: { "content-type": "application/json" },
      data: JSON.stringify(userInfo)
    };

    return axios(registerConfig)
      .then((res) => {
        alert("회원가입 완료");
        navigate("/articles", { replace:true });
        return res.data;
      })
      .catch((err) => console.log(err.response));
  }
}
