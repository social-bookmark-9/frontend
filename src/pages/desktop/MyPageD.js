import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileAxios,
  getProfileWithAxios,
} from "../../redux/modules/Profile";

import styled from "styled-components";

import ModalD from "../../components/modal/ModalD";
import NavbarD from "../../components/common/NavbarD";
import UserProfileD from "../../components/mypage/UserProfileD";
import MyPageRemindD from "../../components/mypage/MyPageRemindD";
import MyPageSuggest from "../../components/mypage/MyPageSuggest";
import AddCollectionD from "../../components/mypage/AddCollectionD";
import ArticleFolderD from "../../components/folderpage/ArticleFolderD";

const MyPageD = props => {
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

  return (
    <React.Fragment>
      <NavbarD {...props} />
      <Container>
        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfileD userInfo={userInfo} {...myInfo} />

        {/* ----- 리마인드, 디폴트 폴더 ----- */}
        <MyPageRemindD
          defaultFolder={defaultFolder}
          folderList={folderList}
          openModal={openModal}
          userInfo={userInfo}
          {...myInfo}
        />
        {/* 폴더리스트 시작 */}
        <FolderListContainer>
          <ArticleFolderD
            folderColor="default"
            folder={defaultFolder}
            {...defaultFolder}
          />
          {folderList &&
            folderList.map((folder, idx) => (
              <div key={idx}>
                <ArticleFolderD
                  folder={folder}
                  {...folder}
                  key={idx}
                  folderColor={
                    idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
                  }
                />
              </div>
            ))}
        </FolderListContainer>
        <MyPageSuggest userInfo={userInfo} {...myInfo} isLogin={isLogin} />
        {modalOpen ? <AddCollectionD setModalOpen={setModalOpen} /> : null}
        <ModalD isLogin={isLogin} />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding-top: 82px;
  width: 1119px;
`;

const FolderListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;

export default MyPageD;
