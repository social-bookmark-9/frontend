import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import Title from "../elements/Title";

const UserNickname = props => {
  const navigate = useNavigate();
  const [words, setWords] = useState(0);
  const [nickname, setNickname] = useState("");

  const handleKeyUp = e => {
    if (e.target.value.length <= 6) {
      setWords(e.target.value.length);
      setNickname(e.target.value);
    }
    if (e.target.value.length > 6) {
      e.target.value = e.target.value.slice(0, 6);
    }
  };

  return (
    <React.Fragment>
      <UserBox>
        <UserArea>
          <Title
            _fontSize={({ theme }) => theme.fontSizes.font24}
            lineHeight="32px"
          >
            <h1>
              내가 가진 멋진 닉네임을
              <br />
              자랑해주세요
            </h1>
          </Title>
          <InputBox>
            <UserInput
              placeholder="닉네임을 입력해주세요"
              maxLength={6}
              onKeyUp={handleKeyUp}
            />
            <InputCheck>{words}/6</InputCheck>
          </InputBox>
        </UserArea>
        <ButtonBox>
          <Button
            _onClick={() => {
              navigate("/user/favorites", { state: nickname });
            }}
            name="다음"
            margin="0px"
            _fontSize={({ theme }) => theme.fontSizes.font20}
            height="63px"
          />
        </ButtonBox>
      </UserBox>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치
const UserBox = styled.div`
  ${FlexboxColumn}
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const UserArea = styled.div`
  padding: 65px 24px;
`;

const InputBox = styled.div`
  padding: 48px 0px;
`;

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  border-radius: 0px;
  padding: 12px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor03};
    font-size: ${({ theme }) => theme.fontSizes.font16};
  }
  &:focus {
    outline: none;
  }
`;

const InputCheck = styled.p`
  text-align: right;
  padding: 4px 0px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  color: ${({ theme }) => theme.colors.fontColor04};
  line-height: 18px;
  letter-spacing: -0.0008em;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// default props 작성 위치
UserNickname.defaultProps = {};

export default UserNickname;
