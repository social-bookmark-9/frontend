import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Label, Title } from "../../elements";
import { FlexboxSpace } from "../../styles/flexbox";

import Slider from "react-slick";
import LinesEllipsis from "react-lines-ellipsis";

const RecommendList = props => {
  const { articleList } = props;

  const navigate = useNavigate();

  const mobileSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "55px",
    focusOnSelect: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1194, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <RecommendContainer>
      <Title _padding="0 0 20px 4px">당신을 위한 아티클</Title>
      <SliderBox>
        <Slider {...mobileSettings}>
          {articleList.map((article, idx) => {
            const _hashTag = [
              article.hashtag1,
              article.hashtag2,
              article.hashtag3,
            ];
            const hashTag = _hashTag.filter((el, i) => el !== null);

            return (
              <CardBox
                key={idx}
                onClick={() => {
                  navigate(`/article/${article.articleId}`);
                }}
              >
                <Card bgImage={article.imgOg}>
                  <ArticleCardContent>
                    <LabelBox>
                      {hashTag.map((tag, idx) => (
                        <Label key={idx}>{tag}</Label>
                      ))}
                    </LabelBox>
                    <ArticleTitle>
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
                    </ArticleTitle>
                    <ArticleText>
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
                    </ArticleText>
                  </ArticleCardContent>
                </Card>
              </CardBox>
            );
          })}
        </Slider>
      </SliderBox>
    </RecommendContainer>
  );
};

const RecommendContainer = styled.div`
  width: 100%;
  padding: 32px 0 40px 18px;
  background-color: #f2f3f4;
`;

const SliderBox = styled.div`
  margin-left: -58px;
  & .slick-track {
    transform: translate3d(0, 0, 0) !important;
  }
`;

const ArticleCardContent = styled.div`
  width: 95%;
  padding: 18px 28px;
  & h1 {
    padding-bottom: 8px;
  }
`;

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const CardBox = styled.div`
  width: 100%;
`;

const Card = styled.div`
  ${FlexboxSpace}
  flex-direction: column;
  height: 240px;
  width: 95%;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  ${props =>
    props.bgImage
      ? `background: rgba(0, 0, 0, 0.46)
    url(${props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;`
      : `background-color: #505866`};
`;

const ArticleTitle = styled.div`
  padding-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font18};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const ArticleText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.font13};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

export default RecommendList;
