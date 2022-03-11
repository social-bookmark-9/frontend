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
      >
        로그인 페이지 확인
      </Button>
      <Button
        _onClick={() => {
          navigate("user/nickname");
        }}
      >
        유저 닉네임 페이지 확인
      </Button>
      <Button
        _onClick={() => {
          navigate("/articles");
        }}
      >
        아티클 폴더 페이지 확인
      </Button>
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
