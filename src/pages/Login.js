import { useNavigate } from "react-router";
import Button from "../elements/Button";
import Title from "../elements/Title";
import styled from "styled-components";
import { KAKAO_AUTH_URL, GOOGLE_AUTH_URL, TEST_ID } from "../shared/OAuth";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const navigate = useNavigate();
  const nextStep = () => {
    navigate('/registerFirst')
  }
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <Topdiv>
        <Title text={"문구 영역만 잡기"} />
      </Topdiv>
      <Bottomdiv>
        <a href={KAKAO_AUTH_URL}>
          <Button
            name={"카카오 로그인"}
            width={"60%"}
            margin={"10px 20vw 10px 20vw"}
          />
        </a>
        <a href={GOOGLE_AUTH_URL}>
          <Button
            name={"구글 로그인"}
            width={"60%"}
            margin={"10px 20vw 10px 20vw"}
          />
        </a>
        
        {/* <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              name={"react-google-login"}
              width={"60%"}
              margin={"10px 20vw 10px 20vw"}
            />
          )}
          // buttonText="구글 로그인"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
        
      </Bottomdiv>
    </>
  )
}

// 스타일드 컴포넌트 작성 위치
const Topdiv = styled.div`
  height: 60vh;
`;

const Bottomdiv = styled.div`
  height: 40vh;
`;


export default Login;