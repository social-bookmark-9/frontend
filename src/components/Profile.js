import React from "react";
import styled from "styled-components";
import Title from "../elements/Title";
import Text from "../elements/Text";
import { Circle } from "../elements/ImageObj";

const Profile = props => {
  return (
    <React.Fragment>
      <ProfileBox>
        {/*  그거... 동그라미 */}
        <CircleBox>
          <Circle _width="28px" _height="28px" bgColor="black" />
        </CircleBox>
        <ProfileHead>
          <ProfileImage>
            <img
              src="https://bennettfeely.com/clippy/pics/pittsburgh.jpg"
              alt="profile"
            />
          </ProfileImage>
          <PropfileInfo>
            <Title>김철수</Title>
            <Text _fontSize="13px" _padding="8px 0px">
              글쓰는 UX디자이너
            </Text>
          </PropfileInfo>
        </ProfileHead>
      </ProfileBox>

      {/* 마법의 svg */}

      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <ellipse cx="44" cy="106" rx="44.78" ry="44" />
            <ellipse cx="108" cy="106" rx="44.78" ry="44" />
            <ellipse cx="44" cy="44" rx="44.78" ry="44" />
            <ellipse cx="108" cy="44" rx="44.78" ry="44" />
          </clipPath>
        </defs>
      </svg>
    </React.Fragment>
  );
};

const ProfileBox = styled.div`
  width: 100vw;
  height: 150px;
  position: relative;
`;

const ProfileHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.div`
  height: 150px;
  width: 156.34px;
  left: -19px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #c4c4c4;
  z-index: -1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const PropfileInfo = styled.div`
  padding-left: 30px;
`;

const CircleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 115px;
`;

export default Profile;
