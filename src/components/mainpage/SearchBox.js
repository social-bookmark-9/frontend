import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import styled, { css } from "styled-components";
import { Image, Text, Title } from "../../elements";
import { searchByKeywordAxios } from "../../redux/modules/Search";

const SearchBox = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const getKeyword = e => {
    setKeyword(e.target.value);
  };

  const handleSearchPage = () => {
    dispatch(searchByKeywordAxios(keyword, 0));
    navigate("/search", { state: keyword });
  };

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
          <SearchArea>
            <Input
              name="keyword"
              onChange={getKeyword}
              value={keyword}
              placeholder="키워드로 검색해보세요"
            />
            <ImageBox onClick={handleSearchPage}>
              <Image
                _src="/images/search.webp"
                _width="24px"
                _height="24px"
                _marginR="0px"
              />
            </ImageBox>
          </SearchArea>
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

const SearchArea = styled.div`
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
  right: 38px;
  padding: 11px;
  cursor: pointer;
`;

export default SearchBox;
