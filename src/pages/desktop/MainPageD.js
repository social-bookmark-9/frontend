import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import MainTopD from "../../components/mainpage/MainTopD";
import CurationsD from "../../components/mainpage/CurationsD";
import RecommendUserD from "../../components/mainpage/RecommendUserD";
import RecommendListD from "../../components/mainpage/RecommendListD";
import MainTopIsLoginD from "../../components/mainpage/MainTopIsLoginD";
import MainPageFooterD from "../../components/mainpage/MainPageFooterD";
import NavbarD from "../../components/common/NavbarD";
import EventAlert from "../../components/mainpage/EventAlert";

const MainPageD = props => {
  const { isLogin, memberId } = props;
  const memberInfo = useSelector(state => state.main.userInfo);
  const folderList = useSelector(state => state.main.folderList);
  const articleList = useSelector(state => state.main.articleList);
  const myId = memberId;
  const isMain = true;

  return (
    <React.Fragment>
      <EventAlert />
      <NavbarD {...props} bgColor="#fafbfb" />
      <MainContainer>
        {/* 맨 위 영역 */}
        {isLogin ? <MainTopIsLoginD isMain={isMain} /> : <MainTopD />}

        {/* 추천아티클 */}
        <RecommendListD articleList={articleList} />

        {/* 추천 큐레이션 */}
        <CurationsD folderList={folderList} myId={myId} />

        {/* 추천 유저 */}
        <RecommendUserD memberInfo={memberInfo} />

        {/* 검색창, 기타 아랫부분 */}
        <MainPageFooterD {...props} {...memberInfo} />
      </MainContainer>
    </React.Fragment>
  );
};

MainPageD.defaultProps = {};

const MainContainer = styled.div`
  width: 100vw;
`;

export default MainPageD;
