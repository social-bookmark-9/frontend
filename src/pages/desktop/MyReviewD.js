import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getArticleReviewAxios } from "../../redux/modules/Article";

import MyReviewListD from "../../components/setting/MyReviewListD";

const MyReviewD = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleReviewAxios());
  }, [dispatch]);

  const reviewList = useSelector(state => state.article.reviewList);

  return (
    <React.Fragment>
      <Container>
        <MyReviewListD {...reviewList} />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 80px auto 0 auto;
  width: 1220px;
`;

export default MyReviewD;
