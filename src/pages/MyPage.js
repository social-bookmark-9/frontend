import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";

import { Navbar, ArticleFolder, RemindCard, UserProfile } from "../components";
import { Title, Image, Text } from "../elements";
import { useLocation, useParams } from "react-router";
import { getProfileAxios } from "../redux/modules/Profile";

import AddCollection from "../components/AddCollection";
import MyPageRemind from "../components/MyPageRemind";
import MyPageSuggest from "../components/MyPageSuggest";

const MyPage = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const memberId = params.id;
  const isMe = useSelector(state => state.user.isMe);

  useEffect(() => {
    dispatch(getProfileAxios(memberId));
  }, [dispatch]);

  // ----- 폴더 리스트 ----- //
  const folderList = useSelector(state => state.folder.articleFolderList);
  const defaultFolder = folderList[0];
  const userFolder = folderList.slice(1);
  console.log(userFolder);

  // ----- 유저 정보 ----- //
  const userInfo = useSelector(state => state.user.myInfo);

  // 모달 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  // 어떤 모달창 보여줄지 (링크 추가 단계)
  const [showModal, setShowModal] = useState(false);
  // 모달 열고 닫기 펑션
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <React.Fragment>
      <Container>
        <Navbar />
        {/* ----- 프로필+이름 부분 ----- */}
        <UserProfile {...userInfo} />
        {/* ----- 리마인드, 디폴트 폴더 ----- */}
        <MyPageRemind
          defaultFolder = {defaultFolder}
          userFolder = {userFolder}
          openModal = {openModal}
          {...defaultFolder}
          {...userInfo}
        />
        
        {/* 아티클 리마인드 또는 새 컬렉션 만들기 */}
        

        {/* 폴더리스트 시작 */}
        {userFolder.map((folder, idx) => (
          <ArticleFolder
            {...folder}
            key={idx}
            folderColor={
              idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
            }
          />
        ))}

        <MyPageSuggest {...userInfo} />
        {modalOpen ? (
          <AddCollection
            setModalOpen={setModalOpen}
            setShowModal={setShowModal}
          />
        ) : (
          null
        )}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin-bottom: 85px;
`;

const Qheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelBox = styled.div`
  ${Flexbox};
  padding-right: 20px;
`;
const AlertBox = styled.div`
  padding: 16px;
`;

const RemindAlert = styled.div`
  display: flex;
  height: 82px;
  border: 1px solid #f2f3f4;
  border-radius: 16px;
  padding: 19px 22px;
`;

const TextPoint = styled.span`
  ${({ theme }) => {
    const { colors, fontWeight } = theme;
    return css`
      display: inline-block;
      color: ${colors.fontPurple};
      font-weight: ${fontWeight.semiBold};
    `;
  }}
`;

export default MyPage;
