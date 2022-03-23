import axios from "axios";
import { getToken } from "../../shared/utils";

export default class ProfileApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getProfile(memberId) {
    const getProfileConfig = {
      method: "GET",
      url: `${this.base}/api/mypage/${memberId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getProfileConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }


  async editProfileUserDesc(userDesc) {
    const editProfileUserDescConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/statusmessage`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(userDesc)
    };
    return axios(editProfileUserDescConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err.response));
  }


  async editProfileUserName(nickname) {
    const editProfileUserNameConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/nickname`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(nickname),
    };
    return axios(editProfileUserNameConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  }


  async editProfileSnsUrl(urlList) {
    console.log(urlList);
    const editProfileSnsUrlConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/snsurl`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(urlList),
    };
    return axios(editProfileSnsUrlConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  async editProfileImage(formData) {
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);}
    console.log(formData);
    const editProfileImageConfig = {
      method: "POST",
      url: `${this.base}/api/mypage/profileimage`,
      headers: {
        "Content-Type": "multipart/form-data",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(formData),
    };
    return axios(editProfileImageConfig)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err.response);
      });
  }



  async editProfileHashtag({ hashtag }) {
    const editProfileHashtagConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/hashtag`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(hashtag),
    };
    return axios(editProfileHashtagConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
}