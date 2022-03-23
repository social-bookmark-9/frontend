import React from "react";
import { Image, Label, Title, Text } from "../elements";
import styled from "styled-components";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import { FlexboxSpace } from "../styles/flexbox";

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
  };

  return (
    <RecommendContainer>
      <Title _padding="0 0 20px 4px">추천 아티클</Title>
      <SliderBox>
        <Slider {...mobileSettings}>
          {articleList.map((article, idx) => {
            const _hashTag = [
              article.hashtag1,
              article.hashtag2,
              article.hashtag3,
            ];
            const hashTag = _hashTag.filter((el, i) => el !== null);
            const contents = article.contentOg.slice(0, 50);

            return (
              <CardBox
                key={idx}
                onClick={() => {
                  navigate(`/article/${article.articleId}`);
                }}
              >
                <Card bgImage={article.imgOg}>
                  <ImageBox>
                    <Image
                      _src={"/images/bookmark.png"}
                      _width="25px"
                      _height="24px"
                      _marginR="none"
                    />
                  </ImageBox>
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
                      {article.titleOg}
                    </Title>
                    <Text
                      _fontSize={({ theme }) => theme.fontSizes.font13}
                      _lineHeight="18px"
                      _color={({ theme }) => theme.colors.white}
                    >
                      {contents}...
                    </Text>
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

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 28px;
  & img {
    margin-right: 0px;
  }
`;

export default RecommendList;
