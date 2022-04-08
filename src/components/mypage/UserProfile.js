import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import styled from "styled-components";
import { Title, Text } from "../../elements";
import { Circle } from "../../elements/ImageObj";

const UserProfile = props => {
  const { userInfo, memberId, isTablet } = props;
  const navigate = useNavigate();
  const params = useParams();
  const [myOwnPage, setMyOwnPage] = useState(false);

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId, params.id]);

  const goEditProfile = () => {
    navigate("/editprofile", { state: { memberId } });
  };

  return (
    <React.Fragment>
      <ProfileBox isTablet={isTablet}>
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <Title>{userInfo.memberName}</Title>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
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

const ProfileBox = styled.div`
  width: 100vw;
  height: 150px;
  ${({ isTablet }) =>
    isTablet
      ? `
  padding-left: 38px;
 `
      : `
 `}
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
