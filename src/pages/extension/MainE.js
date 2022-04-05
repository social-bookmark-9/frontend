import React from "react";
import AddNewArticleE from "./AddNewArticleE";
import LoginE from "./LoginE";

const MainE = props => {
  const {isLogin} = props;

  return (
    <React.Fragment>
      {!isLogin ?
      (
        <LoginE />
      ):(
        <AddNewArticleE />
      )}
    </React.Fragment>
  )
}

export default MainE;