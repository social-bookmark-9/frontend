import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Text, Button, Image } from "../../elements";

import {
  getFolderAxios,
  getFolderWithAxios,
  updateLikeAxios,
} from "../../redux/modules/Folder";

import ArticleCard from "../../components/folderpage/ArticleCard";
import FolderNavbarD from "../../components/folderpage/FolderNavbarD";
import SelectFolderD from "../../components/folderpage/SelectFolderD";

import Swal from "sweetalert2";

const ArticleListT = props => {
  const { isLogin } = props;

  const params = useParams();
  const copyUrlRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const folderId = params.id;
  const collectionUrl = window.location.href;
  const isMe = useSelector(state => state.folder.folderInfo.me);
  const folderInfo = useSelector(state => state.folder.folderInfo);
  const articleListData = useSelector(state => state.folder.articleList);
  const likeCount = useSelector(state => state.folder.likeCount);

  useEffect(() => {
    if (isLogin) {
      dispatch(getFolderWithAxios(folderId));
    } else {
      dispatch(getFolderAxios(folderId));
    }
  }, [dispatch, folderId, isLogin]);

  const [modalOpen, setModalOpen] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const [likeCnt, setLikeCnt] = useState(likeCount);

  const cancelLike = () => {
    dispatch(updateLikeAxios(folderId));
    setUserLiked(false);
    setLikeCnt(likeCnt - 1);
  };

  const addLike = () => {
    dispatch(updateLikeAxios(folderId));
    setUserLiked(true);
    setLikeCnt(likeCnt + 1);
  };

  const copyCollectionUrl = () => {
    copyUrlRef.current.focus();
    copyUrlRef.current.select();

    navigator.clipboard.writeText(copyUrlRef.current.value).then(async () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: `${({ theme }) => theme.colors.pointGreen02}`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
      });
      await Toast.fire({
        icon: "success",
        title: "클립보드에 복사되었습니다",
      });
    });
  };

  const openModal = () => {
    if (isLogin === false) {
      Swal.fire({
        title: "잠깐!",
        text: "로그인이 필요한 서비스에요",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: `${({ theme }) => theme.colors.error}`,
        confirmButtonText: "로그인 하기",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    if (modalOpen === false) {
      setModalOpen(true);
      document.body.style.cssText = `overflow: hidden; touch-action: none;`;
    } else {
      setModalOpen(false);
      document.body.style.cssText = `overflow:auto;`;
    }
  };

  return (
    <React.Fragment>
      <Container>
        <FolderBox>
          <FolderNavbarD
            title={folderInfo.folderName}
            folderId={folderId}
            folderName={folderInfo.folderName}
            isMe={isMe}
          />

          <LikeBox isMe={isMe}>
            {isMe ? (
              <Text _fontSize={({ theme }) => theme.fontSizes.font14}>
                {likeCount}명이 도움을 받았어요
              </Text>
            ) : userLiked ? (
              <Button
                _padding="8px 16px"
                _color={({ theme }) => theme.colors.fontColor05}
                bgColor={({ theme }) => theme.colors.pointPurple01}
                borderColor={({ theme }) => theme.colors.pointPurple02}
                _onClick={cancelLike}
                isBorder
              >
                <Image _src="/images/icon7.png" _width="19px" _height="19px" />
                유용해요 {likeCnt}
              </Button>
            ) : (
              <Button
                _padding="8px 16px"
                _color={({ theme }) => theme.colors.fontColor05}
                bgColor={({ theme }) => theme.colors.white}
                isBorder
                _onClick={addLike}
              >
                <Image _src="/images/icon7.png" _width="19px" _height="19px" />
                유용해요 {likeCnt}
              </Button>
            )}
          </LikeBox>

          <AlBox>
            {articleListData &&
              articleListData.map((article, idx) => {
                return <ArticleCard key={idx} article={article} isMe={isMe} />;
              })}
          </AlBox>
          <AlButton>
            <Text
              _padding="16px 0px"
              _fontSize={({ theme }) => theme.fontSizes.font14}
              _lineHeight="22px"
            >
              {isMe
                ? "당신의 안목을 공유해 주세요"
                : "아티클을 한번에 저장하고 싶다면?"}
            </Text>
            {isMe ? (
              <>
                <InputUrl
                  name="collectionUrl"
                  rows={10}
                  cols="50"
                  id="0"
                  ref={copyUrlRef}
                  defaultValue={collectionUrl}
                />
                <Button
                  _width="359px"
                  _onClick={copyCollectionUrl}
                  _padding="12px"
                  bgColor={({ theme }) => theme.colors.white}
                  _color={({ theme }) => theme.colors.fontColor05}
                  isBorder
                  bold
                >
                  컬렉션 링크 복사
                </Button>
              </>
            ) : (
              <Button
                _width="359px"
                _onClick={openModal}
                _padding="12px"
                bgColor={({ theme }) => theme.colors.white}
                _color={({ theme }) => theme.colors.fontColor05}
                isBorder
                bold
              >
                모두 저장하기
              </Button>
            )}
          </AlButton>
          {modalOpen ? (
            <SelectFolderD
              openModal={openModal}
              isMe={isMe}
              folderId={folderId}
              setModalOpen={setModalOpen}
            />
          ) : null}
        </FolderBox>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const FolderBox = styled.div`
  margin: auto;
`;

const AlBox = styled.div`
  padding: 0px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  align-items: start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 768px) and (max-width: 919px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;

const LikeBox = styled.div`
  display: inline-block;
  padding: ${props => (props.isMe ? "0px 22px 16px" : "16px 22px")};
`;

const AlButton = styled.div`
  ${FlexboxColumn}
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 85px;
`;

const InputUrl = styled.textarea`
  display: none;
`;

export default ArticleListT;
