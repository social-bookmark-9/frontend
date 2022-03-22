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
        "X-AUTH-TOKEN": getToken(),
      },
    };
    return axios(getFolderConfig)
      .then(res => {
        console.log("폴더API: ", res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async createFolder({ folderData, navigate }) {
    console.log(folderData);
    const createFolderConfig = {
      method: "POST",
      url: `${this.base}/api/articleFolder`,
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": getToken(),
      },
      data: folderData,
    };
    return axios(createFolderConfig)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
