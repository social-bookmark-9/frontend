import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Button, Image, Text } from "../../elements";

import lottie from "lottie-web";
import { FlexboxRow } from "../../styles/flexbox";

const MainTopD = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const faceLottie = useRef();
  const bubbleLottie = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: faceLottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../faceAnimation.json"),
    });

    lottie.loadAnimation({
      container: bubbleLottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../bookAnimation.json"),
    });
  }, [dispatch]);

  return (
    <Container>
      <TopBox>
        <TitleContainer>
          <TitleBox>
            <div>
              Express yourself with
              <LottieBox ref={faceLottie} />
            </div>
            <div>
              what you
              <LottieBox ref={bubbleLottie} />
              read.
            </div>
          </TitleBox>
          <Text _color="#505866" _fontSize="26px" _padding="0 0 52px 0">
            내가 읽은 것들로 나를 표현하는 공간, 버블드
          </Text>
          <Button
            _width="131px"
            _padding="10px 16px"
            _fontSize="14.5px"
            bgColor={({ theme }) => theme.colors.white}
            _color="#383838"
            bold
            _onClick={() => {
              navigate("/login");
            }}
          >
            내 버블드 만들기
          </Button>
        </TitleContainer>
        <ImageBox>
          <Image _src="/images/mainGif.gif" _width="670px" _height="434px" />
        </ImageBox>
      </TopBox>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto 0 auto;
  width: 1220px;
  background-color: ${({ theme }) => theme.colors.gray00};
`;

const TopBox = styled.div`
  ${FlexboxRow};
  align-items: center;
  padding: 240px 0 261px 0;
`;

const TitleContainer = styled.div`
  display: inline-block;
`;

const TitleBox = styled.div`
  font-size: 47px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 53px;
  letter-spacing: 0.0037em;
  text-align: left;
`;

const LottieBox = styled.span`
  padding: 0px 8px;
  vertical-align: middle;
  & svg {
    padding: 14px;
    width: 75px !important;
    height: 75px !important;
  }
`;

const ImageBox = styled.div``;

export default MainTopD;
