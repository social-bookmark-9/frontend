import React from "react";
import Profile from "../components/Profile";
import Title from "../elements/Title";
import ArticleFolder from "../components/ArticleFolder";
import Navbar from "../components/Navbar";

const MyPage = props => {
  const folderColors = ["green", "purple", "blue"];

  return (
    <React.Fragment>
      <Navbar />
      {/* 프로필+이름 부분 */}
      <Profile />
      {/* 큐레이션 부분 */}
      <Title _padding="20px">김철수님의 큐레이션</Title>
      {folderColors.map((color, idx) => (
        <ArticleFolder key={idx} folderColor={color} />
      ))}
    </React.Fragment>
  );
};

export default MyPage;
