import axios from "axios";
import { getToken } from "../../shared/utils";

export default class ProfileApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getProfile({memberId}) {
    const getProfileConfig = {
      method: "GET",
      url: `${this.base}/api/mypage/${memberId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(memberId),
    }
    return axios(getProfileConfig)
      .then(res => {
        console.log(res);
        console.log("되나?");
        return res.data;
      })
      .catch(err => console.log(err));
  }

  async editProfileStatus({ }) {
    const editProfileStatusConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/statusmessage`,
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': this.getToken(),
      },
      // data: JSON.stringify(userDesc)
    }
    return axios(editProfileStatusConfig)
      .then(res => {
        console.log(res);
        return(res.data);
      })
      .catch(err => console.log(err.response));
  }
  async editProfileSns({urlList}) {
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
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  async editProfileImage({profileImage}) {
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
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  async editProfileNickname({nickname}) {
    const editProfileNicknameConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/nickname`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken,
      },
      data: JSON.stringify(nickname),
    };
    return axios(editProfileNicknameConfig)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  async editProfileHashtag({hashtag}) {
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
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      });
  }
}