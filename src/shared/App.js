import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  UserNickname,
  UserFavorites,
  Main,
  ArticleList,
  ArticleDetail,
  Reviews,
  Setting,
} from "../pages";
import MyPage from "../pages/MyPage";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";
import { getArticleAxios } from "../redux/modules/Article";

function App(props) {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.is_login);
  // const isToken = sessionStorage.getItem("token") ? true : false;
  // 폴더 리스트 받아오는 부분

  // 아티클 리스트 받아오는 부분
  useEffect(() => {
    dispatch(getArticleAxios());
  });

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main isLogin={isLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} />} />
        <Route
          path="/user/nickname"
          element={<UserNickname isLogin={isLogin} />}
        />
        <Route
          path="/user/favorites"
          element={<UserFavorites isLogin={isLogin} />}
        />
        <Route path="/articles" element={<ArticleList isLogin={isLogin} />} />
        <Route path="/article" element={<ArticleDetail isLogin={isLogin} />} />
        <Route path="/mypage" element={<MyPage isLogin={isLogin} />} />
        <Route path="/setting" element={<Setting isLogin={isLogin} />} />
        <Route path="/reviews" element={<Reviews isLogin={isLogin} />} />
        <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
