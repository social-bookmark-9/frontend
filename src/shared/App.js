import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Desktop, Tablet, Mobile } from "../styles/mediaquery";

import {
  Login,
  UserNickname,
  UserFavorites,
  Main,
  ArticleList,
  ArticleDetail,
  Reviews,
  Setting,
  MyPage,
  Reminder,
  NotFound,
  MyPageD,
} from "../pages";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

import { checkMyInfo } from "../redux/modules/User";
import { getToken } from "./utils";

function App(props) {
  const dispatch = useDispatch();
  const myInfo = useSelector(state => state.user.myInfo);

  useEffect(() => {
    if (getToken()) {
      dispatch(checkMyInfo(getToken()));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Desktop>
        <Routes>
          <Route path="/mypage/:id" element={<MyPageD />} />
        </Routes>
      </Desktop>
      <Mobile>
        <Routes>
          <Route path="/" element={<Main {...myInfo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/nickname" element={<UserNickname />} />
          <Route path="/user/favorites" element={<UserFavorites />} />
          <Route path="/articles/:id" element={<ArticleList />} />
          <Route path="/article" element={<ArticleDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/memos" element={<Reviews />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
          <Route element={<NotFound />} />
        </Routes>
      </Mobile>
    </React.Fragment>
  );
}

export default App;
