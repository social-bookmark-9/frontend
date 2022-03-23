import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import styled from "styled-components";
import { Title, Text } from "../elements";
import { Circle } from "../elements/ImageObj";

const UserProfile = props => {
  const { userInfo, memberId } = props;
  const navigate = useNavigate();

  const [myOwnPage, setMyOwnPage] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId]);

  const goEditProfile = () => {
    navigate("/editprofile", {state: {memberId}});
  }
  
  return (
    <React.Fragment>
      {/* <Desktop>
        <DProfileBox>
          <ProfileHead>
            <DProfileImage>
              <img src={profileImage} alt="profile" />
            </DProfileImage>
            <DCircleBox>
              <Circle _width="28px" _height="28px" bgColor="black" />
            </DCircleBox>
            <DPropfileInfo>
              <Title>{nickname}</Title>
              <Text _fontSize="13px" _padding="8px 0px">
                {userDesc}
              </Text>
            </DPropfileInfo>
          </ProfileHead>
        </DProfileBox>
      </Desktop>
      <Tablet>
        <ProfileBox>
          <ProfileHead>
            <ProfileImage>
              <img src={profileImage} alt="profile" />
            </ProfileImage>
            <CircleBox>
              <Circle _width="28px" _height="28px" bgColor="black" />
            </CircleBox>
            <PropfileInfo>
              <Title>{nickname}</Title>
              <Text _fontSize="13px" _padding="8px 0px">
                {userDesc}
              </Text>
            </PropfileInfo>
          </ProfileHead>
        </ProfileBox>
      </Tablet> */}
      <ProfileBox>
        <ProfileHead>
          <ProfileImage>
            <img src={userInfo.profileImage} alt="profile" />
          </ProfileImage>
          <CircleBox>
            <Circle _width="28px" _height="28px" bgColor="black" />
          </CircleBox>
          <PropfileInfo>
            {myOwnPage ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onClick={goEditProfile}
            >
              <div style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}>
                <Title>{userInfo.memberName}</Title>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                marginLeft: "5px"
              }}>
                <img
                  src={`/images/edit.png`}
                  width={"20px"}
                  height={"20px"}
                  alt=""
                />
              </div>
            </div>
            ) : (
              <Title>{userInfo.memberName}</Title>
            )}
            <Text _fontSize="13px" _padding="8px 0px">
              {userInfo.memberComment}
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

// const DProfileBox = styled.div`
//   padding-bottom: 28px;

//   position: relative;
// `;

// const DProfileImage = styled.div`
//   height: 150px;
//   width: 156.34px;
//   clip-path: url(#myClip);
//   position: relative;
//   background-color: #c4c4c4;
//   z-index: -1;
//   & img {
//     position: absolute;
//     width: 100%;
//   }
// `;

// const DCircleBox = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 134px;
// `;

// const DPropfileInfo = styled.div`
//   padding: 50px;
// `;

const ProfileBox = styled.div`
  width: 100vw;
  height: 150px;
`;

const ProfileHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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

export default UserProfile;