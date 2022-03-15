import React from "react";
import styled from "styled-components";
import Title from "../elements/Title";
import Text from "../elements/Text";
import { Circle } from "../elements/ImageObj";
import { useNavigate } from "react-router";

const NavProfile = props => {
  const { isLogin } = props;
  const navigate = useNavigate();

  const onMypage = () => {
    if (isLogin) {
      navigate("/mypage");
    } else {
      navigate("/login");
    }
  };

  return (
    <React.Fragment>
      <ProfileBox>
        {/*  그거... 동그라미 */}
        <CircleBox>
          <Circle _width="15px" _height="15px" bgColor="black" />
        </CircleBox>
        <ProfileHead>
          <ProfileImage />
          <PropfileInfo>
            {isLogin ? (
              <Title>김철수</Title>
            ) : (
              <Title
                _fontSize={({ theme }) => theme.fontSizes.font18}
                _padding="2.5px 0px"
              >
                로그인해주세요
              </Title>
            )}
            <Text
              _fontSize={({ theme }) => theme.fontSizes.font14}
              _lineHeight="18px"
              _padding="2.5px 0px"
              _onClick={onMypage}
            >
              내 버블드 가기 &#62;
            </Text>
          </PropfileInfo>
        </ProfileHead>
      </ProfileBox>
      {/* 마법의 svg */}

      <svg width="0" height="0">
        <defs>
          <clipPath id="navClip">
            <ellipse cx="26" cy="58" rx="24.94" ry="24.35" />
            <ellipse cx="61" cy="58" rx="24.94" ry="24.35" />
            <ellipse cx="26" cy="25" rx="24.94" ry="24.35" />
            <ellipse cx="61" cy="25" rx="24.94" ry="24.35" />
          </clipPath>
        </defs>
      </svg>
    </React.Fragment>
  );
};

const ProfileBox = styled.div`
  width: 100vw;
  height: 108px;
  position: relative;
  padding: 25px 0px;
`;

const ProfileHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 87.06px;
  height: 83px;
  clip-path: url(#navClip);
  background-color: #c4c4c4;
  z-index: -1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const PropfileInfo = styled.div`
  padding-left: 28px;
  & p:hover {
    cursor: pointer;
  }
`;

const CircleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 75px;
`;

export default NavProfile;