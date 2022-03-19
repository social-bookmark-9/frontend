import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Image } from "../elements";
import { Title, Label, Text } from "../elements";

const RecommendCard = props => {
  const { isSaved, hashTag, title, content } = props;
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* 사진이 없는 아티클 경우 - 읽기 전 */}
      <ReContainer
        onClick={() => {
          navigate("/article");
        }}
      >
        <ImageBox>
          <Image
            _src={`/images/${isSaved ? "bookmark" : "unbookmark"}.png`}
            _width="25px"
            _height="24px"
            _marginR="none"
          />
        </ImageBox>

        <ReCardContent>
          <LabelBox>
            {/* {hashTag.map((tag, idx) => ( */}
            <Label key={"idx"}>{"tag"}</Label>
            {/* ))} */}
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
            {content}...
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

export default RecommendCard;
