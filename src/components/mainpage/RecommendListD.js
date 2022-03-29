import React, { useState } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Image, Label } from "../../elements";
import LinesEllipsis from "react-lines-ellipsis";
import { useDispatch, useSelector } from "react-redux";
import { getMainByHashtagAxios } from "../../redux/modules/Main";



const RecommendListD = (props) => {
  const { articleList } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  console.log(useSelector(state => state.hashtagList));
  const handleChecked = (idx) => {
    const chosenHashtag = favoritesList[idx];
    console.log(chosenHashtag);
    dispatch(getMainByHashtagAxios(chosenHashtag));
  };

  return (
    <>
    <div
      style={{
        margin: "0 auto 0 auto",
        display: "flex",
        width: "1220px",
        paddingTop: "120px",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "255px",
          marginRight: "10%",
          justifyContent: "start",
        }}
      >
        <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
          <div style={{ marginTop: "-46px" }}>
            <img src="/images/DesktopMain1.png" width={"44px"} alt="icon" />
          </div>
          <div>이번달 버블러들이</div>
          <div>모은 글</div>
        </Title>
        <div>
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
        </div>
      </div>
      <div
        style={{
          display: "inline-block",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
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

        {/* {images.map(item => {
          return (
            <div key={item.id} style={{ display: "inline-block" }}>
              <DesktopCard>
                <div style={{ width: "30px", height: "30px" }}>
                  <img src={item.image} alt="" />
                </div>
                대충 글씨
              </DesktopCard>
            </div>
          );
        })} */}
      </div>
    </div>

    </>
  );
};

const Card = styled.div`
  height: 240px;
  width: 95%;
  padding: 10px;
  margin: 0 6px 0 6px;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  background-color: #505866;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
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

const FavoritesBox = styled.div`
  width: 100%;
`;

const Favorites = styled.div`
  margin: auto;
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

const FavoriteInput = styled.input`
  display: none;
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

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 28px;
  & img {
    margin-right: 0px;
  }
`;

export default RecommendListD;
