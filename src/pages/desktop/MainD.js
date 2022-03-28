import React from "react";

import styled from "styled-components";

import Navbar from "../../components/common/Navbar";
import ModalD from "../../components/modal/ModalD";
import CurationsD from "../../components/mainpage/CurationsD";
import RecommendListD from "../../components/mainpage/RecommendListD";
import MainTopD from "../../components/mainpage/MainTopD";
import MainPageFooterD from "../../components/mainpage/MainPageFooterD";
import RecommendUserD from "../../components/mainpage/RecommendUserD";

const MainD = props => {
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
        <RecommendUserD />

        {/* 검색창, 기타 아랫부분 */}
        <MainPageFooterD />

        <ModalD />
      </MainContainer>
    </React.Fragment>
  );
};

MainD.defaultProps = {};

const MainContainer = styled.div``;

export default MainD;
