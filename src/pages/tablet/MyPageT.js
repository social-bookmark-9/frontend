import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileAxios,
  getProfileWithAxios,
} from "../../redux/modules/Profile";

import styled from "styled-components";
import { Title } from "../../elements";

import Navbar from "../../components/common/Navbar";
import ArticleFolder from "../../components/folderpage/ArticleFolder";
import UserProfile from "../../components/mypage/UserProfile";
import AddCollection from "../../components/mypage/AddCollection";
import MyPageSuggest from "../../components/mypage/MyPageSuggest";
import MyPageRemindT from "../../components/mypage/MyPageRemindT";
import RemindCard from "../../components/mypage/RemindCard";
import ModalD from "../../components/modal/ModalD";
import MyPageGoRemindPage from "../../components/mypage/MyPageGoRemindPage";

const MyPageT = props => {
  const { isLogin } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const memberId = params.id;

  useEffect(() => {
    if (isLogin) {
      dispatch(getProfileWithAxios(memberId));
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

  const isTablet = true;

  return (
    <React.Fragment>
      <Container>
        <Navbar {...props} />
        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfile
          userInfo={userInfo}
          isTablet={isTablet}
          {...myInfo}
        />
        {/* ----- 리마인드, 디폴트 폴더 ----- */}
        <MyPageGoRemindPage {...myInfo} />

        <Title
          _fontSize="20px"
          _padding="30px 0 18px 30px"
          _lineHeight="28px"
        >
          {userInfo.memberName}님의 큐레이션
        </Title>
        
        {/* 폴더리스트 시작 */}
        <FolderListContainer>

            <FolderContainer>
              <ArticleFolder
                folderColor="default"
                folder={defaultFolder}
                {...defaultFolder}
              />
            </FolderContainer>

          {folderList &&
            folderList.slice(0,1).map((folder, idx) => (
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
        </FolderListContainer>

        <MyPageRemindT
          defaultFolder={defaultFolder}
          folderList={folderList}
          openModal={openModal}
          userInfo={userInfo}
          {...myInfo}
        />

        <FolderListContainer>
          {folderList &&
            folderList.slice(1,3).map((folder, idx) => (
                <FolderContainer key={idx}>
                  <ArticleFolder
                    folder={folder}
                    {...folder}
                    key={idx}
                    folderColor={
                      idx % 3 === 0 ? "purple" : idx % 3 === 1 ? "blue" : "green"
                    }
                  />
                </FolderContainer>
            ))}
        </FolderListContainer>

        <MyPageSuggest
          userInfo={userInfo}
          isLogin={isLogin}
          isTablet={isTablet}
          {...myInfo}
        />
        
        {modalOpen ? <AddCollection setModalOpen={setModalOpen} /> : null}
        <ModalD isLogin={isLogin} />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin-bottom: 85px;
`;

const FolderContainer = styled.div`
  padding: 0 10px;
  display: inline-block;
  width: 50vw;
  height: 288px;
`;

const FolderListContainer = styled.div`
  padding: 6px 6px;
  display: flex;
  margin-bottom: 6px;
`;

export default MyPageT;
