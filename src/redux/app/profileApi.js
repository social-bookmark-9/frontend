import axios from "axios";
export default class ProfileApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }
  getToken = () => sessionStorage.getItem("token");
  async getProfile({ memberId }) {
    const getProfileConfig = {
      method: "GET",
      url: `${this.base}/api/mypage/${memberId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken(),
      },
    };
    return axios(getProfileConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err.response));
  }
  async editProfileStatus({ userDesc }) {
    const editProfileStatusConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/statusmessage`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken(),
      },
      data: JSON.stringify(userDesc),
    };
    return axios(editProfileStatusConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => console.log(err.response));
  }
  async editProfileSns({ urlList }) {
    const editSnsUrlConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/snsurl`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(urlList),
    };
    return axios(editSnsUrlConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
}
