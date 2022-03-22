import React from "react";
import { KAKAO_AUTH_URL } from "../shared/OAuth";

import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import { Button, Title, Text, Image } from "../elements";

import { useSelector } from "react-redux";

const Login = () => {
  console.log("로그인정보 확인", useSelector(state => state.user));

  return (
    <React.Fragment>
      <LoginBox>
        <Topdiv>
          <Image _src="/images/bubbled.png" _width="65.37px" _height="52.4px" />
          <TitleBox>
            <Title
              textAlign="center"
              _titleSize={({ theme }) => theme.fontSizes.font28}
              _lineHeight="36px"
            >
              Express yourself <br />
              with what you read
            </Title>
            <Text
              textAlign="center"
              _padding="22px 0px"
              _fontSize={({ theme }) => theme.fontSizes.font14}
            >
              내가 읽은 것들로 나를 표현하는 공간. 버블드
            </Text>
          </TitleBox>
        </Topdiv>
        <Bottomdiv>
          <a href={KAKAO_AUTH_URL}>
            <Button
              _padding="14px 0px"
              bgColor={({ theme }) => theme.colors.kakao}
              _color="#381E1F"
              _fontSize={({ theme }) => theme.fontSizes.font12}
              borderRadius="3px"
            >
              <img src="/images/kakao.png" width={20} height={17} alt="kakao" />
              카카오로 로그인
            </Button>
          </a>
        </Bottomdiv>
      </LoginBox>
    </React.Fragment>
  );
};

// 스타일드 컴포넌트 작성 위치
const LoginBox = styled.div`
  width: 100%;
`;

const Topdiv = styled.div`
  ${FlexboxColumn}
  align-items: center;
  height: 75vh;
`;

const TitleBox = styled.div`
  padding: 28px 0px;
`;

const Bottomdiv = styled.div`
  height: 25vh;
  padding: 0px 60px;
  text-align: center;
`;

export default Login;
