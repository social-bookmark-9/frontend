import axios from "axios";

export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_BASE_URI;
  }

  async kakaoLogin(code) {
    const kakaoLoginConfig = {
      method: "GET",
      url: `${this.base}?code=${code}`,
    };
    return axios(kakaoLoginConfig)
      .then(res => {
        console.log(res);
        // // return res.data;
        // const ACCESS_TOKEN = res.data.accessToken;
        // localStorage.setItem("token", ACCESS_TOKEN);
        // navigate("/", {replace:true})
      })
      .catch(err => console.log(err.response));
  }
}
