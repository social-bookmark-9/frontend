import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";
import Button from "../elements/Button";
import { logoutAxios } from "../redux/modules/User";

const Main = props => {
  return (
    <React.Fragment>
      <Navbar isLogin={props.isLogin} />
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
