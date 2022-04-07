import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
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
import SelectFolder from "../../components/folderpage/SelectFolder";
import FolderNavbar from "../../components/folderpage/FolderNavbar";

import Swal from "sweetalert2";
import NoContent from "../../components/common/NoContent";

const ArticleList = props => {
  const { isLogin } = props;
  // const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();
  const copyUrlRef = useRef();

  const folderId = params.id;
  const isMe = useSelector(state => state.folder.folderInfo.me);
  const folderInfo = useSelector(state => state.folder.folderInfo);
  const articleListData = useSelector(state => state.folder.articleList);
  const likeCount = useSelector(state => state.folder.likeCount);
  const collectionUrl = window.location.href;

  useEffect(() => {
    if (isLogin) {
      dispatch(getFolderWithAxios(folderId));
    } else {
      dispatch(getFolderAxios(folderId));
    }
  }, [dispatch, folderId, isLogin]);

  const [modalOpen, setModalOpen] = useState(false);
  const [likeCnt, setLikeCnt] = useState(likeCount);
  const [userLiked, setUserLiked] = useState(false);

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
        iconColor: "#DAF8F1",
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
      <FolderNavbar
        title={folderInfo.folderName}
        folderId={folderId}
        isMe={isMe}
      />
      {articleListData.length > 0 ? (
        <>
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
        </>
      ) : (
        <NoContent isMe={isMe} />
      )}

      {modalOpen ? (
        <SelectFolder openModal={openModal} isMe={isMe} folderId={folderId} />
      ) : null}
    </React.Fragment>
  );
};

const AlBox = styled.div`
  padding: 0px 16px;
  color: ${({ theme }) => theme.colors.white};
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

export default ArticleList;
