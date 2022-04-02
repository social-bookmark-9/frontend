import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../../components/common/Navbar";
import RemindList from "../../components/mypage/RemindList";
import { getReminderAxios } from "../../redux/modules/Reminder";
import { Title, Text } from "../../elements";

const MyReminderT = props => {
  const { isLogin, memberId } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReminderAxios());
  }, [dispatch]);

  const reminderData = useSelector(state => state.reminder);
  const isDeskTop = true;

  return (
    <React.Fragment>
      <Navbar {...props} />
      <ReminderContainer>
        <Title
          _fontSize={({ theme }) => theme.fontSizes.font20}
          _lineHeight="28px"
          _color={({ theme }) => theme.colors.fontColor05}
          _padding="0 0 10px 0"
        >
          리마인드 할 아티클
        </Title>
        <Text>안읽은 아티클이 {reminderData.remindData.length}개 있어요</Text>
        <RemindList {...reminderData} isDeskTop={isDeskTop} />
      </ReminderContainer>
    </React.Fragment>
  );
};

const ReminderContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
  width: 100%;
`;


export default MyReminderT;
