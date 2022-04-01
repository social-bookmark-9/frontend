import axios from "axios";
import { getToken, getReToken } from "../../shared/utils";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

console.log("엑세스토큰", getToken());
console.log("리프레시토큰", getReToken());

instance.interceptors.request.use(
  config => {
    console.log(config);
    config.headers["content-type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Accept"] = "*/*";
    if (getToken()) {
      config.headers["X-AUTH-TOKEN"] = getToken();
      return config;
    }
    return config;
  },
  err => {
    console.log(err);
    return console.log(err);
  },
);

instance.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  async err => {
    const { response, config } = err;
    const originalRequest = config;
    if (response.status === 401) {
      if (response.data.message === "expired") {
        let accessToken = getToken();
        let refreshToken = getReToken();
        const tokens = { accessToken, refreshToken };
        if (refreshToken) {
          const { data } = await checkToken(tokens);
          accessToken = data.accessToken;
          refreshToken = data.refreshToken;
          sessionStorage.setItem("accessToken", accessToken);
          sessionStorage.setItem("refreshToken", refreshToken);
        }
        originalRequest.headers["X-AUTH-TOKEN"] = accessToken;
      }
      return axios(originalRequest);
    }
  },
);

const checkToken = async ({ accessToken, refreshToken }) => {
  const response = await instance.post("/api/users/token", {
    headers: { "content-type": "application/json" },
    data: JSON.stringify({ accessToken, refreshToken }),
  });
  return response;
};
