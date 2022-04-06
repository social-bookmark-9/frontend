import { instance } from "./instance";

export default class searchApi {
  constructor() {
    this.base = process.env.REACT_APP_SERVER;
  }

  async searchByKeyword({ keyword, page }, callback) {
    await instance
      .get(
        `/api/searchpage/articles?hashtag=&titleOg=${keyword}&page=${parseInt(
          page,
        )}&sort=createdAt`,
      )
      .then(res => {
        callback(res.data.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getSearchArticle({ hashtag, titleOg, page, sort }, callback) {
    await instance
      .get(
        `/api/searchpage/articles?hashtag=${hashtag}&titleOg=${titleOg}&page=${parseInt(
          page,
        )}&sort=${sort}`,
      )
      .then(res => {
        callback(res.data.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
