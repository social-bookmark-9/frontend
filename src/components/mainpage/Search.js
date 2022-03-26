import React from "react";
import styled, { css } from "styled-components";
import { Image, Text, Title } from "../../elements";

const Search = props => {
  return (
    <React.Fragment>
      <Container>
        <SearchContainer>
          <TextBox>
            <Title
              _color={({ theme }) => theme.colors.white}
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _lineHeight="24px"
            >
              찾는 아티클이 있으신가요?
            </Title>
            <Text
              _fontSize={({ theme }) => theme.fontSizes.font13}
              _lineHeight="18px"
            >
              다양한 주제의 버블 수집가를 만나보세요👀
            </Text>
          </TextBox>
          <SearchBox>
            <Input placeholder="키워드로 검색해보세요" />
            <ImageBox>
              <Image
                _src="/images/search.png"
                _width="24px"
                _height="24px"
                _marginR="0px"
              />
            </ImageBox>
          </SearchBox>
        </SearchContainer>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0px 16px 90px 16px;
`;

const SearchContainer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.gray07};
      border-radius: 20px;
    `;
  }}
`;

const TextBox = styled.div`
  padding: 26px 36px 6px 36px;
  & h1 {
    padding-bottom: 4px;
  }
`;

const SearchBox = styled.div`
  padding: 16px;
`;

const Input = styled.input`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      border-radius: 12px;
      width: 100%;
      padding: 14px 24px;
      position: relative;
      &::placeholder {
        color: ${colors.fontColor01};
      }
    `;
  }}
`;

const ImageBox = styled.div`
  display: inline-block;
  position: absolute;
  right: 50px;
  margin-top: 10px;
`;

export default Search;
