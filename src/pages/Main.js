import React from "react";
import { useNavigate } from "react-router";
// import styled from "styled-components";

const Main = props => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </button>
      <button
        onClick={() => {
          navigate("/information");
        }}
      >
        유저 정보
      </button>
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
