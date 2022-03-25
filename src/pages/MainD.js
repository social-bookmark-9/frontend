import React from "react";
import styled from "styled-components";
import {
  Navbar,
  ModalD,
  CurationsD,
  RecommendListD,
  RecommendUser,
  MainTopD,
} from "../components";
import { useSelector } from "react-redux";

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
