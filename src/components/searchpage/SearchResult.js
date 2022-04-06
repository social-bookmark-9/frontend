import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "../folderpage/ArticleCard";

const SearchResult = props => {
  const { articleList } = props;
  const isMe = useSelector(state => state.user.isMe);
  return (
    <React.Fragment>
      {articleList.map((article, idx) => {
        <ArticleCard {...article} article={article} isMe={isMe} />;
      })}
    </React.Fragment>
  );
};

export default SearchResult;
