import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Curations from "../components/Curations";
import RecommendList from "../components/RecommendList";
import RecommendUser from "../components/RecommendUser";
import MainTop from "../components/MainTop";

const Main = props => {
  return (
    <React.Fragment>

        <Navbar isLogin={props.isLogin} />
        {/* 맨 위 영역 */}
        <MainTop />

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
