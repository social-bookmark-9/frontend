import styled from "styled-components";
import { Button, Text, Title } from "../../elements";

const MainPageFooterD = () => {
  return (
    <>
      <FooterSearcher>
        <LeftFloatDiv>
          <Title
            _fontSize="24px"
            _lineHeight="38px"
            _color="#FFFFFF"
            _padding="48px 0 6px 76px"
          >
            <div>찾는 아티클이 있으신가요?</div>
          </Title>
          <div
            style={{
              padding: "0 0 48px 76px",
              fontSize: "18px",
              color: "#B1B8C0",
            }}
          >
            다양한 주제의 버블 수집가를 만나보세요
          </div>
        </LeftFloatDiv>
        <RightFloatDiv>
          <input
            style={{
              height: "58px",
              width: "438px",
              fontSize: "16px",
              backgroundColor: "#FFFFFF",
              margin: "52px 40px 52px auto",
              borderRadius: "12px",
              paddingLeft: "28px",
            }}
            name="searchkeyword"
            placeholder="키워드로 검색해보세요"
          />
        </RightFloatDiv>
      </FooterSearcher>
      <div
        style={{
          width: "100%",
          height: "446px",
          backgroundColor: "#7881F5",
        }}
      >
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
            <input
              style={{
                height: "58px",
                width: "438px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                margin: "52px 40px 52px auto",
                borderRadius: "12px",
                paddingLeft: "28px",
              }}
              name="searchkeyword"
              placeholder="이미지 들어갈 자리 (인풋으로 임시 대체)"
            />
          </RightFloatDiv>
        </FooterContainer>
      </div>
      <div
        style={{
          width: "100%",
          height: "446px",
          backgroundColor: "#353C49",
        }}
      >
        <FooterContainer>
          <LeftFloatDiv>
            <Title
              _fontSize="28px"
              _lineHeight="38px"
              _color="#FFFFFF"
              _padding="103px 0 16px 0"
            >
              <div>bubbled 이미지 대신 넣기</div>
            </Title>

            <Text _fontSize="14px" _lineHeight="18px">
              내가 읽은 것으로 나를 표현하는 공간, 버블드
            </Text>
          </LeftFloatDiv>
          <RightFloatDiv>
            <input
              style={{
                height: "58px",
                width: "438px",
                fontSize: "16px",
                backgroundColor: "#FFFFFF",
                margin: "52px 40px 52px auto",
                borderRadius: "12px",
                paddingLeft: "28px",
              }}
              name="searchkeyword"
              placeholder="이미지 들어갈 자리 (인풋으로 임시 대체)"
            />
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
  background-color: #353C49;
`;

const LeftFloatDiv = styled.div`
  flex-direction: column;
  min-width: 35%;
  justify-content: start;
  color: #FFFFFF;
`;

const RightFloatDiv = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 65%;
  justify-content: end;
  text-align: right;
`;

export default MainPageFooterD;