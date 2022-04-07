import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Text, Title } from "../../elements";
// import SearchBoxD from "./SearchBoxD";

const MainPageFooterD = props => {
  const { isLogin, memberId } = props;
  const navigate = useNavigate();

  const onMypage = () => {
    if (isLogin) {
      navigate(`/mypage/${memberId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <FooterSearcher>{/* <SearchBoxD /> */}</FooterSearcher>
      {isLogin ? (
        <FooterViolet>
          <FooterContainer>
            <LeftFloatDiv>
              <Title
                _fontSize="28px"
                _lineHeight="38px"
                _color="#FFFFFF"
                _padding="103px 0 16px 0"
              >
                <div>저장한 글, 다시 읽고 계신가요?</div>
              </Title>

              <Text _fontSize="24px" _lineHeight="38px">
                3번은 읽어야 완전한 내것이 될 수 있어요.
              </Text>
              <Text _fontSize="24px" _lineHeight="38px">
                저장한 글을 리마인드 해드릴게요.
              </Text>
              <div style={{ margin: "54px 0" }}>
                <Button
                  _width="166px"
                  _padding="18px 24px"
                  bgColor="#FFFFFF"
                  _color="#383838"
                  _fontSize="21px"
                  bold="true"
                >
                  리마인드 받기
                </Button>
              </div>
            </LeftFloatDiv>
            <RightFloatDiv>
              <div style={{ padding: "50px 0 0 0" }}>
                <img src="/images/MainDLogin.png" width="319px" alt="" />
              </div>
            </RightFloatDiv>
          </FooterContainer>
        </FooterViolet>
      ) : (
        <FooterViolet>
          <FooterContainer>
            <LeftFloatDiv>
              <Title
                _fontSize="28px"
                _lineHeight="38px"
                _color="#FFFFFF"
                _padding="103px 0 16px 0"
              >
                <div>큐레이션이 유용하셨나요?</div>
              </Title>

              <Text _fontSize="24px" _lineHeight="38px">
                크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해
              </Text>
              <Text _fontSize="24px" _lineHeight="38px">
                나만의 큐레이션을 만들고 공유할 수 있어요
              </Text>
              <div style={{ margin: "54px 0" }}>
                <Button
                  _width="190px"
                  _padding="18px 24px"
                  bgColor="#FFFFFF"
                  _color="#383838"
                  _fontSize="21px"
                  bold="true"
                  _onClick={() => navigate("/login")}
                >
                  내 버블드 만들기
                </Button>
              </div>
            </LeftFloatDiv>
            <RightFloatDiv>
              <div style={{ padding: "50px 0 0 0" }}>
                <img src="/images/MainDNoLogin.png" width="319px" alt="" />
              </div>
            </RightFloatDiv>
          </FooterContainer>
        </FooterViolet>
      )}
      <div
        style={{
          width: "100%",
          height: "284px",
          backgroundColor: "#353C49",
        }}
      >
        <FooterContainer>
          <LeftFloatDiv>
            <div style={{ paddingTop: "102px" }}>
              <img src="/images/bubbledBanner.png" width="223px" alt="" />
            </div>
            <Text _fontSize="14px" _lineHeight="18px">
              내가 읽은 것으로 나를 표현하는 공간, 버블드
            </Text>
          </LeftFloatDiv>
          <RightFloatDiv>
            <FooterMenu>
              <div onClick={onMypage}>마이페이지</div>
              <div>공지사항</div>
              <div>홈 피드</div>
              <div>버블드 팀 소개</div>
              <div>내가 작성한 메모</div>
              <div>버블드 인스타그램</div>
              <div>설정</div>
              <div>버그제보</div>
            </FooterMenu>
          </RightFloatDiv>
        </FooterContainer>
      </div>
    </>
  );
};

const FooterContainer = styled.div`
  margin: 0 auto 184px auto;
  display: flex;
  width: 1220px;
`;

const FooterSearcher = styled(FooterContainer)`
  margin: 0 auto 128px auto;
  border-radius: 20px;
  background-color: #353c49;
`;

const LeftFloatDiv = styled.div`
  flex-direction: column;
  min-width: 40%;
  justify-content: start;
  color: #ffffff;
`;

const RightFloatDiv = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 60%;
  justify-content: end;
  text-align: right;
`;

const FooterViolet = styled.div`
  width: 100%;
  height: 446px;
  background-color: #7881f5;
`;

const FooterMenu = styled.div`
  float: right;
  text-align: left;
  display: grid;
  padding: 69px 0 0 0;
  grid-template-columns: 190px 190px;
  color: #ffffff;
  opacity: 0.6;
  font-size: 18px;
  line-height: 22px;
  gap: 18px;
`;

export default MainPageFooterD;
