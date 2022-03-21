import axios from "axios";

export default class articleApi {
  constructor() {
    // this.base = "http://localhost:3000";
    this.base = process.env.REACT_APP_SERVER;
  }

  getToken = () => sessionStorage.getItem("accessToken");

  async postArticle({ articleData, setModalOpen }) {
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
        setModalOpen(true);
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

  async updateReview({ articleId, review, navigate }) {
    const updateReviewConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": this.getToken(),
      },
      data: JSON.stringify(review),
    };
    return axios(updateReviewConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // async reviewHide({articleId, navigate})
}
