import React from "react";
import styled from "styled-components";
import { Title } from "../../elements";

const MyReviewListD = props => {
  const { reviewList } = props;

  return (
    <React.Fragment>
      <Title
        _fontSize={({ theme }) => theme.fontSizes.font20}
        _lineHeight="28px"
        _padding="14px 0 0 20px"
      >
        내가 작성한 리뷰
      </Title>
      <Container>
        {reviewList &&
          reviewList.map((memo, idx) => (
            <div key={idx}>
              {idx !== 0 && idx % 3 === 0 ? <Hr /> : null}
              <ReviewContainer>
                <TopDiv>
                  <div
                    style={{
                      display: "flex",
                      width: "70%",
                      justifyContent: "start",
                    }}
                  >
                    <Title
                      _fontSize={({ theme }) => theme.fontSizes.font18}
                      _lineHeight="24px"
                    >
                      {memo.titleOg}
                    </Title>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "30%",
                      justifyContent: "end",
                    }}
                  >
                    {memo.reviewHide ? (
                      <img
                        src="./images/hide.webp"
                        alt=""
                        style={{ float: "right", width: "25px" }}
                      />
                    ) : (
                      <img
                        src="./images/show.webp"
                        alt=""
                        style={{ float: "right", width: "25px" }}
                      />
                    )}
                  </div>
                </TopDiv>

                <Content>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontSize: "13px",
                    }}
                  >
                    {memo.review}
                  </div>
                </Content>
              </ReviewContainer>
            </div>
          ))}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 0 0 0;
`;

const ReviewContainer = styled.div`
  width: 100%;
  padding: 20px 15px 20px 15px;
`;

const TopDiv = styled.div`
  display: flex;
  margin: 0 10px 16px 5px;
  align-items: center;
  height: 60px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 26.5px 0 26.5px;
  border-radius: 8px;
  background-color: #f2f4f6;
`;
const Hr = styled.hr`
  width: 100vw;
  position: absolute;
  border: none;
  height: 1px;
  color: #f2f4f6;
  background-color: #f2f4f6;
`;

export default MyReviewListD;
