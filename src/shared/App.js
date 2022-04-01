import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Desktop, Mobile } from "../styles/mediaquery";

import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

import { checkUserAxios } from "../redux/modules/User";
import { getMainAxios, getMainWithAxios } from "../redux/modules/Main";
import { getFolderListAxios } from "../redux/modules/Folder";
import { getToken } from "./utils";

// 모바일 페이지
import Spinner from "./Spinner";
import NotFound from "./NotFound";
import Login from "../pages/mobile/Login";
import ErrorBoundary from "./ErrorBoundary";
import MyPage from "../pages/mobile/MyPage";
import Setting from "../pages/mobile/Setting";
import MyReview from "../pages/mobile/MyReview";
import MainPage from "../pages/mobile/MainPage";
import MyReminder from "../pages/mobile/MyReminder";
import RemindEmail from "../pages/mobile/RemindEmail";
import ArticleList from "../pages/mobile/ArticleList";
import EditProfile from "../pages/mobile/EditProfile";
import UserNickname from "../pages/mobile/UserNickname";
import UserFavorites from "../pages/mobile/UserFavorites";
import ArticleDetail from "../pages/mobile/ArticleDetail";

import LoginD from "../pages/desktop/LoginD";
import MyPageD from "../pages/desktop/MyPageD";
import SettingD from "../pages/desktop/SettingD";
import MainPageD from "../pages/desktop/MainPageD";
import ArticleListD from "../pages/desktop/ArticleListD";
import UserNicknameD from "../pages/desktop/UserNicknameD";
import UserFavoritesD from "../pages/desktop/UserFavoritesD";
import ArticleDetailD from "../pages/desktop/ArticleDetailD";
import MyReviewD from "../pages/desktop/MyReviewD";
import EditProfileD from "../pages/desktop/EditProfileD";

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
            <Route
              path="/"
              element={<MainPageD {...myInfo} isLogin={isLogin} />}
            />
            <Route
              path="/mypage/:id"
              element={<MyPageD {...myInfo} isLogin={isLogin} />}
            />
            <Route path="/login" element={<LoginD />} />
            <Route path="/user/nickname" element={<UserNicknameD />} />
            <Route path="/user/favorites" element={<UserFavoritesD />} />
            <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
            <Route path="/myreview" element={<MyReviewD />} />
            <Route path="/editprofile" element={<EditProfileD {...myInfo} />} />
            <Route
              path="/article/:id"
              element={<ArticleDetailD {...myInfo} isLogin={isLogin} />}
            />
            <Route
              path="/articles/:id"
              element={<ArticleListD {...myInfo} isLogin={isLogin} />}
            />
            <Route
              path="/setting"
              element={<SettingD {...myInfo} isLogin={isLogin} />}
            />
            <Route element={<NotFound />} />
          </Routes>
        </Desktop>
        <Mobile>
          <Routes>
            <Route
              path="/"
              element={<MainPage {...myInfo} isLogin={isLogin} />}
            />
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
            <Route path="/setting/reminder" element={<MyReminder />} />
            <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
            <Route path="/myreview" element={<MyReview />} />
            <Route path="/editprofile" element={<EditProfile {...myInfo} />} />
            <Route
              path="/setting/remindEmail"
              element={<RemindEmail {...myInfo} />}
            />
            <Route element={<NotFound />} />
          </Routes>
        </Mobile>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
