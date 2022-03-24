import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Circle } from "../elements/ImageObj";
import { Label, Image } from "../elements";
import LinesEllipsis from "react-lines-ellipsis";

const DetailCard = props => {
  const { article } = props;
  const navigate = useNavigate();

  const _hashTag = [article.hashtag1, article.hashtag2, article.hashtag3];
  const hashTag = _hashTag.filter((el, i) => el !== null);

  const handleLink = () => {
    window.open(`${article.url}`, "_blank");
  };

  return (
    <React.Fragment>
      <DetailCardBox imgUrl={article.imgOg} onClick={handleLink}>
        <CircleBox>
          <Circle />
        </CircleBox>
        <ImageBox>
          <Image
            _src={`/images/link.png`}
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
          <Title>
            <LinesEllipsis
              text={article.titleOg}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
            />
          </Title>
          <Text>
            <LinesEllipsis
              text={article.contentOg}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Text>
        </ArticleCardContent>
      </DetailCardBox>
    </React.Fragment>
  );
};

const CircleBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
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

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DetailCardBox = styled.div`
  width: 100%;
  border-radius: 20px 20px 80px 20px;
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

export default DetailCard;
