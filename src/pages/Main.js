import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { Button } from "../elements";
import { useNavigate } from "react-router";

const Main = props => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Navbar isLogin={props.isLogin} />
      <Button
        _onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </Button>
      <Button
        _onClick={() => {
          navigate("/user/nickname");
        }}
      >
        회원 정보
      </Button>
      <Button
        _onClick={() => {
          navigate("/mypage");
        }}
      >
        마이페이지
      </Button>
      <Button
        _onClick={() => {
          navigate("/articles");
        }}
      >
        폴더리스트 페이지
      </Button>
      <Button
        _onClick={() => {
          navigate("/article");
        }}
      >
        상세페이지
      </Button>

      {/* <Button
        _onClick={() => {
          dispatch(logoutAxios({ navigate }));
        }}
      >
        로그아웃 확인
      </Button> */}

      <Modal />
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
