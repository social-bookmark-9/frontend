import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Title from "../elements/Title";
import Label from "../elements/Label";

const RecommendArticle = props => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* 사진이 없는 아티클 경우 - 읽기 전 */}
      <DefaultRecommend
        onClick={() => {
          navigate("/article");
        }}
      >
        <div style={{ position: "absolute", top: "28px", right: "28px" }}>
          <img
            src="/images/bookmarkOff.png"
            alt="bookmark"
            width="24px"
            height="24px"
          />
        </div>

        <div style={{ width: "270px", position: "absolute", bottom: "28px" }}>
          <div style={{ display: "flex", paddingBottom: "8px" }}>
            <Label text="커리어" />
            <Label text="디자인" />
            <Label text="IT" />
          </div>
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font18}
            _subtitleSize={({ theme }) => theme.fontSizes.font13}
            lineHeight="24px"
          >
            <h1 style={{ color: "#ffffff" }}>
              Redux Toolkit을 사용하여 간단하게 상태 관리하기 | 기억보다 기록을
            </h1>
            <p
              style={{
                color: "#ffffff",
                opacity: 0.6,
                lineHeight: "18px",
                paddingTop: "8px",
              }}
            >
              Redux Toolkit을 사용하여 간단하게 상태 관리하기...
            </p>
          </Title>
        </div>
      </DefaultRecommend>
      <ImageRecommend
        onClick={() => {
          navigate("/article");
        }}
      >
        <div style={{ position: "absolute", top: "28px", right: "28px" }}>
          <img
            src="/images/bookmarkOn.png"
            alt="bookmark"
            width="24px"
            height="24px"
          />
        </div>
        <div style={{ width: "270px", position: "absolute", bottom: "28px" }}>
          <div style={{ display: "flex", paddingBottom: "8px" }}>
            <Label>커리어</Label>
            <Label>디자인</Label>
          </div>
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font18}
            _subtitleSize={({ theme }) => theme.fontSizes.font14}
            lineHeight="24px"
          >
            <h1 style={{ color: "#ffffff" }}>
              Redux Toolkit을 사용하여 간단하게 상태 관리하기 | 기억보다 기록을
            </h1>
            <p
              style={{
                color: "#ffffff",
                opacity: 0.6,
                lineHeight: "18px",
                paddingTop: "8px",
              }}
            >
              Redux Toolkit을 사용하여 간단하게 상태 관리하기...
            </p>
          </Title>
        </div>
      </ImageRecommend>
    </React.Fragment>
  );
};

const DefaultRecommend = styled.div`
  width: 100%;
  height: 202px;
  background-color: #505866;
  color: #ffffff;
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
`;

const ImageRecommend = styled.div`
  width: 100%;
  height: 202px;
  background-color: #505866;
  color: #ffffff;
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;

  background: rgba(0, 0, 0, 0.26)
    url(https://user-images.githubusercontent.com/37766175/62363267-f219ba80-b559-11e9-9943-855d42b2fc11.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
`;

export default RecommendArticle;
