import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { Button, Image, Text, Title } from "../elements";
import Curations from "../components/Curations";
import RecommendList from "../components/RecommendList";
import RecommendUser from "../components/RecommendUser";

const Main = props => {

  return (
    <React.Fragment>
      <Navbar isLogin={props.isLogin} />

      {/* 맨 위 영역 */}
      <div style={{padding:"0 26px 44px 26px"}}>
        <Title _fontSize="24px" _padding="20px 0 12px 0">
          <p>
            Express yourself
            <span style={{verticalAlign:"middle"}}>
              <Image _src="/images/emoji1.png" _width="41px" _height="41px" />
            </span>
          </p>
          <p>with what you 
          <span style={{verticalAlign:"middle"}}>
            <Image _src="/images/emoji2.png" _width="40px" _height="40px" />
          </span>
          read.</p>
        </Title>
        <Text _color="#505866" _fontSize="14px" _padding="0 0 24px 0">
          내가 읽은 것들로 나를 표현하는 공간, 버블드
        </Text>
        <Button
          _width="102px"
          _padding="7px 10px"
          _fontSize="12px"
          bgColor=""
          _color="#383838"
          isBorder="true"
          borderRadius="5px"
        >
          내 버블드 만들기
        </Button>
      </div>

      {/* 추천아티클 */}
      <RecommendList />

      {/* 추천 큐레이션 */}
      <Curations />

      {/* 추천 유저 */}
      <RecommendUser />

      <Modal />
    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
