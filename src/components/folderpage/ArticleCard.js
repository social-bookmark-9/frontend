import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { DesignObj, Circle } from "../../elements/ImageObj";
import { Image, Label } from "../../elements";
import { FlexboxSpace } from "../../styles/flexbox";

import LinesEllipsis from "react-lines-ellipsis";

const ArticleCard = props => {
  const { article, isMe } = props;

  const navigate = useNavigate();

  const isRead = article.read;
  // 해시태그 리스트
  const _hashTag = [article.hashtag1, article.hashtag2, article.hashtag3];
  const hashTag = _hashTag.filter((el, i) => el !== null);

  // 안읽은 날짜 구하기
  // const sdt = new Date(createdAt);
  // const edt = new Date();
  // const dayDiff = Math.ceil(
  //   (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24) - 1,
  // );

  return (
    <React.Fragment>
      <ArticleCardBox
        onClick={() => {
          navigate(`/article/${article.articleId}`);
        }}
        imgUrl={article.imgOg}
        isRead={isRead}
        isSave={article.save}
      >
        {isRead ? (
          <CircleBox>
            <Circle />
          </CircleBox>
        ) : (
          ""
        )}
        {isMe ? (
          // dayDiff > 0 ? (
          //   <ArticleCardObj>
          //     <DesignObj />
          //     <Label>안 읽은지 {dayDiff}일째</Label>
          //   </ArticleCardObj>
          // ) : (
          <ArticleCardObj>
            <DesignObj />
          </ArticleCardObj>
        ) : (
          // )
          <ImageBox>
            <Image
              _src={`/images/${article.save ? "bookmark" : "unbookmark"}.png`}
              _width="25px"
              _height="24px"
              _marginR="none"
            />
          </ImageBox>
        )}
        <ArticleCardContent>
          <LabelBox>
            {hashTag &&
              hashTag.map((tag, idx) => <Label key={idx}>{tag}</Label>)}
          </LabelBox>
          <Title>
            {article.titleOg !== null ? (
              <LinesEllipsis
                text={article.titleOg}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            ) : (
              "제목없음"
            )}
          </Title>
          <Text>
            {article.contentOg !== null ? (
              <LinesEllipsis
                text={article.contentOg}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            ) : (
              "미리보기 내용을 불러올 수 없습니다"
            )}
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
  @media screen and (min-width: 920px) and (max-width: 1194px) {
    width: 100%;
    padding: 0px 10px;
    left: 0;
  }
`;

const Title = styled.div`
  padding-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font18};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.font13};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
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
  @media screen and (min-width: 1194px) {
    margin-bottom: 12px;
  }

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
