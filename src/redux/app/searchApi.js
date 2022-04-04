import axios from "axios";

import { getToken } from "../../shared/utils";

export default class searchApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }
  async getSearchArticle({ hashtag, titleOg, page }) {
    const getSearchArticleConfig = {
      method: "GET",
      url: `${
        this.base
      }/api/searchpage/articles?hashtag=${hashtag}&titleOg=${titleOg}&page=${parseInt(
        page,
      )}&sort=createdAt`,
      headers: {
        "content-type": "application/json;",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getSearchArticleConfig)
      .then(res => {
        console.log(res);
        // return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
