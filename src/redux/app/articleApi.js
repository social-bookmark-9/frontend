import axios from "axios";

export default class articleApi {
  // constructor() {
  //   this.base = "http://localhost:3000";
  // }

  async getArticles() {
    const getArticleConfig = {
      method: "GET",
      url: `http://localhost:3000/api/articles.json`,
    };

    return axios(getArticleConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
