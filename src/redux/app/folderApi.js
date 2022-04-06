import axios from "axios";
import { getToken } from "../../shared/utils";
import { instance } from "./instance";

export default class folderApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getFolder(folderId) {
    const getFolderConfig = {
      method: "GET",
      url: `${this.base}/api/articleFolders/${folderId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios(getFolderConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getFolderWith(folderId) {
    const getFolderWithConfig = {
      method: "GET",
      url: `${this.base}/api/articleFolders/${folderId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getFolderWithConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getFolderList(callback) {
    await instance
      .get(`/api/articleFolders/folderName`)
      .then(res => {
        callback(res.data.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async createFolder({ folderData, navigate }) {
    const createFolderConfig = {
      method: "POST",
      url: `${this.base}/api/articleFolder`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(folderData),
    };
    return axios(createFolderConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async updateFolderName({ folderId, articleFolderName }) {
    const updateFolderNameConfig = {
      method: "PATCH",
      url: `${this.base}/api/articleFolders/${folderId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: JSON.stringify(articleFolderName),
    };
    return axios(updateFolderNameConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async deleteFolder({ folderId, navigate }) {
    const deleteFolderConfig = {
      method: "DELETE",
      url: `${this.base}/api/articleFolders/${folderId}`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(deleteFolderConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async addLike(folderId) {
    const addLikeConfig = {
      method: "POST",
      url: `${this.base}/api/articleFolders/${folderId}/likes`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(addLikeConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async Like(folderId) {
    const cancelLikeConfig = {
      method: "DELETE",
      url: `${this.base}/api/articleFolders/${folderId}/likes`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(cancelLikeConfig)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
