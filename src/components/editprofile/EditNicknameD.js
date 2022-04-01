import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import styled, { css } from "styled-components";
import { FlexboxRow } from "../../styles/flexbox";
import { Button, Title } from "../../elements";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { checkMemberNameAxios } from "../../redux/modules/User";
import { editProfileUserNameAxios } from "../../redux/modules/Profile";


const EditNicknameD = props => {
  const dispatch = useDispatch();

  const checkMemberName = useSelector(
    state => state.user.register.checkMemberName,
  );
  const usableMemberName = useSelector(
    state => state.user.register.usableMemberName,
  );

  const [words, setWords] = useState(0);
  const [nickName, setNickName] = useState("");
  const [activeMessage, setActiveMessage] = useState(false);
  const [checkCharsKor, setCheckCharsKor] = useState(false);

  const handleEdit = () => {
    if (nickName) {
      props.setIsEdit(false);
      props.setNewNickname(nickName);
      dispatch(editProfileUserNameAxios({ nickname: nickName }));
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "#DAF8F1",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
      });
      Toast.fire({
        icon: "success",
        title: "변경완료",
      });
    } else {
      Swal.fire({
        text: "닉네임을 입력해주세요",
        icon: "warning",
        confirmButtonText: "확인",
      });
    }
  };

  const memberNameData = {
    memberName: nickName,
  };

  const handleCheckMemberName = e => {
    e.preventDefault();
    dispatch(checkMemberNameAxios(memberNameData));
    setActiveMessage(true);
  };

  const handleCheckChars = e => {
    const regExp = /[^0-9a-zA-Z]/g;
    const checkChars = e.target;

    if (checkChars.value.length <= 16) {
      if (regExp.test(checkChars.value)) {
        checkChars.value = checkChars.value.replace(regExp, "");
        setCheckCharsKor(true);
      } else {
        setCheckCharsKor(false);
      }
      setWords(checkChars.value.length);
      setNickName(checkChars.value);
    }
    if (checkChars.value.length > 16) {
      if (regExp.test(checkChars.value)) {
        checkChars.value = checkChars.value.replace(regExp, "");
      }
      checkChars.value = checkChars.value.slice(0, 16);
    }
  };

  return (
    <React.Fragment>
      <Container>
        <div style={{width:"45vw", height:"100%"}} />
        <UserContainer>
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
                  placeholder="영어로 된 닉네임을 입력해주세요"
                  maxLength={16}
                  onKeyUp={handleCheckChars}
                />
                <CheckButton onClick={handleCheckMemberName}>
                  중복확인
                </CheckButton>
                <MessageBox>
                  {activeMessage ? (
                    usableMemberName ? (
                      <ConfirmMessage>{checkMemberName}</ConfirmMessage>
                    ) : (
                      <ErrorMessage>{checkMemberName}</ErrorMessage>
                    )
                  ) : checkCharsKor ? (
                    <ErrorMessage>영어, 숫자만 사용가능합니다</ErrorMessage>
                  ) : (
                    <div />
                  )}
                  <InputCheck>{words}/16</InputCheck>
                </MessageBox>
              </InputBox>
            </UserArea>
            <ButtonBox>
              <Button
                _onClick={handleEdit}
                _fontSize={({ theme }) => theme.fontSizes.font20}
                borderRadius="0px"
                _padding="18px 0px"
              >
                완료
              </Button>
            </ButtonBox>
          </UserBox>
        </UserContainer>
      </Container>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치
const Container = styled.div`
  ${FlexboxRow};
  width: 100vw;
  height: 100vh;
  background-color: #c4c4c4;
`;

const UserContainer = styled.div`
  width: 55vw;
  height: 100vh;
  padding-left: 115px;
  background-color: #ffffff;
`;

const UserBox = styled.div`
  width: 80%;
  position: relative;
  background-color: #ffffff;
`;

const UserArea = styled.div`
  width: 100%;
  height: 75vh;
  padding: 195px 0px;
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
    font-size: ${({ theme }) => theme.fontSizes.font14};
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
  height: 25wh;
  width: 100%;
`;

const CheckButton = styled.button`
  ${({ theme }) => {
    const { fontSizes, colors } = theme;
    return css`
      font-size: ${fontSizes.font12};
      line-height: 16px;
      letter-spacing: -0.0008em;
      text-align: center;
      background-color: ${colors.gray07};
      color: ${colors.white};
      padding: 6px 17px;
      border-radius: 45px;
      display: flex;
      position: absolute;
      right: 0px;
      top: 325px;
    `;
  }}
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ErrorMessage = styled.p`
  ${({ theme }) => {
    const { fontSizes, colors } = theme;
    return css`
      font-size: ${fontSizes.font12};
      line-height: 16px;
      letter-spacing: -0.0008em;
      text-align: left;
      color: ${colors.error};
    `;
  }}
`;

const ConfirmMessage = styled.p`
  ${({ theme }) => {
    const { fontSizes, colors } = theme;
    return css`
      font-size: ${fontSizes.font12};
      line-height: 16px;
      letter-spacing: -0.0008em;
      text-align: left;
      color: ${colors.pointGreen02};
    `;
  }}
`;

// default props 작성 위치
EditNicknameD.defaultProps = {};

export default EditNicknameD;
