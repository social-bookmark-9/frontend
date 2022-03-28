import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getToken } from "../../shared/utils";

import styled from "styled-components";
import { FlexboxColumn, FlexboxRow } from "../../styles/flexbox";
import { Button, Image, Title, Text } from "../../elements";

import {
  getArticleAxios,
  getArticleWithAxios,
  postArticleAxios,
  reviewHideAxios,
  updateReviewAxios,
} from "../../redux/modules/Article";

import DetailNavbar from "../../components/detailpage/DetailNavbar";
import DetailCard from "../../components/detailpage/DetailCard";
import DetailRemind from "../../components/detailpage/DetailRemind";
import RecommendCard from "../../components/detailpage/RecommendCard";

import Swal from "sweetalert2";

const ArticleDetail = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const articleId = params.id;

  const memoRef = useRef();

  useEffect(() => {
    if (getToken()) {
      dispatch(getArticleWithAxios({ articleId, navigate }));
    } else {
      dispatch(getArticleAxios({ articleId, navigate }));
    }
  }, [dispatch, articleId, navigate]);

  const article = useSelector(state => state.article.data);
  const recommendList = article.recommendArticles;
  // const reminderDate = article.reminderDate;
  const isMe = article.writerMemberId === props.memberId;

  const [words, setWords] = useState(0);
  const [reviewHide, setReviewHide] = useState(article.reviewHide);

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

  console.log("상세페이지 아이디:", articleId);
  const handleMemoHide = () => {
    if (reviewHide) {
      Swal.fire({
        text: "작성한 메모를 공개할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "#353C49",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(reviewHideAxios(articleId));
          Swal.fire({ text: "저장했습니다", confirmButtonText: "확인" });
          setReviewHide(false);
        }
      });
    } else {
      Swal.fire({
        text: "작성한 메모를 비공개할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        confirmButtonColor: "#353C49",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(reviewHideAxios(articleId));
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
      <DetailNavbar
        article={article}
        {...article}
        title={article.articleFolderName}
        articleId={articleId}
      />
      <DetailContainer>
        {/* 아티클 카드 */}
        <DetailCard article={article} articleId={articleId} />
        {/* 아티클 저장 */}
        {isMe ? null : (
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
        )}
        {/* 유저 메모 작성 */}
        <MemoBox>
          <MemoHead>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font20}
              _lineHeight="24px"
            >
              {article.writerMemberName}의 메모
            </Title>
            {isMe ? (
              <ImageBox onClick={handleMemoHide}>
                <Image
                  _src={`/images/${
                    reviewHide && reviewHide ? "hide" : "show"
                  }.png`}
                  _width="20px"
                  _height="20px"
                />
              </ImageBox>
            ) : null}
          </MemoHead>
          {isMe ? (
            <>
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
            </>
          ) : (
            <TextBox>
              <Text>{article.review}</Text>
            </TextBox>
          )}
        </MemoBox>
        <DetailRemind {...article} />
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
          <RecommendCard recommendList={recommendList} {...recommendList} />
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

const TextBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray01};
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
