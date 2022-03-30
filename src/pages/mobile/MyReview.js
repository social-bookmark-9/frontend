import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getArticleReviewAxios } from "../../redux/modules/Article";

import Navbar from "../../components/common/Navbar";
import MyReviewList from "../../components/setting/MyReviewList";


const MyReview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleReviewAxios());
  }, [dispatch]);

  const reviewList = useSelector(state => state.article.reviewList);

  return (
    <React.Fragment>
      <Navbar title="내가 작성한 메모" />
      <MyReviewList {...reviewList} />
      
    </React.Fragment>
  );
};

export default MyReview;
