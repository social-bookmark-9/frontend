import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { DesignObj, Circle } from "../elements/ImageObj";
import { Label, Title, Text, Image } from "../elements";
import { FlexboxSpace } from "../styles/flexbox";

const ArticleCard = props => {
  const {
    articleId,
    content,
    title,
    isMe,
    isRead,
    isSaved,
    imgUrl,
    createdAt,
  } = props;
  const articleData = {
    article: props,
    inDeatil: true,
  };
  const navigate = useNavigate();

  const contents = content.slice(0, 50);
  // 안읽은 날짜 구하기
  const sdt = new Date(createdAt);
  const edt = new Date();
  const dayDiff = Math.ceil(
    (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24) - 1,
  );

  return (
    <React.Fragment>
      <ArticleCardBox
        onClick={() => {
          navigate(`/article/${articleId}`, { state: articleData });
        }}
        imgUrl={imgUrl}
        isRead={isRead}
      >
        {isRead ? (
          <CircleBox>
            <Circle />
          </CircleBox>
        ) : (
          ""
        )}
        {isMe ? (
          dayDiff > 0 ? (
            <ArticleCardObj>
              <DesignObj />
              <Label>안 읽은지 {dayDiff}일째</Label>
            </ArticleCardObj>
          ) : (
            <ArticleCardObj>
              <DesignObj />
            </ArticleCardObj>
          )
        ) : (
          <ImageBox>
            <Image
              _src={`/images/${isSaved ? "bookmark" : "unbookmark"}.png`}
              _width="25px"
              _height="24px"
              _marginR="none"
            />
          </ImageBox>
        )}
        {/* {inDetail ? (
          <ImageBox>
            <Image
              _src={`/images/link.png`}
              _width="25px"
              _height="24px"
              _marginR="none"
            />
          </ImageBox>
        ) : (
          ""
        )} */}

        <ArticleCardContent>
          <LabelBox>
            {/* {hashTag.map((tag, idx) => (
              <Label key={idx}>{tag}</Label>
            ))} */}
          </LabelBox>
          <Title
            _fontsize={({ theme }) => theme.fontSizes.font18}
            _lineHeight="24px"
            _color={({ theme }) => theme.colors.white}
          >
            {title}
          </Title>
          <Text
            _fontSize={({ theme }) => theme.fontSizes.font13}
            _lineHeight="18px"
            _color={({ theme }) => theme.colors.white}
          >
            {contents}...
          </Text>
        </ArticleCardContent>
      </ArticleCardBox>
    </React.Fragment>
  );
};

const CircleBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ArticleCardObj = styled.div`
  ${FlexboxSpace}
`;

const ArticleCardContent = styled.div`
  width: 270px;
  position: absolute;
  bottom: 28px;
  left: 28px;
  & h1 {
    padding-bottom: 8px;
  }
`;

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ArticleCardBox = styled.div`
  width: 100%;
  ${props =>
    props.isRead
      ? "border-radius: 20px 20px 80px 20px"
      : "border-radius: 20px"};
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
  background-color: #505866;
  ${props =>
    props.imgUrl
      ? `background: rgba(0, 0, 0, 0.26)
    url(${props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 288px`
      : "height: 240px"};
`;

export default ArticleCard;
