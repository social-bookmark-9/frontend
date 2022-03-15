import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ArticleCard, Navbar } from "../components";
import { Text, Button } from "../elements";
import { FlexboxColumn } from "../styles/flexbox";

const ArticleList = props => {
  const data = useSelector(state => state.article.data);

  return (
    <React.Fragment>
      <Navbar />
      {}
      <AlBox>
        {data.map((article, idx) => {
          return <ArticleCard key={idx} article={article} />;
        })}
      </AlBox>
      <AlButton>
        <Text
          _padding="16px 0px"
          _fontSize={({ theme }) => theme.fontSizes.font14}
          _lineHeight="22px"
        >
          아티클을 한번에 저장하고 싶다면?
        </Text>
        <Button
          _padding="12px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.fontColor05}
          isBorder
          bold
        >
          모두 저장하기
        </Button>
      </AlButton>
    </React.Fragment>
  );
};

const AlBox = styled.div`
  padding: 0px 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const AlButton = styled.div`
  ${FlexboxColumn}
  align-items: center;
  padding: 8px 16px;
`;

export default ArticleList;
