import axios from "axios";
import { getToken } from "../../shared/utils";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(
  async req => {
    if (getToken() !== null) {
      req.headers["X-AUTH-TOKEN"] = await getToken();
    }
    req.headers["content-type"] = "application/json; charset=utf-8";
    // req.headers["X-Requested-With"] = "XMLHttpRequest";
    // req.headers.Accept = "application/json";
    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  },
);

// export const userApi = {
//   kakaoLogin: ({ code, navigate, dispatch }) =>
//     instance.get(`${process.env.REACT_APP_KAKAO_URI}?code=${code}`),
// };

export const api = {
  getArticle: ({ articleId, navigate }) =>
    instance.get(`/api/articles/${articleId}`),
};

export default api;
