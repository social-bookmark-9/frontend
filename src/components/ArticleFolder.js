import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Label, Image, Text, Title } from "../elements";

const ArticleFolder = ({ folderColor, isMe }) => {
  const navigate = useNavigate();
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
          onClick={() => {
            navigate("/articles");
          }}
          isMe={isMe}
        >
          {folderColor === "default" && isMe ? (
            <LabelBox>
              <Label _color={propsColor} bgColor="none">
                완독률 15%
              </Label>
            </LabelBox>
          ) : (
            <LabelBox>
              <Label _color={propsColor} bgColor="none">
                커리어
              </Label>
              <Label _color={propsColor} bgColor="none">
                디자인
              </Label>
            </LabelBox>
          )}

          <TitleBox>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _lineHeight="24px"
              _color={propsColor}
            >
              {folderColor === "default"
                ? "미분류 컬렉션"
                : "UXUI 초보를 위한 아티클"}
            </Title>
            {isMe ? (
              <Label bgColor="white" _padding="7px" borderColor="white">
                <Image
                  _src="/images/hide.png"
                  _marginR="0px"
                  _width="20px"
                  _height="20px"
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
                  _width="11px"
                  _height="11px"
                />
                24
              </Label>
            )}
          </TitleBox>
          <Text _padding="50px 0px">카드스와이프 들어갈 부분</Text>
        </CurationBox>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  padding: 8px 16px;
`;

const CurationBox = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  border-radius: 20px;
  padding: 28px 20px;
  ${props => props.folderColor === "green" && "background-color: #F2FDFA"};
  ${props => props.folderColor === "purple" && "background-color: #F7F7FD"};
  ${props => props.folderColor === "blue" && "background-color: #F0F7FB"};
  ${props => props.folderColor === "default" && "background-color: #F2F3F4"};
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
export default ArticleFolder;
