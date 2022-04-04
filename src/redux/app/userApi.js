import axios from "axios";
import { instance } from "./instance";

import { getToken, getReToken } from "../../shared/utils";
import Swal from "sweetalert2";
export default class userApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async kakaoLogin({ code, navigate }, callback) {
    await instance
      .get(`${process.env.REACT_APP_KAKAO_URI}?code=${code}`)
      .then(res => {
        if (res.data.data.login === true) {
          navigate("/", { replace: true });
          callback(res.data.data);
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

  async checkMemberName(memberNameData) {
    const checkMemberNameConfig = {
      method: "POST",
      url: `${this.base}/api/users/checkmembername`,
      headers: { "content-type": "application/json" },
      data: JSON.stringify(memberNameData),
    };
    return axios(checkMemberNameConfig)
      .then(res => {
        console.log(res);
        return res.data;
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

  async checkUser(token, callback) {
    await instance
      .get(`${this.base}/api/users/check`, {
        data: JSON.stringify(token),
      })
      .then(res => {
        console.log(res);
        callback(res.data.data);
        return res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async kakaoLogout(navigate) {
    const logoutConfig = {
      method: "POST",
      url: `${this.base}/api/users/logout`,
      headers: { "content-type": "application/json" },
      data: JSON.stringify(getReToken()),
    };
    return axios(logoutConfig)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
