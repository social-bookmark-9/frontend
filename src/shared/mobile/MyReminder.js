import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/common/Navbar";
import RemindList from "../../components/mypage/RemindList";
import { getReminderAxios } from "../../redux/modules/Reminder";

const MyReminder = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReminderAxios());
  }, [dispatch]);

  const reminderData = useSelector(state => state.reminder);
  console.log(reminderData);
  console.log(reminderData.remindData.length);

  return (
    <React.Fragment>
      <ReminderContainer>
        <Navbar title={`읽지 않은 아티클 (${reminderData.remindData.length})`} />
        <RemindList {...reminderData} />
      </ReminderContainer>
    </React.Fragment>
  );
};

const ReminderContainer = styled.div`
  padding: 16px;
`;


export default MyReminder;
