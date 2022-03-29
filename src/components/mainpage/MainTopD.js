// import { useRef, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { Button, Image, Text, Title } from "../../elements";

// import styled from "styled-components";
// import lottie from "lottie-web";


const MainTopD = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

//   const faceLottie = useRef();
//   const bubbleLottie = useRef();

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: faceLottie.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: require("../../faceAnimation.json"),
//     });

//     lottie.loadAnimation({
//       container: bubbleLottie.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: require("../../bookAnimation.json"),
//     });
//   }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#fafbfb" }}>
      <div
        style={{
          margin: "0 auto 0 auto",
          display: "flex",
          width: "1220px",
          padding: "315px 0 300px 0",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            width: "80%",
            justifyContent: "start",
          }}
        >
          <Title _fontSize="47px" _padding="0 0 40px 0">
            {/* <div>
              Express yourself
              <LottieBox style={{ verticalAlign: "middle" }} ref={faceLottie} />
            </div>
            <div>
              with what you
              <LottieBox style={{ verticalAlign: "middle" }} ref={bubbleLottie} />
              read.
            </div> */}
            <div style={{ marginBottom: "-10px" }}>
              Express yourself with
              <span style={{ verticalAlign: "middle" }}>
                <Image _src="/images/emoji1.png" _width="75px" _height="75px" />
              </span>
            </div>
            <div>
              what you
              <span style={{ verticalAlign: "middle" }}>
                <Image _src="/images/emoji2.png" _width="73px" _height="73px" />
              </span>
              read.
            </div>
          </Title>
          <Text _color="#505866" _fontSize="26px" _padding="0 0 52px 0">
            내가 읽은 것들로 나를 표현하는 공간, 버블드
          </Text>
          <Button
            _width="131px"
            _padding="10px 16px"
            _fontSize="14.5px"
            bgColor="#ffffff"
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
        <div
          style={{
            flexDirection: "column",
            width: "20%",
            justifyContent: "end",
          }}
        >
          이미지 들어갈 곳
        </div>
      </div>
    </div>
  );
};

export default MainTopD;
