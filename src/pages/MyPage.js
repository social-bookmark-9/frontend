import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../elements/Title";
import { motion } from "framer-motion";
import Button from "../elements/Button";

const MyPage = props => {

  return (
    <React.Fragment>
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
        </Title>
        <img src="/images/menu.png" alt="menu" width="24px" height="24px" />
      </div>

      {/* 프로필+이름 부분 */}
      <Profile>
        {/*  그거... 동그라미 */}
        <div
          style={{
            width: "28px",
            height: "28px",
            backgroundColor: "#000000",
            position: "absolute",
            left: "119.57px",
            top: "118px",
            borderRadius: "14px",
            zIndex: "2"
          }}
        ></div>
          
        <div style={{ width: "178px", marginTop:"14px", float:"left" }}>
          <ProfileImage>
            <img src="https://bennettfeely.com/clippy/pics/pittsburgh.jpg" alt=""
              style={{
                maxWidth: "100%",
                display: "block"
              }}
            />
          </ProfileImage>
        </div>
        <div style={{ width: "212px", paddingTop:"50px", float:"right"}}>
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font18}
            _subtitleSize={({ theme }) => theme.fontSizes.font14}
            lineHeight="24px"
          >
            <h1 style={{ color: "#353c49" }}>
              김철수
            </h1>
            <p>글쓰는 UX디자이너</p>
          </Title>
        </div>
      </Profile>

      {/* 큐레이션 부분 */}
      <div style={{
        padding: "0px 16px",
      }}>
      <div style={{ width: "212px", paddingTop:"0px"}}>
          <Title
            _titleSize={({ theme }) => theme.fontSizes.font18}
            _subtitleSize={({ theme }) => theme.fontSizes.font14}
            lineHeight="24px"
          >
            <h1 style={{ color: "#000000", marginBottom:"20px" }}>
              김철수님의 큐레이션
            </h1>
          </Title>
        </div>
      
        <CurationBox>
          <div style={{ position: "absolute", top: "52px", right: "28px" }}>
            <img
              src="/images/recommendCnt.png"
              alt="recommendCnt"
              width="61px"
              height="26px"
            />
          </div>
          
          <div style={{ width: "270px", position: "absolute" }}>
            <div style={{ display: "flex", paddingBottom: "8px", color: "#4eb0ab" }}>
              <div>커리어</div>
              <div>디자인</div>
            </div>
            <Title
              _titleSize={({ theme }) => theme.fontSizes.font18}
              _subtitleSize={({ theme }) => theme.fontSizes.font14}
              lineHeight="24px"
            >
              <h1 style={{ color: "#4eb0ab" }}>
                UXUI 초보를 위한 아티클
              </h1>
              
              <p
                style={{
                  paddingTop: "50px",
                  color: "#4eb0ab",
                  opacity: 0.6,
                  lineHeight: "18px",
                }}
              >
                카드스와이프 들어갈 부분
              </p>
            </Title>
          </div>
        </CurationBox>
        <CurationBox2>
          <div style={{ position: "absolute", top: "52px", right: "28px" }}>
            <img
              src="/images/recommendCnt.png"
              alt="recommendCnt"
              width="61px"
              height="26px"
            />
          </div>
          
          <div style={{ width: "270px", position: "absolute" }}>
            <div style={{ display: "flex", paddingBottom: "8px", color: "#7881f5" }}>
              <div>커리어</div>
              <div>디자인</div>
            </div>
            <Title
              _titleSize={({ theme }) => theme.fontSizes.font18}
              _subtitleSize={({ theme }) => theme.fontSizes.font14}
              lineHeight="24px"
            >
              <h1 style={{ color: "#7881f5" }}>
                UXUI 초보를 위한 아티클
              </h1>
              
              <p
                style={{
                  paddingTop: "50px",
                  color: "#7881f5",
                  opacity: 0.6,
                  lineHeight: "18px",
                }}
              >
                카드스와이프 들어갈 부분
              </p>
            </Title>
          </div>
        </CurationBox2>
        <MakeBubble>
          <div style={{ width: "270px", position: "absolute" }}>
            <Title
              _titleSize={({ theme }) => theme.fontSizes.font18}
              _subtitleSize={({ theme }) => theme.fontSizes.font14}
              lineHeight="24px"
            >
              <h1 style={{ color: "#ffffff" }}>
                철수님의 큐레이션이 유용하셨나요?
              </h1>
              
              <p
                style={{
                  paddingTop: "8px",
                  color: "#ffffff",
                  opacity: 0.6,
                  lineHeight: "18px",
                  marginBottom: "32px"
                }}
              >
                크롬 사용자라면 버튼 클릭 한번으로...
              </p>
            </Title>
            <Button
              isBorder
              width="105.05px"
              height="32px"
              bgColor="#ffffff"
              _color="#383838"
              _fontSize="11.84px"
              name="내 버블드 만들기"
            />
          </div>
        </MakeBubble>
      </div>



      {/* 마법의 svg */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <ellipse cx="44.78" cy="106" rx="44.78" ry="44" />
            <ellipse cx="111.56" cy="106" rx="44.78" ry="44" />
            <ellipse cx="44.78" cy="44" rx="44.78" ry="44" />
            <ellipse cx="111.56" cy="44" rx="44.78" ry="44" />
          </clipPath>
        </defs>
      </svg>
    </React.Fragment>
  );
};

const Profile = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 36px;
  position: relative;
`;

const ProfileImage = styled.div`
  height: 150px;
  width: 156.34px;
  left: -19px;
  top: -18px;
  clip-path: url(#myClip);
  position: relative;
`;

const CurationBox = styled.div`
  width: 100%;
  height: 290px;
  background-color: #daf8f1;
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
`;

const CurationBox2 = styled(CurationBox)`
  background-color: #E7E8FA;
`;

const MakeBubble = styled(CurationBox)`
  height: 194px;
  background-color: #383838;
`;


export default MyPage;
