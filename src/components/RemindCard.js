import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Title, Text, Button } from "../elements";

const RemindCard = props => {
  const { _title, _text, _button, isMe } = props;
  const navigate = useNavigate();

  const onNavigate = () => {
    isMe ? navigate("/setting/reminder") : navigate("/login");
  };

  return (
    <React.Fragment>
      <ReCardBox>
        <ReCard>
          <Title
            _fontSize={({ theme }) => theme.fontSizes.font16}
            _color="white"
            _lineHeight="22px"
          >
            {_title}
          </Title>
          <Text
            _fontSize={({ theme }) => theme.fontSizes.font13}
            _color="white"
            _lineHeight="18px"
            _padding="8px 0px"
          >
            {_text}
          </Text>
          <ButtonBox>
            <Button
              _padding="7px 14px"
              _fontSize={({ theme }) => theme.fontSizes.font12}
              bgColor="white"
              _color={({ theme }) => theme.colors.fontColor07}
              _onClick={onNavigate}
            >
              {_button}
            </Button>
          </ButtonBox>
        </ReCard>
      </ReCardBox>
    </React.Fragment>
  );
};

const ReCardBox = styled.div`
  padding: 16px;
`;

const ReCard = styled.div`
  width: 100%;
  height: 180px;
  background: #7881f5;
  border-radius: 19px;
  padding: 30px 28px;
  white-space: pre-wrap;
`;

const ButtonBox = styled.div`
  padding: 16px 0px;
  display: inline-block;
`;

export default RemindCard;
