import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakaoLoginAxios } from "../redux/modules/User";

const OAuthRedirectHandler = props => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    dispatch(kakaoLoginAxios(code));
  });

  return code;
};

export default OAuthRedirectHandler;
