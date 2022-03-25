import axios from "axios";
import { getToken } from "../../shared/utils";

export default class mainApi {
  constructor() {
    // this.base = process.env.REACT_APP_SERVER;
    this.base = "http://3.34.99.169";
  }

  async getMain() {
    const getMainConfig = {
      method: "GET",
      url: `${this.base}/api/mainpage`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios(getMainConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getMainWith() {
    const getMainWithConfig = {
      method: "GET",
      url: `${this.base}/api/mainpage`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };

    return axios(getMainWithConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
