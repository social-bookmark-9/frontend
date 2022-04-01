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

import DetailNavbarD from "../../components/detailpage/DetailNavbarD";
import DetailCard from "../../components/detailpage/DetailCard";
import DetailRemindD from "../../components/detailpage/DetailRemindD";
import RecommendCard from "../../components/detailpage/RecommendCard";

import Swal from "sweetalert2";
import NavbarD from "../../components/common/NavbarD";

const ArticleDetailD = props => {
  const { memberId } = props;
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
  const isMe = article.writerMemberId === memberId;

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
    <NavbarD {...props} />
    <Container>
      <DetailNavbarD
        article={article}
        {...article}
        title={article.articleFolderName}
        articleId={articleId}
        isMe={isMe}
      />
      <DetailContainer>
        {/* 아티클 카드 */}
        <div style={{width:"100%"}}>
          <DetailCard article={article} articleId={articleId} />
        </div>
        <div>
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
        <DetailRemindD {...article} />
        </div>
      </DetailContainer>
    </Container>
    <GoodToReadContainer>
        <Container>
          <Title
            _fontSize={({ theme }) => theme.fontSizes.font20}
            _lineHeight="28px"
            _padding="36px 0 26px 0"
          >
            함께 보면 좋은 글
          </Title>
          <ReCardBox>
            <RecommendCard recommendList={recommendList} {...recommendList} />
          </ReCardBox>
        </Container>
      </GoodToReadContainer>
    </React.Fragment>
  );
};

const Container = styled.div`
  padding-top: 82px;
  margin: 0 auto;
  width: 1119px;
`;

const GoodToReadContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 16px;
  margin: 20px 0 30px 0;
`;

const MemoBox = styled.div`
  ${FlexboxColumn}
`;

const MemoHead = styled.div`
  ${FlexboxRow}
  justify-content: space-between;
  padding: 0 0 19px 0;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 65px 26px;
  border-radius: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray01};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor02};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.font13};
    letter-spacing: -0.0008em;
    line-height: 25px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 180px;
  padding: 26px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const ImageBox = styled.div`
  display: inline-block;
`;

const ReCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 19px;
`;

const InputCheck = styled.p`
  text-align: right;
  padding: 4px 0px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  color: ${({ theme }) => theme.colors.fontColor04};
  line-height: 18px;
  letter-spacing: -0.0008em;
`;

export default ArticleDetailD;
