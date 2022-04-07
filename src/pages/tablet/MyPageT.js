import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileAxios,
  getProfileWithAxios,
} from "../../redux/modules/Profile";
import { getReminderAxios } from "../../redux/modules/Reminder";

import styled from "styled-components";
import { Title } from "../../elements";

import Navbar from "../../components/common/Navbar";
import MyFolder from "../../components/folderpage/MyFolder";
import UserProfile from "../../components/mypage/UserProfile";
import MyPageRemindT from "../../components/mypage/MyPageRemindT";
import ModalD from "../../components/modal/ModalD";
import MyPageGoRemindPage from "../../components/mypage/MyPageGoRemindPage";
import AddCollectionD from "../../components/mypage/AddCollectionD";

const MyPageT = props => {
  const { isLogin, memberId } = props;
  console.log(props);
  const dispatch = useDispatch();

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

  const isTablet = true;
  const reminder = useSelector(state => state.reminder);

  return (
    <React.Fragment>
      <Container>
        <Navbar {...props} />

        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfile userInfo={userInfo} isTablet={isTablet} {...myInfo} />

        {/* ----- 리마인드 ----- */}
        <MyPageGoRemindPage userInfo={userInfo} {...myInfo} {...reminder} />

        {/* 큐레이션 시작 */}
        <Title _fontSize="20px" _padding="30px 0 18px 30px" _lineHeight="28px">
          {userInfo.memberName}님의 큐레이션
        </Title>

        <FolderListContainer>
          <FolderContainer>
            <MyFolder
              folderColor="default"
              folder={defaultFolder}
              {...defaultFolder}
              memberId={userInfo.memberId}
              myId={myInfo.memberId}
            />
          </FolderContainer>

          {folderList &&
            folderList.slice(0, 1).map((folder, idx) => (
              <FolderContainer key={idx}>
                <MyFolder
                  folder={folder}
                  {...folder}
                  key={idx}
                  folderColor={
                    idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
                  }
                  memberId={userInfo.memberId}
                  myId={myInfo.memberId}
                />
              </FolderContainer>
            ))}
        </FolderListContainer>

        {/* 아티클 리마인드 or 새 컬렉션 추가 */}
        <MyPageRemindT
          openModal={openModal}
          isLogin={isLogin}
          userInfo={userInfo}
          {...myInfo}
          {...reminder}
        />

        {/* 나머지 아티클 리스트 */}
        <FolderListContainer>
          {folderList &&
            folderList.slice(1, 3).map((folder, idx) => (
              <FolderContainer key={idx}>
                <MyFolder
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

        {modalOpen ? <AddCollectionD setModalOpen={setModalOpen} /> : null}
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
