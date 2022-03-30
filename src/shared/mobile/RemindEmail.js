import React,{ useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Button, Image, Text, Title } from "../../elements";
import { useDispatch } from "react-redux";
import { editReminderEmailAxios } from "../../redux/modules/Profile";


const RemindEmail = props => {
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const handleRemindEmail = () => {
    const remindEmail = {"email" : emailRef.current.value}
    dispatch(editReminderEmailAxios(remindEmail));
  }

  return (
    <React.Fragment>
      <RemindContainer>
        <KeyframeBox>
          <KeyframeTitleBox>
            <FrameTitle>42.1%</FrameTitle>
            <Title
              _lineHeight="28px"
              _color={({ theme }) => theme.colors.white}
            >
              아티클을 저장하는 사람은 94%지만
              <br />
              아티클을 자주 확인하는 비율은
              <br />
              42%밖에 되지않습니다.
            </Title>
          </KeyframeTitleBox>
          <ReKeyframeTitleBox>
            <FrameTitle>RE</FrameTitle>
            <Title
              _lineHeight="28px"
              _color={({ theme }) => theme.colors.white}
            >
              아티클을 내 것으로 만들기 위해서는
              <br />
              지속적인 리마인드가 필요합니다.
            </Title>
          </ReKeyframeTitleBox>
          <KeyframeTipBox>
            <TipTitle>
              <Image
                _src="/images/DesktopMain1.png"
                _width="16px"
                _height="16px"
              />
              <TipText>Tip!</TipText>
            </TipTitle>
            <Text _padding="0 0 11px 0">
              카카오 메일을 입력하면 메일 도착 알림톡을 받을 수 있어요
            </Text>
            <Text>
              잘 사용하지 않는 메일을 아티클/뉴스레터 수신 전용 메일로
              <br />
              사용해보는건 어떨까요?
            </Text>
          </KeyframeTipBox>
        </KeyframeBox>
        <EmailInputBox>
          <Title _lineHeight="28px">리마인드 수신 메일</Title>
          <EmailInput ref={emailRef} type="text" placeholder="bubbled@bubbled.com" />
          <Button _fontSize="14px" _padding="15px 0px" _onClick={handleRemindEmail} >
            저장
          </Button>
        </EmailInputBox>
      </RemindContainer>
    </React.Fragment>
  );
};

const textAnimation = keyframes`
0% {
    opacity: 0;
}
10% {
    opacity: 0.5;
}
20% {
    opacity: 1;
}
30% {
    opacity: 0.5;
}
40% {
    opacity: 0;
}
60% {
    opacity: 0;
}
80% {
    opacity: 0;
}
100% {
    opacity: 0;
}
`;

const reTextAnimation = keyframes`
0% {
    opacity: 0;
}
20% {
    opacity: 0;
}
40% {
    opacity: 0;
}
55% {
opacity: 0;
}
65%{
opacity: 0.5;
}
75% {
    opacity: 1;
}
85% {
    opacity: 0.5;
}
100% {
    opacity: 0;
}
`;

const RemindContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const KeyframeBox = styled.div`
  padding: 81px 36px 32px 36px;
  background: ${({ theme }) => theme.colors.pointPurple02};
`;

const KeyframeTitleBox = styled.div`
  height: 200px;
  position: relative;
  animation: ${textAnimation} 8s linear infinite;
`;

const ReKeyframeTitleBox = styled.div`
  height: 200px;
  position: absolute;
  top: 81px;
  animation: ${reTextAnimation} 8s linear infinite;
`;

const FrameTitle = styled.div`
  font-size: 60px;
  font-weight: 800;
  line-height: 30px;
  letter-spacing: -0.0008em;
  text-align: left;
  color: rgba(210, 214, 218, 0.54);
  opacity: 0.6;
`;

const KeyframeTipBox = styled.div`
  & p {
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.0008em;
    color: #ffffff;
    opacity: 0.6;
  }
`;

const TipTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px 0px;
`;

const TipText = styled.h5`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.0008em;
  color: ${({ theme }) => theme.colors.white};
`;

const EmailInputBox = styled.div`
  padding: 44px 28px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #e5e8ec;
  border-radius: 5px;
  padding: 13px 26px;
  margin: 11px 0px;
`;

export default RemindEmail;
