import axios from "axios";
import Swal from "sweetalert2";
import { getToken } from "../../shared/utils";

export default class articleApi {
  constructor() {
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
        Swal.fire({
          text: "링크를 삭제했습니다",
          confirmButtonText: "확인",
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
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async saveArticle({ articleId, navigate }) {
    const saveArticleConfig = {
      methos: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(saveArticleConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async saveAllArticle({ folderId, articleFolderName }) {
    const saveArticleConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/articlefolder/${folderId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(articleFolderName),
    };
    return axios(saveArticleConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async reviewHide(articleId) {
    const reviewHideConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/review/hide`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(reviewHideConfig)
      .then(res => {
        return res;
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
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async changeArticleFolder({ articleId, articleFolderName }) {
    const changeArticleFolderConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/folder`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(articleFolderName),
    };
    return axios(changeArticleFolderConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async updateHashtag({ articleId, tagData }) {
    const updateHashtagConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/hashtag`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(tagData),
    };
    return axios(updateHashtagConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async updateReadCount(articleId) {
    const updateReadCountConfig = {
      method: "PATCH",
      url: `${this.base}/api/articles/${articleId}/readcount`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(updateReadCountConfig)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getArticleReview() {
    const getArticleReviewConfig = {
      method: "GET",
      url: `${this.base}/api/reviews`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getArticleReviewConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
