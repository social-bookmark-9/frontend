import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  UserNickname,
  UserFavorites,
  Main,
  ArticleList,
  Article,
} from "../pages";
import MyPage from "../pages/MyPage";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

function App(props) {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/nickname" element={<UserNickname />} />
        <Route path="/user/favorites" element={<UserFavorites />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article" element={<Article />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
