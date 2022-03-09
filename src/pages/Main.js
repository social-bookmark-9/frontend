import React from "react";
import { useNavigate } from "react-router";
import Button from "../elements/Button";

const Main = props => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Button
        _onClick={() => {
          navigate("/login");
        }}
        name="로그인 페이지 확인"
      />
      <Button
        _onClick={() => {
          navigate("user/nickname");
        }}
        name="유저 닉네임 페이지 확인"
      />
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
