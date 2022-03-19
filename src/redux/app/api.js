import axios from "axios";
import { getToken } from "../../shared/utils";
import Swal from "sweetalert2";
import _ogs from "open-graph-scraper";

// axios 인스턴스
const instance = axios.create({
  baseURL: "http://localhost:3000",
});

// interceptor 헤더 설정
instance.interceptors.request.use(async config => {
  config.headers["content-type"] = "application/json; charset=utf-8";
  config.headers["X-AUTH-TOKEN"] = getToken;
  return config;
});
