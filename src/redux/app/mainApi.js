import axios from "axios";

export default class mainApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getMain({page, limit, sortedBy}) {
    const getMainConfig = {
      method: "GET",
      url: `${this.base}/api/articles?page={page}&limit={limit}&sortedBy={sortedBy}`,
    };

    return axios(getMainConfig)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
