import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfileAxios,
  getProfileWithAxios,
} from "../../redux/modules/Profile";

import styled from "styled-components";

import ArticleFolder from "../../components/folderpage/ArticleFolder";
import UserProfile from "../../components/mypage/UserProfile";
import MyPageRemind from "../../components/mypage/MyPageRemind";
import MyPageSuggest from "../../components/mypage/MyPageSuggest";
import AddCollection from "../../components/mypage/AddCollection";

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

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <DContainer>
        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfile userInfo={userInfo} {...myInfo} />
        {/* ----- 리마인드 부분 ----- */}
        <MyPageRemind
          defaultFolder={defaultFolder}
          folderList={folderList}
          openModal={openModal}
          userInfo={userInfo}
          {...myInfo}
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
      </DContainer>
    </React.Fragment>
  );
};

const DContainer = styled.div`
  width: 1115px;
  margin: auto;
`;

const FolderContainer = styled.div`
  padding: 8px 16px;
`;

// const Qheader = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const LabelBox = styled.div`
//   ${Flexbox};
//   padding-right: 20px;
// `;
// const AlertBox = styled.div`
//   padding: 16px;
// `;

// const RemindAlert = styled.div`
//   display: flex;
//   height: 82px;
//   border: 1px solid #f2f3f4;
//   border-radius: 16px;
//   padding: 19px 22px;
// `;

// const TextPoint = styled.span`
//   ${({ theme }) => {
//     const { colors, fontWeight } = theme;
//     return css`
//       display: inline-block;
//       color: ${colors.fontPurple};
//       font-weight: ${fontWeight.semiBold};
//     `;
//   }}
// `;

export default MyPageD;
