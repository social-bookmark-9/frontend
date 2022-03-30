import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import Navbar from "../../components/common/Navbar";
import CurationsD from "../../components/mainpage/CurationsD";
import RecommendListD from "../../components/mainpage/RecommendListD";
import MainTopD from "../../components/mainpage/MainTopD";
import MainPageFooterD from "../../components/mainpage/MainPageFooterD";
import RecommendUserD from "../../components/mainpage/RecommendUserD";
import MainTopIsLoginD from "../../components/mainpage/MainTopIsLoginD";


const MainD = props => {
  const {isLogin} = props;
  const memberInfo = useSelector(state => state.main.userInfo);
  const folderList = useSelector(state => state.main.folderList);
  const articleList = useSelector(state => state.main.articleList);


  return (
    <React.Fragment>
      <MainContainer>
        <Navbar {...props} />

        {/* 맨 위 영역 */}
        {isLogin ? <MainTopIsLoginD /> : <MainTopD />}

        {/* 추천아티클 */}
        <RecommendListD articleList={articleList} />

        {/* 추천 큐레이션 */}
        <CurationsD folderList={folderList} />

        {/* 추천 유저 */}
        <RecommendUserD memberInfo={memberInfo}/>

        {/* 검색창, 기타 아랫부분 */}
        <MainPageFooterD {...props} {...memberInfo} />
        
      </MainContainer>
    </React.Fragment>
  );
};

MainD.defaultProps = {};

const MainContainer = styled.div``;

export default MainD;
