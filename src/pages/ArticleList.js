import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Title from "../elements/Title";
import Button from "../elements/Button";

const ArticleList = props => {
  return (
    <React.Fragment>
      <Navbar />
      <AlBox>
        <ArticleCard />
        <ArticleCard isRead done />
        <ArticleCard isMe done />
        <ArticleCard isDetail done />
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
    </React.Fragment>
  );
};

const AlBox = styled.div`
  padding: 0px 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const AlButton = styled.div`
  padding: 8px 16px;
  text-align: center;
`;

export default ArticleList;
