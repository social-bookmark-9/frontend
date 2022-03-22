import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getFolderAxios } from "../redux/modules/Folder";

import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";

import { ArticleCard, Navbar } from "../components";
import { Text, Button, Image } from "../elements";

const ArticleList = props => {
  const { isDefault } = props;

  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();

  const folderId = params.id;
  console.log(folderId);

  useEffect(() => {
    dispatch(getFolderAxios(folderId));
  }, [dispatch]);

  const isMe = useSelector(state => state.user.isMe);
  const articleListData = [1, 2, 3];

  return (
    <React.Fragment>
      <Navbar title="미분류 컬렉션" />

      <LikeBox isMe={isMe}>
        {isMe || isDefault ? (
          <Text _fontSize={({ theme }) => theme.fontSizes.font14}>
            {"likeCnt"}명이 도움을 받았어요
          </Text>
        ) : (
          <Button
            _padding="8px 16px"
            _color={({ theme }) => theme.colors.fontColor05}
            bgColor={({ theme }) => theme.colors.white}
            isBorder
          >
            <Image _src="/images/icon7.png" _width="19px" _height="19px" />
            유용해요 {"likeCnt"}
          </Button>
        )}
      </LikeBox>

      <AlBox>
        {articleListData.map((article, idx) => {
          return <ArticleCard key={idx} {...article} isMe={isMe} />;
        })}
      </AlBox>
      <AlButton>
        <Text
          _padding="16px 0px"
          _fontSize={({ theme }) => theme.fontSizes.font14}
          _lineHeight="22px"
        >
          {isMe || isDefault
            ? "당신의 안목을 공유해 주세요"
            : "아티클을 한번에 저장하고 싶다면?"}
        </Text>
        <Button
          _padding="12px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.fontColor05}
          isBorder
          bold
        >
          {isMe || isDefault ? "컬렉션 링크 복사" : "모두 저장하기"}
        </Button>
      </AlButton>
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

export default ArticleList;
