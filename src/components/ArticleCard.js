import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { DesignObj, Circle } from "../elements/ImageObj";
import { Label, Title, Text, Image } from "../elements";
import { FlexboxSpace } from "../styles/flexbox";

const ArticleCard = ({ article }) => {
  const { isMe, isRead, isSaved, hashTag, contentOg, titleOg, imgOg } = article;

  const navigate = useNavigate();

  const content = contentOg.slice(0, 50);

  return (
    <React.Fragment>
      <ArticleCardBox
        onClick={() => {
          navigate("/articles");
        }}
        imgOg={imgOg}
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
          <ArticleCardObj>
            <DesignObj />
            <Label>안 읽은지 0일째</Label>
          </ArticleCardObj>
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

        <ArticleCardContent>
          <LabelBox>
            {hashTag.map((tag, idx) => (
              <Label key={idx}>{tag}</Label>
            ))}
          </LabelBox>
          <Title
            _fontsize={({ theme }) => theme.fontSizes.font18}
            _lineHeight="24px"
            _color={({ theme }) => theme.colors.white}
          >
            {titleOg}
          </Title>
          <Text
            _fontSize={({ theme }) => theme.fontSizes.font13}
            _lineHeight="18px"
            _color={({ theme }) => theme.colors.white}
          >
            {content}...
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
  justify-content: right;
`;

const ArticleCardBox = styled.div`
  width: 100%;
  ${article =>
    article.isRead
      ? "border-radius: 20px 20px 80px 20px"
      : "border-radius: 20px"};
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
  background-color: #505866;
  ${article =>
    article.imgOg
      ? `background: rgba(0, 0, 0, 0.26)
    url(${article.imgOg});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  height: 288px`
      : "height: 240px"};
`;

export default ArticleCard;
