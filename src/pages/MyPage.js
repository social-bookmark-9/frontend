import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Navbar, ArticleFolder, UserProfile } from "../components";
import { useParams } from "react-router";
import { getProfileAxios } from "../redux/modules/Profile";
import AddCollection from "../components/AddCollection";
import MyPageRemind from "../components/MyPageRemind";
import MyPageSuggest from "../components/MyPageSuggest";

const MyPage = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const memberId = params.id;
  useEffect(() => {
    dispatch(getProfileAxios(memberId));
  }, [dispatch]);
  // ----- 폴더 리스트 ----- //
  const folderList = useSelector(state => state.folder.articleFolderList);
  const defaultFolder = folderList[0];
  const userFolder = folderList.slice(1);
  // ----- 유저 정보 ----- //
  const userInfo = useSelector(state => state.profile.memberInfo);
  const myInfo = useSelector(state => state.user.myInfo);
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
        <UserProfile userInfo={userInfo} {...myInfo} />
        {/* ----- 리마인드, 디폴트 폴더 ----- */}
        {/* <MyPageRemind
          defaultFolder={defaultFolder}
          userFolder={userFolder}
          openModal={openModal}
          userInfo={userInfo}
          {...myInfo}
        /> */}

        {/* 아티클 리마인드 또는 새 컬렉션 만들기 */}

        {/* 폴더리스트 시작 */}
        {/* {userFolder.map((folder, idx) => (
          <ArticleFolder
            {...folder}
            key={idx}
            folderColor={
              idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
            }
          />
        ))} */}
        <MyPageSuggest userInfo={userInfo} {...myInfo} />
        {modalOpen ? (
          <AddCollection
            setModalOpen={setModalOpen}
            setShowModal={setShowModal}
          />
        ) : null}
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  margin-bottom: 85px;
`;
export default MyPage;
