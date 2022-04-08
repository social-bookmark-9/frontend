import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Label } from "../../elements";
import { FlexboxSpace } from "../../styles/flexbox";
import LinesEllipsis from "react-lines-ellipsis";

import { useDispatch, useSelector } from "react-redux";
import { getMainByHashtagAxios } from "../../redux/modules/Main";

const RecommendListD = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMainByHashtagAxios("IT"));
  }, [dispatch]);

  const [tempId, setTempId] = useState("");
  const favoritesList = [
    "커리어",
    "업무스킬",
    "IT",
    "디자인",
    "마케팅",
    "투자",
    "장소",
    "인간관계",
    "동기부여",
    "패션",
    "예술",
    "과학",
  ];

  const hashtagList = useSelector(state => state.main.hashtagList);

  const handleChecked = idx => {
    const chosenHashtag = favoritesList[idx];
    dispatch(getMainByHashtagAxios(chosenHashtag));
  };

  return (
    <Container>
      <LeftDiv>
        <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
          <div style={{ marginTop: "-46px" }}>
            <img src="/images/DesktopMain1.png" width={"44px"} alt="icon" />
          </div>
          <div>이번달 버블러들이</div>
          <div>모은 글</div>
        </Title>
        <FavoritesBox>
          <Favorites>
            {favoritesList.map((favor, idx) => (
              <InputBox
                key={idx}
                onClick={() => {
                  setTempId(idx);
                  handleChecked(idx);
                }}
                isSelected={idx === tempId}
              >
                <FavoriteLabel htmlFor={idx}>
                  <img
                    src={`/images/icon${idx}.png`}
                    width={"20px"}
                    alt={`icon${idx}`}
                  />
                  {favor}
                </FavoriteLabel>
              </InputBox>
            ))}
          </Favorites>
        </FavoritesBox>
      </LeftDiv>
      <RightDiv>
        {hashtagList.map((article, idx) => {
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
      </RightDiv>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto 0 auto;
  display: flex;
  width: 1220px;
  padding-top: 120px;
`;

const LeftDiv = styled.div`
  flex-direction: column;
  width: 35%;
  justify-content: start;
`;

const RightDiv = styled.div`
  flex-direction: column;
  justify-content: end;
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 36px 0 0 0;
`;

const Card = styled.div`
  ${FlexboxSpace}
  flex-direction: column;
  height: 257px;
  width: 100%;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  ${props =>
    props.bgImage
      ? `background: rgba(0, 0, 0, 0.46)
    url(${props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;`
      : `background-color: #505866`};
`;

const ArticleCardContent = styled.div`
  width: 100%;
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

const FavoritesBox = styled.div`
  width: 100%;
`;

const Favorites = styled.div`
  width: 317px;
  justify-content: center;
  text-align: left;
`;

const InputBox = styled.div`
  margin: 4px;
  display: inline-block;
  border-radius: 8px;
  ${({ isSelected }) =>
    isSelected
      ? `
    background-color: #f2f4f6;
  `
      : `background-color: null;`}
`;

const FavoriteLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 0.8px solid #d2d6da;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
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

export default RecommendListD;
