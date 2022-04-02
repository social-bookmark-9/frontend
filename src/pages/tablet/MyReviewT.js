import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getArticleReviewAxios } from "../../redux/modules/Article";

import MyReviewListD from "../../components/setting/MyReviewListD";
import Navbar from "../../components/common/Navbar";

const MyReviewT = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleReviewAxios());
  }, [dispatch]);

  const reviewList = useSelector(state => state.article.reviewList);

  return (
    <React.Fragment>
      <Container>
        <Navbar {...props} />
        <MyReviewListD {...reviewList} />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin: 0 auto 0 auto;
  width: 100%;
`;

export default MyReviewT;
