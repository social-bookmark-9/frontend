import React from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Curations from "../components/Curations";
import RecommendList from "../components/RecommendList";
import RecommendUser from "../components/RecommendUser";
import MainTop from "../components/MainTop";
import { Desktop } from "../styles/mediaquery";
import { useSelector } from "react-redux";

const Main = props => {

  console.log("로그인정보 확인", useSelector(state => state.user));

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

        <Desktop>
          <div style={{width:"100%", height:"446px", backgroundColor:"#E7E8FA"}} />
          <div style={{width:"100%", height:"446px", backgroundColor:"#353C49"}} />
        </Desktop>
        
        <Modal />


    </React.Fragment>
  );
};

Main.defaultProps = {};

export default Main;
