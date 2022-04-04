import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileAxios,
  getProfileWithAxios,
} from "../../redux/modules/Profile";
import { getReminderAxios } from "../../redux/modules/Reminder";

import styled from "styled-components";

import Navbar from "../../components/common/Navbar";
import ArticleFolder from "../../components/folderpage/ArticleFolder";
import UserProfile from "../../components/mypage/UserProfile";
import AddCollection from "../../components/mypage/AddCollection";
import MyPageRemind from "../../components/mypage/MyPageRemind";
import MyPageSuggest from "../../components/mypage/MyPageSuggest";

const MyPage = props => {
  const { isLogin } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const memberId = params.id;

  useEffect(() => {
    if (isLogin) {
      dispatch(getProfileWithAxios(memberId));
      dispatch(getReminderAxios());
    } else {
      dispatch(getProfileAxios(memberId));
    }
  }, [dispatch, memberId, isLogin]);

  // ----- 폴더 리스트 ----- //
  const folderList = useSelector(state => state.profile.folderInfo);
  const defaultFolder = useSelector(state => state.profile.defaultFolder);
  // ----- 유저 정보 ----- //
  const userInfo = useSelector(state => state.profile.memberInfo);
  const myInfo = useSelector(state => state.user.myInfo);
  // 모달 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  // 모달 열고 닫기 펑션
  const openModal = () => {
    setModalOpen(true);
  };
  
  const reminder = useSelector(state => state.reminder);

  return (
    <React.Fragment>
      <Container>
        <Navbar {...props} />
        
        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfile userInfo={userInfo} {...myInfo} />


        {/* ----- 리마인드, 디폴트 폴더 ----- */}
        <MyPageRemind
          defaultFolder={defaultFolder}
          folderList={folderList}
          openModal={openModal}
          userInfo={userInfo}
          {...myInfo}
          {...reminder}
        />
        {/* 폴더리스트 시작 */}
        {folderList &&
          folderList.map((folder, idx) => (
            <FolderContainer key={idx}>
              <ArticleFolder
                folder={folder}
                {...folder}
                key={idx}
                folderColor={
                  idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
                }
              />
            </FolderContainer>
          ))}
        <MyPageSuggest userInfo={userInfo} {...myInfo} isLogin={isLogin} />
        {modalOpen ? <AddCollection setModalOpen={setModalOpen} /> : null}
        {/* <Modal isLogin={isLogin} /> */}
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  margin-bottom: 85px;
`;

const FolderContainer = styled.div`
  padding: 8px 16px;
`;

export default MyPage;
