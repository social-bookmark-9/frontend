import axios from "axios";
import { getToken } from "../../shared/utils";

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

  async getFolderList() {
    const getFolderListConfig = {
      method: "GET",
      url: `${this.base}/api/articleFolders/folderName`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getFolderListConfig)
      .then(res => {
        console.log(res);
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
        console.log(res);
        // return res.data
      })
      .catch(err => {
        console.log(err);
      });
  }
}
