import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

import Title from "../elements/Title";

const ArticleCard = props => {
  const navigate = useNavigate();
  const [isImage, setIsImage] = useState(false);

  if (isImage) {
    return (
      <React.Fragment>
        {/* 사진이 있는 아티클 경우 - 읽기 전 */}
        <ImageArticle
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
          <div style={{}}></div>
          <div style={{ display: "flex", position: "absolute", top: "37.5%" }}>
            <div>커리어</div>
            <div>IT</div>
          </div>
          <div style={{ width: "270px", position: "absolute", bottom: "28px" }}>
            <Title
              _titleSize={({ theme }) => theme.fontSizes.font18}
              _subtitleSize={({ theme }) => theme.fontSizes.font14}
              lineHeight="24px"
            >
              <h1 style={{ color: "#ffffff" }}>
                React.memo() 현명하게 사용하기
              </h1>
              <p
                style={{
                  paddingTop: "8px",
                  color: "#ffffff",
                  opacity: 0.6,
                  lineHeight: "18px",
                }}
              >
                유저들은 반응이 빠른 UI를 선호한다. 100ms 미만의 UI 응답...
              </p>
            </Title>
          </div>
        </ImageArticle>
      </React.Fragment>
    );
  }

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
