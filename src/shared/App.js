import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { checkUserAxios } from "../redux/modules/User";
import { getMainAxios, getMainWithAxios } from "../redux/modules/Main";
import { getFolderListAxios } from "../redux/modules/Folder";
import { getToken } from "./utils";

// css
import "./App.css";
import { Desktop, Mobile } from "../styles/mediaquery";

// 공통 페이지
import Spinner from "./Spinner";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";
import OAuthRedirectHandler from "../shared/OAuthRedirectHandler";

// 모바일 페이지
import Login from "../pages/mobile/Login";
import Setting from "../pages/mobile/Setting";
import MyReview from "../pages/mobile/MyReview";
import MyReminder from "../pages/mobile/MyReminder";
import RemindEmail from "../pages/mobile/RemindEmail";
import EditProfile from "../pages/mobile/EditProfile";
import UserNickname from "../pages/mobile/UserNickname";
import UserFavorites from "../pages/mobile/UserFavorites";

// 데스크탑 페이지
import LoginD from "../pages/desktop/LoginD";
import SettingD from "../pages/desktop/SettingD";
import MyReviewD from "../pages/desktop/MyReviewD";
import MyReminderD from "../pages/desktop/MyReminderD";
import RemindEmailD from "../pages/desktop/RemindEmailD";
import EditProfileD from "../pages/desktop/EditProfileD";
import UserNicknameD from "../pages/desktop/UserNicknameD";
import UserFavoritesD from "../pages/desktop/UserFavoritesD";

// 모바일 페이지 lazy 적용
const MyPage = lazy(() => import("../pages/mobile/MyPage"));
const MainPage = lazy(() => import("../pages/mobile/MainPage"));
const ArticleList = lazy(() => import("../pages/mobile/ArticleList"));
const ArticleDetail = lazy(() => import("../pages/mobile/ArticleDetail"));

// 데스크탑 페이지 lazy 적용
const MyPageD = lazy(() => import("../pages/desktop/MyPageD"));
const MainPageD = lazy(() => import("../pages/desktop/MainPageD"));
const ArticleListD = lazy(() => import("../pages/desktop/ArticleListD"));
const ArticleDetailD = lazy(() => import("../pages/desktop/ArticleDetailD"));

function App(props) {
  const dispatch = useDispatch();
  const getMyInfo = useSelector(state => state.user.myInfo);
  const isLogin = useSelector(state => state.user.isLogin);
  const myInfo = { ...getMyInfo, isLogin };
  console.log(myInfo);

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
        <Suspense fallback={<Spinner />}>
          <Desktop>
            <Routes>
              <Route path="/" element={<MainPageD {...myInfo} />} />
              <Route
                path="/mypage/:id"
                element={<MyPageD {...myInfo} isLogin={isLogin} />}
              />
              <Route path="/login" element={<LoginD />} />
              <Route path="/user/nickname" element={<UserNicknameD />} />
              <Route path="/user/favorites" element={<UserFavoritesD />} />
              <Route path="/myreview" element={<MyReviewD />} />
              <Route
                path="/editprofile"
                element={<EditProfileD {...myInfo} />}
              />
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
              <Route
                path="/setting/remindEmail"
                element={<RemindEmailD {...myInfo} />}
              />

              <Route
                path="/setting/reminder"
                element={<MyReminderD {...myInfo} isLogin={isLogin} />}
              />
              <Route
                path="/api/users/login"
                element={<OAuthRedirectHandler />}
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
              <Route path="/myreview" element={<MyReview />} />
              <Route
                path="/editprofile"
                element={<EditProfile {...myInfo} />}
              />
              <Route
                path="/setting/remindEmail"
                element={<RemindEmail {...myInfo} />}
              />
              <Route
                path="/api/users/login"
                element={<OAuthRedirectHandler />}
              />
              <Route element={<NotFound />} />
            </Routes>
          </Mobile>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
