import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../folderpage/ArticleCard";
import styled from "styled-components";

const SearchResult = props => {
  const { articleList } = props;
  const isMe = useSelector(state => state.user.isMe);
  return (
    <React.Fragment>
      {articleList.map((article, idx) => (
        <ArticleCardBox key={idx}>
          <ArticleCard {...article} article={article} isMe={isMe} />
        </ArticleCardBox>
      ))}
    </React.Fragment>
  );
};

const ArticleCardBox = styled.div``;

export default SearchResult;
