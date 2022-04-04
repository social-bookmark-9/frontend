import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Modal from "../../components/modal/Modal";
import Navbar from "../../components/common/Navbar";
import MainTop from "../../components/mainpage/MainTop";
import SearchBox from "../../components/mainpage/SearchBox";
import Curations from "../../components/mainpage/Curations";
import RecommendUser from "../../components/mainpage/RecommendUser";
import RecommendList from "../../components/mainpage/RecommendList";

const MainPage = props => {
  const { isLogin } = props;

  const memberInfo = useSelector(state => state.main.userInfo);
  const folderList = useSelector(state => state.main.folderList);
  const articleList = useSelector(state => state.main.articleList);

  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} bgColor={isLogin ? "#f2f3f4" : null} />
        {/* 맨 위 영역 */}
        {isLogin ? null : <MainTop />}
        {/* 추천아티클 */}
        <RecommendList articleList={articleList} />
        {/* 추천 큐레이션 */}
        <Curations folderList={folderList} />
        {/* 추천 유저 */}
        <RecommendUser memberInfo={memberInfo} />
        {/* 검색 */}
        <SearchBox />
        {isLogin ? <Modal /> : null}
      </MainContainer>
    </React.Fragment>
  );
};

MainPage.defaultProps = {};

const MainContainer = styled.div``;

export default MainPage;
