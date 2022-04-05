import { instance, accessInstance } from "./instance";

export default class searchApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async getSearchArticle({ hashtag, titleOg, page, sort }, callback) {
    await accessInstance
      .get(
        `/api/searchpage/articles?hashtag=${hashtag}&titleOg=${titleOg}&page=${parseInt(
          page,
        )}&sort=${sort}`,
      )
      .then(res => {
        console.log(res.data.data);
        callback(res.data.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
