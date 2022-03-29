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

import MyPage from "./mobile/MyPage";

import MainPage from "./mobile/MainPage";
import Login from "./mobile/Login";
import UserNickname from "./mobile/UserNickname";
import UserFavorites from "./mobile/UserFavorites";
import ArticleList from "./mobile/ArticleList";
import ArticleDetail from "./mobile/ArticleDetail";
import MyPageD from "./desktop/MyPageD";
import Setting from "./mobile/Setting";
import MyReview from "./mobile/MyReview";
import MyReminder from "./mobile/MyReminder";
import EditProfile from "./mobile/EditProfile";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";
import Spinner from "./Spinner";
import MainD from "./desktop/MainD";
import RemindEmail from "./mobile/RemindEmail";
import LoginD from "./desktop/LoginD";
import UserNicknameD from "./desktop/UserNicknameD";
import UserFavoritesD from "./desktop/UserFavoritesD";
import EditProfileD from "./desktop/EditProfileD";

function App(props) {
  const dispatch = useDispatch();
  const myInfo = useSelector(state => state.user.myInfo);
  const isLogin = useSelector(state => state.user.isLogin);
  // const memberName = myInfo.nickName;

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
            <Route path="/" element={<MainD {...myInfo} isLogin={isLogin} />} />
            <Route path="/mypage/:id" element={<MyPageD />} />
            <Route path="/login" element={<LoginD />} />
            <Route path="/user/nickname" element={<UserNicknameD />} />
            <Route path="/user/favorites" element={<UserFavoritesD />} />
            <Route path="/editprofile" element={<EditProfileD {...myInfo} />} />
            <Route path="/api/users/login" element={<OAuthRedirectHandler />} />
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
