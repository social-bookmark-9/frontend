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
      },
    };
    return axios(getProfileConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getProfileWith(memberId) {
    const getProfileWithConfig = {
      method: "GET",
      url: `${this.base}/api/mypage/${memberId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getProfileWithConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async editProfileUserDesc(userDesc) {
    const editProfileUserDescConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/statusmessage`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(userDesc),
    };
    return axios(editProfileUserDescConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
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
        console.log(err);
      });
  }

  async editProfileSnsUrl(urlData) {
    const editProfileSnsUrlConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/snsurl`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(urlData),
    };
    return axios(editProfileSnsUrlConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async editProfileImage(formData) {
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
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async editProfileHashtag(hashTag) {
    const editProfileHashtagConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/hashtag`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(hashTag),
    };
    return axios(editProfileHashtagConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async editReminderEmail(remindEmail) {
    console.log(remindEmail)
    const editReminderEmailConfig = {
      method: "PATCH",
      url: `${this.base}/api/mypage/reminder`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: remindEmail,
    };
    return axios(editReminderEmailConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    }
}
