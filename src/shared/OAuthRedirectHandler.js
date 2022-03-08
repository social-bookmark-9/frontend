import { useEffect } from "react";
import { useDispatch } from "react-redux";


const OAuthRedirectHandler = () => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");

  // useEffect(async() => {
  //   await dispatch(actionCreators.kakaoLogin(code));
  // }, []);

}

export default OAuthRedirectHandler;