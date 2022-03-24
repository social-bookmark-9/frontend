import axios from "axios";
import { getToken } from "../../shared/utils";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(
  async req => {
    req.headers["content-type"] = "application/json; charset=utf-8";
    if (getToken() !== null) {
      req.headers["X-AUTH-TOKEN"] = await getToken();
    }
    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  resp => {
    console.lof(resp);
    return resp;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  },
);

export default instance;
