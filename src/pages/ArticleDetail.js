import React from "react";

import styled from "styled-components";
import { FlexboxColumn, FlexboxRow } from "../styles/flexbox";

import { ArticleCard, Navbar, RecommendCard } from "../components";
import { Button, Image, Title } from "../elements";
import { useDispatch } from "react-redux";
import { getArticleAxios } from "../redux/modules/Article";
import { useNavigate } from "react-router";
// import { useLocation } from "react-router";

const ArticleDetail = props => {
  // const id = props.match.params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const location = useLocation();
  // const articleData = location.state;
  // const isMe = location.state.isMe;
  const recommendList = [0, 1, 2];

  // React.useEffect(() => {
  //   // if (article) {
  //   //   return;
  //   // }
  //   dispatch(getArticleAxios({ id, navigate }));
  // }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div style={{ padding: "16px" }}>
        <ArticleCard />
        {/* {isMe ? (
          ""
        ) : ( */}
        <Button
          _padding="12px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.fontColor05}
          isBorder
          bold
        >
          내 컬렉션에 저장
        </Button>
        {/* )} */}

        <MemoBox>
          <MemoHead>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font20}
              _lineHeight="24px"
            >
              닉네임의 메모
            </Title>
            <Image _src="/images/hide.png" _width="20px" _height="20px" />
          </MemoHead>
          <TextAreaField
            placeholder="여기를 눌러 메모를 남겨보세요."
            rows={5}
          />
        </MemoBox>
      </div>
      <Line />
      <div style={{ padding: "24px 20px" }}>
        <Title
          _fontSize={({ theme }) => theme.fontSizes.font20}
          _lineHeight="24px"
        >
          함께 보면 좋은 글
        </Title>
        <ReCardBox>
          {recommendList.map((recommend, idx) => (
            <RecommendCard key={idx} />
          ))}
        </ReCardBox>
      </div>
    </React.Fragment>
  );
};

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
  padding: 26px;
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
    line-height: 46px;
  }
`;

const Line = styled.hr`
  border: none;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.grayColor01};
`;

const ReCardBox = styled.div`
  padding: 28px 0px;
`;

export default ArticleDetail;
