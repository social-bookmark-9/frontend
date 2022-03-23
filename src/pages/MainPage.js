import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Navbar,
  Modal,
  Curations,
  RecommendList,
  RecommendUser,
  MainTop,
} from "../components";

const MainPage = props => {
  const isMe = useSelector(state => state.user.isMe);
  const isLogin = useSelector(state => state.user.isLogin);
  const memberInfo = useSelector(state => state.main.userInfo);
  const folderList = useSelector(state => state.main.folderList);
  const articleList = useSelector(state => state.main.articleList);

  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} bgColor={isLogin ? "#f2f3f4" : null} />
        {/* 맨 위 영역 */}
        {isMe ? null : <MainTop />}
        {/* 추천아티클 */}
        <RecommendList articleList={articleList} />
        {/* 추천 큐레이션 */}
        <Curations folderList={folderList} />

        {/* 추천 유저 */}
        <RecommendUser memberInfo={memberInfo} />

        {/* <Desktop>
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
        </Desktop> */}

        <Modal />
      </MainContainer>
    </React.Fragment>
  );
};

MainPage.defaultProps = {};

const MainContainer = styled.div``;

export default MainPage;
