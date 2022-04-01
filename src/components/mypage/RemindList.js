import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";

import LinesEllipsis from "react-lines-ellipsis";
import { HashTagMap } from "./HashTagMap";

const RemindList = props => {
  const { remindData, isDeskTop } = props;

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {isDeskTop ? (
        <Container>
        {remindData &&
          remindData.map((data, idx) => (
            <ArticleCardBoxDesktop
              onClick={() => {
                navigate(`/article/${data.articleId}`);
              }}
              key={idx}
              imgUrl={data.imgOg}
            >
              <ArticleCardContent>
                <LabelBox>
                  <HashTagMap {...data} />
                </LabelBox>
                <Title>
                  {data.titleOg !== null ? (
                    <LinesEllipsis
                      text={data.titleOg}
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
                  {data.contentOg !== null ? (
                    <LinesEllipsis
                      text={data.contentOg}
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
            </ArticleCardBoxDesktop>
          ))}
        </Container>
      ) : (
        <>
        {remindData &&
          remindData.map((data, idx) => (
            <ArticleCardBox
              onClick={() => {
                navigate(`/article/${data.articleId}`);
              }}
              key={idx}
              imgUrl={data.imgOg}
            >
              <ArticleCardContent>
                <LabelBox>
                  <HashTagMap {...data} />
                </LabelBox>
                <Title>
                  {data.titleOg !== null ? (
                    <LinesEllipsis
                      text={data.titleOg}
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
                  {data.contentOg !== null ? (
                    <LinesEllipsis
                      text={data.contentOg}
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
          ))}
        </>
      )}
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px 0 0 0;
`;

const ArticleCardContent = styled.div`
  width: 270px;
  position: absolute;
  bottom: 28px;
  left: 28px;
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

const ArticleCardBoxDesktop = styled(ArticleCardBox)`
  margin-bottom: -6px;
`

export default RemindList;
