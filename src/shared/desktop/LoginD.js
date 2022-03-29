import React from "react";
import { KAKAO_AUTH_URL } from "../../shared/OAuth";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Button, Title, Text, Image } from "../../elements";

// import { useSelector } from "react-redux";

const LoginD = () => {
  return (
    <React.Fragment>
      <BaseDiv>
        <LoginBox>
          <Topdiv>
            <Image
              _src="/images/bubbled.png"
              _width="65px"
              _height="52px"
              _marginR="0px"
            />
            <TitleBox>
              <Title
                textAlign="left"
                _fontSize={({ theme }) => theme.fontSizes.font34}
                _lineHeight="41px"
              >
                Express yourself <br />
                with what you read
              </Title>
              <Text
                textAlign="left"
                _padding="22px 0px"
                _fontSize={({ theme }) => theme.fontSizes.font18}
                _lineHeight="22px"
              >
                내가 읽은 것들로 나를 표현하는 공간, 버블드
              </Text>
            </TitleBox>
          </Topdiv>
          <Bottomdiv>
            <a href={KAKAO_AUTH_URL}>
              <Button
                _padding="19px 0px"
                bgColor={({ theme }) => theme.colors.kakao}
                _color="#381E1F"
                _fontSize={({ theme }) => theme.fontSizes.font14}
                borderRadius="3px"
                _width="547px"
              >
                <img src="/images/kakao.png" width={20} height={17} alt="kakao" />
                카카오로 로그인
              </Button>
            </a>
          </Bottomdiv>
        </LoginBox>
      </BaseDiv>
    </React.Fragment>
  );
};

// 스타일드 컴포넌트 작성 위치

const BaseDiv = styled.div`
  width: 100%;
  background-color: #c4c4c4;
  display: inline-block;
  text-align: right;
`;

const LoginBox = styled.div`
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

const Bottomdiv = styled.div`
  height: 25vh;
  text-align: left;
`;

export default LoginD;
