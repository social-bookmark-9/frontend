import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import UserTitle from "../elements/Box";

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
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8249;
          </BackButton>
          <UserTitle>
            <h3>
              내가 가진 멋진 닉네임을
              <br />
              자랑해주세요
            </h3>
          </UserTitle>
          <InputBox>
            <UserInput
              placeholder="닉네임을 입력해주세요"
              maxLength={6}
              onKeyUp={handleKeyUp}
            />
            <p style={{ textAlign: "right", padding: "4px 0px" }}>{words}/6</p>
          </InputBox>
        </UserArea>
        <ButtonBox>
          <Button
            _onClick={() => {
              navigate("/user/favorites", {state: nickname});
            }}
            name="다음"
            margin="0px"
            _fontSize={({theme}) => theme.fontSizes.font20}
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
  padding: 16px;
`;

const BackButton = styled.p`
  font-size: 40px;
`;

const InputBox = styled.div`
  padding: 48px 0px;
`;

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  padding: 16px;
  width: 100%;
  &::placeholder {
    color: #e3e3e3;
    font-size: ${({ theme }) => theme.fontSizes.font16};
  }
  &:focus {
    outline: none;
  }
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// default props 작성 위치
UserNickname.defaultProps = {};

export default UserNickname;
