import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import styled from "styled-components";
import { Label, Image, Title } from "../elements";
import Carousel from "../elements/Carousel";

const ArticleFolder = props => {
  const { folder, folderColor, isDefault } = props;

  // const navigate = useNavigate();
  const isMe = useSelector(state => state.user.isMe);

  // 해시태스 리스트
  const _hashTag = folder && [
    folder.hashTag1,
    folder.hashTag2,
    folder.hashTag3,
  ];
  const hashTag = _hashTag.filter((el, i) => el !== null);

  // 폴더 별 색상 (폰트, 라벨, 해시태그)
  const propsColor = () => {
    switch (folderColor) {
      case "purple":
        return "#7881F5";
      case "blue":
        return "#0A8ED0";
      case "green":
        return "#4EB0AB";
      default:
        return "#505866";
    }
  };

  return (
    <React.Fragment>
      <Container>
        <CurationBox
          folderColor={folderColor}
          isMe={isMe}
          isDefault={isDefault}
        >
          {isMe || isDefault ? (
            <LabelBox>
              <Label
                _color={propsColor}
                borderColor={propsColor}
                bgColor="none"
              >
                완독률 {folder.completeRate}%
              </Label>
            </LabelBox>
          ) : (
            <LabelBox>
              {hashTag.map((tag, idx) => (
                <Label
                  _color={propsColor}
                  borderColor={propsColor}
                  bgColor="none"
                  key={idx}
                >
                  {tag}
                </Label>
              ))}
            </LabelBox>
          )}

          <TitleBox>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _lineHeight="24px"
              _color={propsColor}
            >
              {isDefault ? "미분류 컬렉션" : folder.folderName}
            </Title>
            {isMe || isDefault ? (
              <Label bgColor="white" _padding="7px" borderColor="white">
                <Image
                  _src={`/images/${folder.hide ? "show" : "hide"}.png`}
                  _width="20px"
                  _height="20px"
                  _marginR="0px"
                />
              </Label>
            ) : (
              <Label
                _fontSize={({ theme }) => theme.fontSizes.font12}
                _color={propsColor}
                bgColor="none"
                borderColor={propsColor}
                borderRadius="40px"
              >
                <Image
                  _src={
                    folderColor === "blue"
                      ? "/images/thumbsUpBlue.png"
                      : folderColor === "purple"
                      ? "/images/thumbsUpPurple.png"
                      : "/images/thumbsUpGreen.png"
                  }
                  _marginR="0px"
                  _width="11px"
                  _height="11px"
                />
                {folder.likeCount}
              </Label>
            )}
          </TitleBox>
          <CarouselBox>
            <Carousel articleContents={folder.articleListDtoList} />
          </CarouselBox>
        </CurationBox>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  width: 100%;
`;

const CurationBox = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  border-radius: 20px;
  padding: 28px 20px;
  overflow: hidden;
  ${props => props.folderColor === "green" && "background-color: #F2FDFA"};
  ${props => props.folderColor === "purple" && "background-color: #F7F7FD"};
  ${props => props.folderColor === "blue" && "background-color: #F0F7FB"};
  ${props => props.folderColor === "default" && "background-color: #fafbfb"};
`;

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CarouselBox = styled.div`
  padding-top: 36px;
  margin: 0 -20px 0 -65px;
`;
export default ArticleFolder;
