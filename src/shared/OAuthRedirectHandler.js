import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { kakaoLoginAxios } from "../redux/modules/User";
import Spinner from "./Spinner";

const OAuthRedirectHandler = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");
  // sessionStorage.setItem("kakaoToken", code);

  useEffect(() => {
    if (code) {
      dispatch(kakaoLoginAxios({ code, navigate }));
    }
  });

  return <Spinner />;
};

export default OAuthRedirectHandler;
