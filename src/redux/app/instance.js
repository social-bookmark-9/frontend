import axios from "axios";
import { getToken } from "../../shared/utils";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

instance.interceptors.request.use(
  config => {
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
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    const { response, config } = err;
    return new Promise(async (resolve, reject) => {

      const originalRequest = config;

      if (
        response.data.code === "401" &&
        response.data.message === "Expired" &&
        config &&
        !config._retry
      ) {
        originalRequest._retry = true;
        console.log("토큰 만료");

        // const res = await instance.post("/api/users/token", {
        //   data: JSON.stringify(tokens),
        // });
        // const data = res.data;
        // console.log(data);
      }
    });

    //     // accessToken = data.data.accessToken;
    //     // refreshToken = data.data.refreshToken;
    //     // sessionStorage.setItem("accessToken", accessToken);
    //     // sessionStorage.setItem("refreshToken", refreshToken);
    //     // console.log(accessToken, refreshToken);
    //   }
    //   // originalRequest.headers["X-AUTH-TOKEN"] = accessToken;
    // return axios(originalRequest);
    // return Promise.reject(err);
  },
);
