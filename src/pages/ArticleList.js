import React from "react";
// import { useSelector } from "react-redux";
import styled from "styled-components";
import { ArticleCard, Navbar } from "../components";
import { Text, Button } from "../elements";
import { FlexboxColumn } from "../styles/flexbox";

const ArticleList = props => {
  const data = [
    {
      articleId: "0",
      url: "https://pythondocs.net/selenium/%EC%85%80%EB%A0%88%EB%8B%88%EC%9B%80-%ED%81%AC%EB%A1%A4%EB%9F%AC-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95/",
      titleOg: "타이틀1",
      contentOg:
        "React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.",
      imgOg:
        "https://cdn.pixabay.com/photo/2020/03/25/16/01/children-4967808_960_720.jpg",
      hashTag: ["커리어", " 과학", "IT"],
      isMe: true,
      isRead: true,
      isSaved: true,
    },
    {
      articleId: "1",
      url: "https://kyounghwan01.github.io/blog/React/redux/redux-toolkit/#redux-action",
      titleOg: "타이틀2",
      contentOg: "두번째 게시글 입니다",
      imgOg: "",
      hashTag: ["디자인"],
      isMe: false,
      isRead: false,
      isSaved: false,
    },
    {
      articleId: "2",
      url: "https://blog.webdevsimplified.com/2021-05/cors/",
      titleOg: "타이틀3",
      contentOg: "세번째 게시글 입니다",
      imgOg: "https://d2v80xjmx68n4w.cloudfront.net/gigs/DtJQG1633275408.jpg",
      hashTag: ["인간관계", "IT"],
      isMe: false,
      isRead: true,
      isSaved: true,
    },
  ];

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
