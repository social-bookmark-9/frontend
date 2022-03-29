import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Button, Title } from "../../elements";

import Swal from "sweetalert2";

const UserNicknameD = props => {
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
      <BaseDiv>
        <UserBox>
          <Topdiv>
            <TitleBox>
              <Title
                textAlign="left"
                _fontSize={({ theme }) => theme.fontSizes.font34}
                _lineHeight="38px"
              >
                버블드에서 사용할 <br />
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
          </TitleBox>
            
          </Topdiv>
            <Button
              _onClick={onFavorite}
              _fontSize={({ theme }) => theme.fontSizes.font20}
              borderRadius="0px"
              _padding="19px 0px"
              _width="547px"
              
            >
              다음
            </Button>
        </UserBox>
      </BaseDiv>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치

const BaseDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c4c4c4;
  display: inline-block;
  text-align: right;
`;

const UserBox = styled.div`
  height: 100vh;
  width: 65%;
  background-color: #ffffff;
  display: inline-block;
  padding-left: 115px;

`;

const Topdiv = styled.div`
  ${FlexboxColumn}
  align-items: left;
  text-align: left;
  height: 75vh;
`;

const TitleBox = styled.div`
  padding: 28px 0px;
  text-align: left;
`;

const InputBox = styled.div`
  padding: 90px 0px 0 0;
  width: 547px;
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


// default props 작성 위치
UserNicknameD.defaultProps = {};

export default UserNicknameD;

