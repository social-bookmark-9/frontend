import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Navbar from "../../components/common/Navbar";
import ModalD from "../../components/modal/ModalD";
import CurationsD from "../../components/mainpage/CurationsD";
import RecommendListD from "../../components/mainpage/RecommendListD";
import RecommendUser from "../../components/mainpage/RecommendUser";
import MainTopD from "../../components/mainpage/MainTopD";

const MainD = props => {
  console.log(
    "로그인정보 확인",
    useSelector(state => state.user),
  );

  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} />
        {/* 맨 위 영역 */}
        <MainTopD />

        {/* 추천아티클 */}
        <RecommendListD />

        {/* 추천 큐레이션 */}
        <CurationsD />

        {/* 추천 유저 */}
        <RecommendUser />

        <div
          style={{
            width: "100%",
            height: "446px",
            backgroundColor: "#E7E8FA",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "446px",
            backgroundColor: "#353C49",
          }}
        />

        <ModalD />
      </MainContainer>
    </React.Fragment>
  );
};

MainD.defaultProps = {};

const MainContainer = styled.div``;

export default MainD;
