// import { useNavigate } from "react-router";
import Button from "../elements/Button";
import Title from "../elements/Title";
import styled from "styled-components";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL } from "../shared/OAuth";

const Login = () => {
  // const navigate = useNavigate();
  // const nextStep = () => {
  //   navigate('/registerFirst')
  // }
  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  return (
    <LoginBox>
      <Topdiv>
        <Title
          textAlign="center"
          padding="153px 0px"
          _fontSize={({ theme }) => theme.fontSizes.font28}
          lineHeight="36px"
        >
          <h1>
            문구 영역만
            <br />
            잡아주세요
          </h1>
        </Title>
      </Topdiv>
      <Bottomdiv>
        <a href={KAKAO_AUTH_URL}>
          <Button
            name="카카오로 로그인"
            width="270px"
            height="43px"
            margin="8px auto"
            bgColor={({ theme }) => theme.colors.kakao}
            _color={({ theme }) => theme.colors.fontColor04}
            _fontSize={({ theme }) => theme.fontSizes.font12}
          />
        </a>
        <a href={GOOGLE_AUTH_URL}>
          <Button
            isBorder
            name={"구글로 로그인"}
            width="270px"
            height="43px"
            margin="8px auto"
            bgColor={({ theme }) => theme.colors.white}
            _color={({ theme }) => theme.colors.fontColor04}
            _fontSize={({ theme }) => theme.fontSizes.font12}
          />
        </a>
      </Bottomdiv>
    </LoginBox>
  );
};

// 스타일드 컴포넌트 작성 위치
const LoginBox = styled.div`
  width: 100%;
`;

const Topdiv = styled.div`
  height: 60vh;
`;

const Bottomdiv = styled.div`
  height: 40vh;
  text-align: center;
`;

export default Login;
