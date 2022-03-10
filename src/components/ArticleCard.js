import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import DesignObj from "../elements/DesignObj";
import Label from "../elements/Label";

import Title from "../elements/Title";

const ArticleCard = props => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* 사진이 없는 아티클 경우 - 읽기 전 */}
      <DefaultArticle
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
            <div>커리어</div>
            <div>디자인</div>
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
      </DefaultArticle>
      {/* 사진이 있는 아티클 경우 - 읽은 후 */}
      <ImageArticle
        onClick={() => {
          navigate("/article");
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            backgroundColor: "#353C49",
            position: "absolute",
            right: "0px",
            bottom: "0px",
            borderRadius: "11px",
          }}
        ></div>
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
            <div>커리어</div>
            <div>디자인</div>
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
                paddingTop: "8px",
                color: "#ffffff",
                opacity: 0.6,
                lineHeight: "18px",
              }}
            >
              Redux Toolkit을 사용하여 간단하게 상태 관리하기...
            </p>
          </Title>
        </div>
      </ImageArticle>
      {/* 사진이 없는 아티클 경우 - 내 아티클 리스트 */}
      <DefaultArticle
        onClick={() => {
          navigate("/article");
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DesignObj />
          <Label _label="big" text="안 읽은지 7일째.." />
        </div>

        <div style={{ width: "270px", position: "absolute", bottom: "28px" }}>
          <div style={{ display: "flex", paddingBottom: "8px" }}>
            <Label text="커리어" />
            <Label text="디자인" />
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
      </DefaultArticle>
    </React.Fragment>
  );
};

const DefaultArticle = styled.div`
  width: 100%;
  height: 240px;
  background-color: #505866;
  border-radius: 20px; //isread? "20 20 80 20" : "20"
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
`;

const ImageArticle = styled.div`
  width: 100%;
  height: 288px;
  border-radius: 20px 20px 80px 20px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
  background-color: #505866;
  background: rgba(0, 0, 0, 0.26)
    url(https://user-images.githubusercontent.com/37766175/62363267-f219ba80-b559-11e9-9943-855d42b2fc11.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
`;

ArticleCard.defaultProps = {
  height: "240px",
  isRead: false,
  isImage: false,
};

export default ArticleCard;
