import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { FlexboxColumn, FlexboxRow, FlexboxSpace } from "../styles/flexbox";

import { Button, Image, Title } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleAxios,
  postArticleAxios,
  updateReviewAxios,
} from "../redux/modules/Article";
import { useNavigate, useParams } from "react-router";
import DetailCard from "../components/DetailCard";
import DetailNavbar from "../components/DetailNavbar";
import RecommendCard from "../components/RecommendCard";
import Swal from "sweetalert2";

const ArticleDetail = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const articleId = params.id;

  const memoRef = useRef();

  useEffect(() => {
    dispatch(getArticleAxios({ articleId, navigate }));
  }, [dispatch, articleId, navigate]);

  const article = useSelector(state => state.article.data);
  const recommendList = article.recommendArticles;

  const [words, setWords] = useState(0);
  const [reviewHide, setReviewHide] = useState(false);

  const handleKeyUp = e => {
    if (e.target.value.length <= 200) {
      setWords(e.target.value.length);
    }
    if (e.target.value.length > 200) {
      e.target.value = e.target.value.slice(0, 200);
    }
  };

  const updateUserMemo = () => {
    const review = memoRef.current.value;
    if (article.review !== review) {
      dispatch(updateReviewAxios({ articleId, review, navigate }));
    }
  };

  console.log(reviewHide);
  const handleMemoHide = () => {
    if (reviewHide) {
      Swal.fire({
        text: "작성한 메모를 공개할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire({ text: "저장했습니다", confirmButtonText: "확인" });
          setReviewHide(false);
        }
      });
    } else {
      Swal.fire({
        text: "작성한 메모를 비공개할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire({ text: "저장했습니다", confirmButtonText: "확인" });
          setReviewHide(true);
        }
      });
    }
  };

  const handleSave = () => {
    const articleData = {
      articleFolderName: article.articleFolderName,
      url: article.url,
      reminderDate: 0,
      readCount: 0,
      hashtag1: article.hashtag1,
      hashtag2: article.hashtag2,
      hashtag3: article.hashtag3,
    };

    dispatch(postArticleAxios({ articleData, navigate }));
  };

  return (
    <React.Fragment>
      <DetailNavbar article={article} title={article.articleFolderName} />

      <DetailContainer>
        {/* 아티클 카드 */}
        <DetailCard article={article} />
        {/* 아티클 저장 */}
        <Button
          _onClick={handleSave}
          _padding="12px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.fontColor05}
          isBorder
          bold
        >
          내 컬렉션에 저장
        </Button>
        {/* 유저 메모 작성 */}
        <MemoBox>
          <MemoHead>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font20}
              _lineHeight="24px"
            >
              내이름의 메모
            </Title>
            <ImageBox onClick={handleMemoHide}>
              <Image _src="/images/hide.png" _width="20px" _height="20px" />
            </ImageBox>
          </MemoHead>
          <TextAreaField
            ref={memoRef}
            name="userMemo"
            defaultValue={article.review != null ? article.review : null}
            placeholder="여기를 눌러 메모를 남겨보세요."
            rows={5}
            maxLength={200}
            onKeyUp={handleKeyUp}
            onBlur={updateUserMemo}
          />
          <InputCheck>{words}/200</InputCheck>
        </MemoBox>
      </DetailContainer>
      <Line />
      <div style={{ padding: "24px 20px" }}>
        <Title
          _fontSize={({ theme }) => theme.fontSizes.font20}
          _lineHeight="24px"
        >
          함께 보면 좋은 글
        </Title>
        <ReCardBox>
          {recommendList &&
            recommendList.map((recommend, idx) => (
              <RecommendCard key={idx} recommend={recommend} />
            ))}
        </ReCardBox>
      </div>
    </React.Fragment>
  );
};

const DetailContainer = styled.div`
  padding: 16px;
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
  padding: 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray01};
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

const ImageBox = styled.div`
  display: inline-block;
`;

const Line = styled.hr`
  border: none;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const ReCardBox = styled.div`
  padding: 28px 0px;
`;

const InputCheck = styled.p`
  text-align: right;
  padding: 4px 0px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  color: ${({ theme }) => theme.colors.fontColor04};
  line-height: 18px;
  letter-spacing: -0.0008em;
`;

// const Reminder = styled.div`
//   ${FlexboxSpace}
//   align-items: center;
//   padding: 17px 0px;
// `;

// const RemindSelection = styled.div`
//   ${FlexboxRow}
// `;

// const RemindText = styled.div`
//   ${FlexboxRow}
// `;

export default ArticleDetail;
