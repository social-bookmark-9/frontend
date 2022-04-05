import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import {
  getSearchArticleResultAxios,
  setPaging,
} from "../../redux/modules/Search";

import styled, { css } from "styled-components";
import { Image, Text, Title } from "../../elements";

import Navbar from "../../components/common/Navbar";
import SearchResult from "../../components/setting/SearchResult";
import InfinityScroll from "../../components/common/InfinityScroll";

const SearchPage = props => {
  const dispatch = useDispatch();
  const location = useLocation();

  // 페이지
  const paging = useSelector(state => state.search.paging);
  const page = paging.page;
  const articleList = useSelector(state => state.search.articleList);
  const isLoading = useSelector(state => state.user.isLoading);

  // 컬렉션/아티클 선택
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearchDropdown = () => {
    setSearchOpen(!searchOpen);
  };
  const [searchType, setSearchType] = useState("전체");
  const handleSearchType = e => {
    setSearchType(e.target);
  };
  const searchList = ["전체", "컬렉션", "아티클"];

  // 카테고리 선택
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggleCategoryDropdown = () => {
    setCategoryOpen(!categoryOpen);
  };
  const [categoryType, setCategoryType] = useState("카테고리");
  const handleCategoryType = e => {
    setCategoryType(e.target);
  };
  const categoryList = [
    "전체",
    "커리어",
    "업무스킬",
    "IT",
    "디자인",
    "마케팅",
    "투자",
    "장소",
    "동기부여",
    "인간관계",
    "패션",
    "예술",
    "기타",
  ];

  // 최신순/좋아요순 선택
  const [sortByOpen, setSortByOpen] = useState(false);
  const toggleSortByDropdown = () => {
    setSortByOpen(!sortByOpen);
  };
  const [sortByType, setSortByType] = useState("최신순");
  const handleSortByType = e => {
    setSortByType(e.target);
  };
  const sortByList = ["최신순", "좋아요순"];

  // 키워드 입력
  const [keyword, setKeyword] = useState(location.state ? location.state : "");
  const handleTitleOg = e => {
    setKeyword(e.target.value);
  };

  const isLoaded = false;

  const hashtag = categoryType !== "카테고리" ? categoryType : "";
  const titleOg = keyword;
  let sort;
  if (sortByType === "최신순") {
    sort = "createdAt";
  } else if (sortByType === "좋아요순") {
    sort = "likeCount";
  }

  useEffect(() => {
    if (location.state) {
      dispatch(getSearchArticleResultAxios({ hashtag, titleOg, page, sort }));
    }
  }, [dispatch, hashtag, titleOg, location.state, sort]);

  const handleSearch = () => {
    dispatch(getSearchArticleResultAxios({ hashtag, titleOg, page, sort }));
  };

  return (
    <React.Fragment>
      <Navbar title="검색" />
      {/* 검색 부분 */}
      <Container>
        <Input
          name="keyword"
          onChange={handleTitleOg}
          value={keyword}
          placeholder="키워드로 검색해보세요"
        />
        <ImageBox onClick={handleSearch}>
          <Image
            _src="/images/search.png"
            _width="24px"
            _height="24px"
            _marginR="0px"
          />
        </ImageBox>
      </Container>
      <DropdownWrap>
        {/* 컬렉션/아티클 */}
        <Dropdown>
          <DropdownHeader state={searchOpen} onClick={toggleSearchDropdown}>
            <FolderName>{searchType}</FolderName>
            <SelectIcon>{">"}</SelectIcon>
          </DropdownHeader>
          {searchOpen && (
            <DropdownList key={searchType}>
              {searchList.map((option, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => {
                    toggleSearchDropdown(setSearchType(option));
                  }}
                  onChange={handleSearchType}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>
        {/* 카테고리 */}
        <Dropdown>
          <DropdownHeader state={categoryOpen} onClick={toggleCategoryDropdown}>
            <FolderName>{categoryType}</FolderName>
            <SelectIcon>{">"}</SelectIcon>
          </DropdownHeader>
          {categoryOpen && (
            <DropdownList key={searchType}>
              {categoryList.map((option, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => {
                    toggleCategoryDropdown(setCategoryType(option));
                  }}
                  onChange={handleCategoryType}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>
        {/* 최신순 */}
        <Dropdown>
          <DropdownHeader state={sortByOpen} onClick={toggleSortByDropdown}>
            <FolderName>{sortByType}</FolderName>
            <SelectIcon>{">"}</SelectIcon>
          </DropdownHeader>
          {sortByOpen && (
            <DropdownList key={sortByType}>
              {sortByList.map((option, idx) => (
                <DropdownItem
                  key={idx}
                  onClick={() => {
                    toggleSortByDropdown(setSortByType(option));
                  }}
                  onChange={handleSortByType}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Dropdown>
      </DropdownWrap>
      {/* 결과 부분 */}
      <Container>
        {isLoaded ? (
          <InfinityScroll
            callNext={() => {
              dispatch(getSearchArticleResultAxios());
            }}
            isNext={paging.next ? true : false}
            loading={isLoading}
            articleList={articleList}
          >
            <Text>
              <SearchResult />
            </Text>
          </InfinityScroll>
        ) : (
          <div
            style={{
              display: "block",
              textAlign: "center",
              paddingTop: "15vh",
            }}
          >
            <Image
              _src="/images/bubbledLight.png"
              _width="56px"
              _height="45px"
            />
            <Title textAlign="center" _padding="25px" _lineHeight="28px">
              찾으시는 키워드를 <br />
              검색해주세요
            </Title>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Input = styled.input`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.gray01};
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
  right: 35px;
  margin-top: 10px;
`;

const DropdownWrap = styled.div`
  display: grid;
  padding: 0 16px;
  grid-template-columns: 22% 30% 25% 22%;
  gap: 8px;
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  margin-bottom: 0;
  padding: 8px 8px 8px 14px;
  border: 1px solid #d2d6da;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  margin-bottom: 7px;
`;

const FolderName = styled.div`
  display: flex;
  justify-content: start;
`;

const SelectIcon = styled.div`
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colors.fontColor03};
  transform: rotate(90deg);
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  overflow: scroll;
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid #d2d6da;
  cursor: pointer;
`;

const DropdownItem = styled.li`
  width: 100%;
  height: 30px;
  padding: 6px 8px 6px 14px;
  margin: 0;
  list-style: none;
  background: white;
  margin-top: -1px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray05};
  &:hover {
    color: ${({ theme }) => theme.colors.gray06};
  }
`;

export default SearchPage;
