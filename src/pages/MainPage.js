import React from "react";
import styled from "styled-components";
import {
  Navbar,
  Modal,
  Curations,
  RecommendList,
  RecommendUser,
  MainTop,
} from "../components";
import { Desktop } from "../styles/mediaquery";

const MainPage = props => {
  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} />
        {/* 맨 위 영역 */}
        <MainTop />

        {/* 추천아티클 */}
        <RecommendList />

        {/* 추천 큐레이션 */}
        <Curations />

        {/* 추천 유저 */}
        <RecommendUser />

        <Desktop>
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
        </Desktop>

        <Modal />
      </MainContainer>
    </React.Fragment>
  );
};

MainPage.defaultProps = {};

const MainContainer = styled.div``;

export default MainPage;
