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
        // const ACCESS_TOKEN = res.data.data.token.accessToken;
        // console.log("카카오로그인 액세스토큰");
        // console.log(ACCESS_TOKEN);
        // console.log(res.data);
        if (res.data.data.login === true) {
          console.log(res.data.data);
          navigate("/", {replace:true})
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
        console.log(res);
        alert("회원가입 완료");
        console.log(res.data.accessToken);
        navigate("/articles", { replace:true });
        return res.data;
      })
      .catch((err) => console.log(err.response));
  }


}
