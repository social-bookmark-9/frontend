import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Text, Button } from "../../elements";

const RemindCard = props => {
  const { _title, _text, _button, isNew } = props;
  const navigate = useNavigate();

  const onNavigate = () => {
    isNew ? navigate("/login") : navigate("/setting/remindEmail");
    // navigate("/setting/reminder");
  };

  return (
    <React.Fragment>
      <ReCardBox>
        <ReCard>
          <TextBox>
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
          </TextBox>
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

const TextBox = styled.div`
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const ReCardBox = styled.div`
  padding: 16px;
  @media screen and (min-width: 768px) and (max-width: 1194px) {
    padding: 28px 16px;
  }
  @media screen and (min-width: 1195px) {
    padding: 28px 0px;
  }
`;

const ReCard = styled.div`
  width: 100%;
  height: 180px;
  background: #7881f5;
  border-radius: 19px;
  padding: 30px 28px;
  white-space: pre-wrap;
  @media screen and (min-width: 768px) {
    padding: 30px 52px;
    display: flex;
    justify-content: space-between;
    background: #7881f5;
    border-radius: 19px;
    white-space: pre-wrap;
    height: auto;
  }
`;

const ButtonBox = styled.div`
  padding: 16px 0px;
  display: inline-block;
  @media screen and (min-width: 768px) {
    padding: 8px 0px;
    align-self: end;
  }
`;

export default RemindCard;
