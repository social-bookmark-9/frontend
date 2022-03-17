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
      <div style={{ paddingBottom: "8px" }}></div>
      <Button
        _onClick={() => {
          navigate("/login");
        }}
        _padding="8px"
      >
        로그인
      </Button>
      <div style={{ paddingBottom: "8px" }}></div>
      <Button
        _onClick={() => {
          navigate("/user/nickname");
        }}
        _padding="8px"
      >
        회원 정보
      </Button>
      <div style={{ paddingBottom: "8px" }}></div>
      <Button
        _onClick={() => {
          navigate("/mypage");
        }}
        _padding="8px"
      >
        마이페이지
      </Button>
      <div style={{ paddingBottom: "8px" }}></div>

      <Button
        _onClick={() => {
          navigate("/articles");
        }}
        _padding="8px"
      >
        폴더리스트 페이지
      </Button>
      <div style={{ paddingBottom: "8px" }}></div>
      <Button
        _onClick={() => {
          navigate("/article");
        }}
        _padding="8px"
      >
        상세페이지
      </Button>
      <div style={{ paddingBottom: "8px" }}></div>

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
