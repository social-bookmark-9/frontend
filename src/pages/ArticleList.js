import React from "react";
import styled from "styled-components";
import Title from "../elements/Title";

const ArticleList = props => {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "14px 22px",
          }}
        >
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font20}
            lineHeight="24px"
            _subtitleSize={({ theme }) => theme.fontSizes.font14}
          >
            <h1>아티클 폴더 이름</h1>
            <p style={{ paddingTop: "14px" }}>24명이 도움을 받았어요</p>
          </Title>
          <img src="/images/menu.png" alt="menu" width="24px" height="24px" />
        </div>
        <div
          style={{
            padding: "0px 16px",
            color: "#ffffff",
          }}
        >
          {/* 사진이 없는 아티클 경우 - 타유저 */}
          <div
            style={{
              width: "100%",
              height: "240px",
              backgroundColor: "#505866",
              borderRadius: "20px",
              padding: "28px",
              marginBottom: "16px",
              position: "relative",
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
            <div
              style={{ display: "flex", position: "absolute", top: "37.5%" }}
            >
              <div>커리어</div>
              <div>디자인</div>
            </div>
            <div
              style={{ width: "270px", position: "absolute", bottom: "28px" }}
            >
              <Title
                _titleSize={({ theme }) => theme.fontSizes.font18}
                _subtitleSize={({ theme }) => theme.fontSizes.font14}
                lineHeight="24px"
              >
                <h1 style={{ color: "#ffffff" }}>
                  Redux Toolkit을 사용하여 간단하게 상태 관리하기 | 기억보다
                  기록을
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
          </div>
          <div
            style={{
              width: "350px",
              height: "202px",
              backgroundColor: "#505866",
              borderRadius: "20px 20px 80px 20px",
              position: "relative",
              marginBottom: "16px",
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
          </div>
          <div
            style={{
              width: "350px",
              height: "288px",
              backgroundColor: "#505866",
              borderRadius: "20px",
              marginBottom: "16px",
            }}
          ></div>
          <div
            style={{
              width: "350px",
              height: "288px",
              backgroundColor: "#505866",
              borderRadius: "20px 20px 80px 20px",
              position: "relative",
              marginBottom: "16px",
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleList;
