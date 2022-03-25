import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Desktop, Mobile } from "../styles/mediaquery";

import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

import { checkUserAxios } from "../redux/modules/User";
import { getMainAxios, getMainWithAxios } from "../redux/modules/Main";
import { getToken } from "./utils";

import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import UserNickname from "../pages/UserNickname";
import UserFavorites from "../pages/UserFavorites";
import ArticleList from "../pages/ArticleList";
import ArticleDetail from "../pages/ArticleDetail";
import MyPage from "../pages/MyPage";
import MyPageD from "../pages/MyPageD";
import Setting from "../pages/Setting";
import MyReview from "../pages/MyReview";
import Reminder from "../pages/Reminder";
import EditProfile from "../pages/EditProfile";
import ChangeFavorites from "../pages/ChangeFavorites";
import NotFound from "../pages/NotFound";
import ErrorBoundary from "./ErrorBoundary";
import Spinner from "../components/Spinner";
import { getFolderListAxios } from "../redux/modules/Folder";

function App(props) {
  const dispatch = useDispatch();
  const myInfo = useSelector(state => state.user.myInfo);
  const isLogin = useSelector(state => state.user.isLogin);

  useEffect(() => {
    if (getToken()) {
      dispatch(checkUserAxios(getToken()));
      dispatch(getMainWithAxios());
      dispatch(getFolderListAxios());
    } else {
      dispatch(getMainAxios());
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <ErrorBoundary fallback={<Spinner />}>
        <Desktop>
          <Routes>
            <Route path="/mypage/:id" element={<MyPageD />} />
          </Routes>
        </Desktop>
        <Mobile>
          <Routes>
            <Route path="/" element={<MainPage {...myInfo} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/nickname" element={<UserNickname />} />
            <Route path="/user/favorites" element={<UserFavorites />} />
            <Route
              path="/articles/:id"
              element={<ArticleList {...myInfo} isLogin={isLogin} />}
            />
            <Route
              path="/article/:id"
              element={<ArticleDetail {...myInfo} isLogin={isLogin} />}
            />
            <Route
              path="/mypage/:id"
              element={<MyPage {...myInfo} isLogin={isLogin} />}
            />
            <Route path="/setting" element={<Setting {...myInfo} />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
            <Route path="/myreview" element={<MyReview />} />
            <Route path="/editprofile" element={<EditProfile {...myInfo} />} />
            <Route path="/setting/favorites" element={<ChangeFavorites />} />
            <Route element={<NotFound />} />
          </Routes>
        </Mobile>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
