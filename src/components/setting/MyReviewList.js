import React from "react";
import styled from "styled-components";
import { Title } from "../../elements";

const MyReviewList = (props) => {
  const {reviewList} = props;

  return (
    <React.Fragment>
      {reviewList && reviewList.map((memo, idx) => (
        <div key={idx}>
          <Container>
            <div
              style={{
                display: "flex",
                margin: "0 10px 16px 5px",
                alignItems: "center",
              }}
            >
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
              style={{ display: "flex", width: "30%", justifyContent: "end" }}
            >
              {memo.reviewHide ? (
                <img
                  src="./images/hide.png"
                  alt=""
                  style={{ float: "right", width: "25px" }}
                />
              ) : (
                <img
                  src="./images/show.png"
                  alt=""
                  style={{ float: "right", width: "25px" }}
                />
              )}
            </div>
            </div>
            
            <Content>
              <div
                style={{ width: "100%", textAlign: "center", fontSize: "13px" }}
              >
                {memo.review}
              </div>
            </Content>
          </Container>
          <Hr />
        </div>
      ))}
    </React.Fragment>
  );

};

const Container = styled.div`
  width: 100%;
  padding: 20px 15px 20px 15px;
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
  width: 100%;
  border: none;
  height: 1px;
  color: #f2f4f6;
  background-color: #f2f4f6;
`;

export default MyReviewList;