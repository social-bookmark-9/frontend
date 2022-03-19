import axios from "axios";

export default class articleApi {
  constructor() {
    // this.base = "http://localhost:3000";
    this.base = process.env.REACT_APP_SERVER;
  }

  getToken = () => sessionStorage.getItem("accessToken");

  async postArticle({ articleData, navigate }) {
    const postArticleConfig = {
      method: "POST",
      url: `${this.base}/api/articles`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken(),
      },
      data: JSON.stringify(articleData),
    };
    return axios(postArticleConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getArticle({ articleId, navigate }) {
    const getArticleConfig = {
      method: "GET",
      url: `${this.base}/api/articles/${articleId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken(),
      },
    };

    return axios(getArticleConfig)
      .then(res => {
        console.log(res);
        // return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
