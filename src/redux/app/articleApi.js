import axios from "axios";
import Swal from "sweetalert2";
import { getToken } from "../../shared/utils";

export default class articleApi {
  constructor() {
    // this.base = "http://localhost:3000";
    this.base = process.env.REACT_APP_SERVER;
  }

  async postArticle({ articleData, navigate }) {
    const postArticleConfig = {
      method: "POST",
      url: `${this.base}/api/articles`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(articleData),
    };
    return axios(postArticleConfig)
      .then(res => {
        navigate("/", { replace: true });
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async postUserArticle({ articleData, navigate }) {
    const postArticleConfig = {
      method: "POST",
      url: `${this.base}/api/articles`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
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
      },
    };
    return axios(getArticleConfig)
      .then(res => {
        console.log("비로그인 겟아티클:", res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getArticleWith({ articleId, navigate }) {
    const getArticleWithConfig = {
      method: "GET",
      url: `${this.base}/api/articles/${articleId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getArticleWithConfig)
      .then(res => {
        console.log("로그인 겟아티클:", res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async deleteArticle({ articleId, navigate }) {
    const deleteArticleConfig = {
      method: "DELETE",
      url: `${this.base}/api/articles/${articleId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(deleteArticleConfig)
      .then(res => {
        console.log(res);
        Swal.fire({
          text: "링크를 삭제했습니다",
          confirmButtonText: "확인",
          confirmButtonColor: "#353C49",
        }).then(res => {
          navigate("/", { replace: true });
        });
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async updateReview({ articleId, review, navigate }) {
    const updateReviewConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/review`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(review),
    };
    return axios(updateReviewConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async saveMyArticle({ articleId, navigate }) {
    const saveArticleConfig = {
      methos: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(saveArticleConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async reviewHide({ articleId, navigate }) {
    const reviewHideConfig = {
      method: "PATCH",
      url: `/api/articles/${articleId}/review/hide`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(reviewHideConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  async updateTitleOg({ articleId, titleOg }) {
    const updateTitleOgConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/title`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(titleOg),
    };
    return axios(updateTitleOgConfig)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async changeArticleFolder({ articleId, articleFolderName }) {
    const changeArticleFolderConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/title`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(articleFolderName),
    };
    return axios(changeArticleFolderConfig)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
