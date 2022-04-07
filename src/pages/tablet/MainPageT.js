import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import ModalD from "../../components/modal/ModalD";
import Navbar from "../../components/common/Navbar";
import MainTop from "../../components/mainpage/MainTop";
import SearchBox from "../../components/mainpage/SearchBox";
import Curations from "../../components/mainpage/Curations";
import RecommendList from "../../components/mainpage/RecommendList";
import EventAlert from "../../components/mainpage/EventAlert";
import RecommendUser from "../../components/mainpage/RecommendUser";

const MainPageT = props => {
  const { isLogin, memberId } = props;
  const memberInfo = useSelector(state => state.main.userInfo);
  const folderList = useSelector(state => state.main.folderList);
  const articleList = useSelector(state => state.main.articleList);
  const myId = memberId;

  return (
    <React.Fragment>
      <EventAlert />
      <MainContainer>
        <Navbar {...props} bgColor={isLogin ? "#f2f3f4" : null} />
        {/* 맨 위 영역 */}
        {isLogin ? null : <MainTop />}
        {/* 추천아티클 */}
        <RecommendList articleList={articleList} />
        {/* 추천 큐레이션 */}
        <Curations folderList={folderList} myId={myId} />
        {/* 추천 유저 */}
        {/* <RecommendUserT memberInfo={memberInfo} /> */}
        <RecommendUser memberInfo={memberInfo} />
        {/* 검색 */}
        <SearchBox />
        <ModalD isLogin={isLogin} />
      </MainContainer>
    </React.Fragment>
  );
};

MainPageT.defaultProps = {};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default MainPageT;
