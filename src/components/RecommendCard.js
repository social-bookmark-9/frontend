import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Image } from "../elements";
import { Label } from "../elements";
import LinesEllipsis from "react-lines-ellipsis";

const RecommendCard = props => {
  const { recommend } = props;
  const navigate = useNavigate();

  const _hashTag = [recommend.hashtag1, recommend.hashtag2, recommend.hashtag3];
  const hashTag = _hashTag.filter((el, i) => el !== null);

  return (
    <React.Fragment>
      {/* 사진이 없는 아티클 경우 - 읽기 전 */}
      <ReContainer
        imgUrl={recommend.imgOg}
        onClick={() => {
          navigate(`/article/${recommend.articleId}`);
        }}
      >
        <ImageBox>
          <Image
            _src={`/images/bookmark.png`}
            _width="25px"
            _height="24px"
            _marginR="none"
          />
        </ImageBox>
        <ReCardContent>
          <LabelBox>
            {hashTag.map((tag, idx) => (
              <Label key={idx}>{tag}</Label>
            ))}
          </LabelBox>
          <Title>
            <LinesEllipsis
              text={recommend.titleOg}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Title>
          <Text>
            <LinesEllipsis
              text={recommend.contentOg}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Text>
        </ReCardContent>
      </ReContainer>
    </React.Fragment>
  );
};

const ReContainer = styled.div`
  width: 100%;
  height: 202px;
  background-color: #505866;
  color: #ffffff;
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
  ${props =>
    props.imgUrl
      ? `
  background: rgba(0, 0, 0, 0.26)
    url(${props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;`
      : ""}
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const ReCardContent = styled.div`
  width: 270px;
  position: absolute;
  bottom: 28px;
  left: 28px;
  & h1 {
    padding-bottom: 8px;
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

export default RecommendCard;
