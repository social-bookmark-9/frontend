import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import Title from "../elements/Title";
import Button from "../elements/Button";

const ArticleList = props => {
  return (
    <React.Fragment>
      <div>
        <AlHeader>
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font20}
            lineHeight="24px"
            _subtitleSize={({ theme }) => theme.fontSizes.font14}
          >
            <h1>아티클 폴더 이름</h1>
            <p style={{ paddingTop: "14px" }}>24명이 도움을 받았어요</p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                border: "0.8px solid #D2D6DA",
                borderRadius: "8px",
              }}
            >
              <img
                src="/images/recommend.png"
                alt="menu"
                width="19px"
                height="19px"
              />
              <p style={{ padding: 0, color: "#383838" }}>유용해요 24</p>
            </div>
          </Title>
          <img src="/images/menu.png" alt="menu" width="24px" height="24px" />
        </AlHeader>
        <AlBox>
          <ArticleCard />
        </AlBox>
        <AlButton>
          <Title _subtitleSize="14px">
            <p>아티클을 한번에 저장하고 싶다면?</p>
          </Title>
          <Button
            isBorder
            name="모두 저장하기"
            bgColor="#ffffff"
            _color="#383838"
            _fontSize="14px"
            height="45px"
          />
        </AlButton>
      </div>
    </React.Fragment>
  );
};

const AlHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 22px;
`;

const AlBox = styled.div`
  padding: 0px 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const AlButton = styled.div`
  padding: 8px 16px;
  text-align: center;
`;

export default ArticleList;
