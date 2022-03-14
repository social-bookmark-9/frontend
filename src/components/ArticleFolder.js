import React from "react";
import styled from "styled-components";
import { Label, Image, Text, Title } from "../elements";

const ArticleFolder = props => {
  const { folderColor } = props;

  const propsColor = props => {
    switch (folderColor) {
      case "purple":
        return "#7881F5";
      case "blue":
        return "#0A8ED0";
      default:
        return "#4EB0AB";
    }
  };

  return (
    <React.Fragment>
      <Container>
        <CurationBox folderColor={folderColor}>
          <div style={{ display: "flex", paddingBottom: "8px" }}>
            <Label _color={propsColor} bgColor="none">
              커리어
            </Label>
            <Label _color={propsColor} bgColor="none">
              디자인
            </Label>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _lineHeight="24px"
              _color={propsColor}
            >
              UXUI 초보를 위한 아티클
            </Title>
            <Label
              _fontSize={({ theme }) => theme.fontSizes.font12}
              _color={propsColor}
              bgColor="none"
              borderColor={propsColor}
              borderRadius="40px"
            >
              {props.folderColor === "blue" ? (
                <Image
                  _src="/images/thumbsUpBlue.png"
                  _width="11px"
                  _height="11px"
                />
              ) : props.folderColor === "purple" ? (
                <Image
                  _src="/images/thumbsUpPurple.png"
                  _width="11px"
                  _height="11px"
                />
              ) : (
                <Image
                  _src="/images/thumbsUpGreen.png"
                  _width="11px"
                  _height="11px"
                />
              )}
              24
            </Label>
          </div>
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
  ${props => props.folderColor === "green" && "background-color: #F2FDFA"};
  ${props => props.folderColor === "purple" && "background-color: #F7F7FD"};
  ${props => props.folderColor === "blue" && "background-color: #F0F7FB"};
  border-radius: 20px;
  padding: 28px 20px;
`;

export default ArticleFolder;
