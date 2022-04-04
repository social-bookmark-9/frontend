import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import RemindCard from "./RemindCard";

const MyPageGoRemindPage = props => {
  const { memberId, remindData } = props;

  const [myOwnPage, setMyOwnPage] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId, params.id]);

  return(
    <div style={{padding:"0 16px"}}>
      {myOwnPage ? (
        <>
          {remindData && remindData.length > 0 ? (
            null
          ) : (
            <RemindCard
              _title="저장한 글, 다시 읽고 계신가요?"
              _text={
                "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
              }
              _button="리마인드 받기"
            />
          )}
        </>
      ) : null
      }
    </div>  
  )
}

export default MyPageGoRemindPage;
