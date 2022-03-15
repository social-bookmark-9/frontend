import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Button from "../elements/Button";
import { logoutAxios } from "../redux/modules/User";

const Main = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <Button
        _onClick={() => {
          dispatch(logoutAxios({ navigate }));
        }}
      >
        로그아웃 확인
      </Button>
      <Modal />
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
