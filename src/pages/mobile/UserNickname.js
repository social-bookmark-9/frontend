import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Button, Title } from "../../elements";

import Swal from "sweetalert2";

const UserNickname = props => {
  const location = useLocation();
  const navigate = useNavigate();

  const [words, setWords] = useState(0);
  const [nickname, setNickname] = useState("");

  const onFavorite = () => {
    if (nickname) {
      navigate("/user/favorites", {
        state: { ...location.state, nickname },
      });
    } else {
      Swal.fire({
        text: "닉네임을 입력해주세요",
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#353C49",
      });
    }
  };

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
            _lineHeight="38px"
          >
            버블드에서 사용할
            <br />
            닉네임을 적어주세요
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
            _onClick={onFavorite}
            _fontSize={({ theme }) => theme.fontSizes.font20}
            borderRadius="0px"
            _padding="18px 0px"
          >
            다음
          </Button>
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
    color: ${({ theme }) => theme.colors.gray03};
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
