import React, { useEffect, useRef } from "react";
import { Button, Text, Title } from "../elements";
import { useNavigate } from "react-router";
import styled from "styled-components";
import lottie from "lottie-web";
import { useDispatch } from "react-redux";

const MainTop = props => {
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
      animationData: require("../faceAnimation.json"),
    });

    lottie.loadAnimation({
      container: bubbleLottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../bookAnimation.json"),
    });
  }, [dispatch]);

  return (
    <div style={{ padding: "0 26px 44px 26px" }}>
      <Title _fontSize="24px" _padding="20px 0 12px 0">
        <div>
          Express yourself
          <LottieBox style={{ verticalAlign: "middle" }} ref={faceLottie} />
        </div>
        <div>
          with what you
          <LottieBox style={{ verticalAlign: "middle" }} ref={bubbleLottie} />
          read.
        </div>
      </Title>
      <Text _color="#505866" _fontSize="14px" _padding="0 0 24px 0">
        내가 읽은 것들로 나를 표현하는 공간, 버블드
      </Text>
      <Button
        _width="102px"
        _padding="7px 10px"
        _fontSize="12px"
        bgColor=""
        _color="#383838"
        isBorder="true"
        borderRadius="5px"
        _onClick={() => {
          navigate("/login");
        }}
      >
        내 버블드 만들기
      </Button>
    </div>
  );
};

const LottieBox = styled.span`
  padding: 0px 8px;
  & svg {
    width: 30px !important;
    height: 30px !important;
  }
`;

export default MainTop;
