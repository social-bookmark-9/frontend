import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Text, Button } from "../../elements";
import { Desktop, Tablet, Mobile } from "../../styles/mediaquery";

const RemindCard = props => {
  const { _title, _text, _button, isLogin, memberId } = props;
  const navigate = useNavigate();

  const onNavigate = () => {
    // isMe ? navigate("/setting/reminder") : navigate("/login");
    navigate("/setting/reminder")
  };

  return (
    <React.Fragment>
      <Desktop>
        <DReCardBox>
          <DReCard>
            <DTextBox>
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
            </DTextBox>
            <DButtonBox>
              <Button
                _padding="7px 14px"
                _fontSize={({ theme }) => theme.fontSizes.font12}
                bgColor="white"
                _color={({ theme }) => theme.colors.fontColor07}
                _onClick={onNavigate}
              >
                {_button}
              </Button>
            </DButtonBox>
          </DReCard>
        </DReCardBox>
      </Desktop>
      <Tablet>
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
      </Tablet>
      <Mobile>
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
      </Mobile>
    </React.Fragment>
  );
};

const DReCardBox = styled.div`
  padding: 28px 0px;
`;

const DReCard = styled.div`
  padding: 30px 52px;
  display: flex;
  justify-content: space-between;
  background: #7881f5;
  border-radius: 19px;
  white-space: pre-wrap;
`;

const DTextBox = styled.div`
  display: inline-block;
`;

const DButtonBox = styled.div`
  padding: 8px 0px;
  align-self: end;
`;

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
