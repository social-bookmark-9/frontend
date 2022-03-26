import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <>
      <h1>주소가 올바르지 않아요!</h1>
      <Link to="/">홈으로</Link>
    </>
  );
};

export default NotFound;
