import React from "react";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import Button from "../elements/Button";
import Title from "../elements/Title";
import { Flexbox, FlexboxColumn, FlexboxRow } from "../styles/flexbox";

const Article = props => {
  return (
    <React.Fragment>
      <AlHeader>
        <Title
          _titleSize={({ theme }) => theme.fontSizes.font20}
          lineHeight="24px"
        >
          <h1>아티클 폴더 이름</h1>
        </Title>
        <img src="/images/menu.png" alt="menu" width="24px" height="24px" />
      </AlHeader>
      <div style={{ padding: "16px" }}>
        <ArticleCard isDetail done />
        <Buttons>
          <Button inArticle name="링크 복사" />
          <Button inArticle name="이미지 저장" />
        </Buttons>
        <MemoBox>
          <MemoHead>
            <Title
              _titleSize={({ theme }) => theme.fontSizes.font20}
              lineHeight="24px"
            >
              <h1>김철수의 메모</h1>
            </Title>
            <img src="/images/hide.png" alt="menu" width="20px" height="20px" />
          </MemoHead>
          <TextAreaField
            placeholder="여기를 눌러 메모를 남겨보세요."
            rows={5}
          />
        </MemoBox>
      </div>
      <Line />
    </React.Fragment>
  );
};

const AlHeader = styled.div`
  ${FlexboxRow}
  justify-content: space-between;
  padding: 14px 22px;
`;

const Buttons = styled.div`
  ${FlexboxRow}
`;

const MemoBox = styled.div`
  ${FlexboxColumn}
  padding: 36px 0px;
`;

const MemoHead = styled.div`
  ${FlexboxRow}
  justify-content: space-between;
  padding: 16px 0px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 41px 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayColor01};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor02};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.font13};
    letter-spacing: -0.0008em;
  }
`;

const Line = styled.hr`
  border: none;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.grayColor01};
`;

export default Article;
