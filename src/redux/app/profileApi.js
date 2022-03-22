import axios from "axios";
import { getToken } from "../../shared/utils";
export default class ProfileApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getProfile(memberId) {
    console.log(typeof memberId);
    // console.log(typeof parse)
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
    console.log(nickname);
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


  async editProfileSns({ urlList }) {
    const editProfileSnsConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/snsurl`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(urlList),
    };
    return axios(editProfileSnsConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  async editProfileImage({ profileImage }) {
    const editProfileImageConfig = {
      method: "POST",
      url: `${this.base}/api/mypage/profileimage`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(profileImage),
    };
    return axios(editProfileImageConfig)
      .then(res => {
        console.log(res);
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