import axios from "axios";

export default class folderApi {
  // constructor() {
  //   this.base = "http://localhost:3000";
  // }

  async getFolders() {
    const getFolderConfig = {
      method: "GET",
      url: `http://localhost:3000/api/folders.json`,
    };

    return axios(getFolderConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
