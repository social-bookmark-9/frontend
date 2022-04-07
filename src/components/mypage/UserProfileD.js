import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Text } from "../../elements";
import { Circle } from "../../elements/ImageObj";

const UserProfileD = props => {
  const { userInfo, memberId } = props;
  const navigate = useNavigate();

  const [myOwnPage, setMyOwnPage] = useState(false);

  useEffect(() => {
    if (userInfo.memberId === memberId) {
      setMyOwnPage(true);
    } else if (userInfo.memberId !== memberId) {
      setMyOwnPage(false);
    }
  }, [memberId, userInfo.memberId]);

  const goEditProfile = () => {
    navigate("/editprofile", { state: { memberId } });
  };

  return (
    <React.Fragment>
      <DProfileBox>
        <ProfileHead>
          <DProfileImage>
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
            <img src={userInfo.profileImage} alt="profile" />
          </DProfileImage>
          <DCircleBox>
            <Circle _width="28px" _height="28px" bgColor="black" />
          </DCircleBox>
          <DPropfileInfo>
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
          </DPropfileInfo>
        </ProfileHead>
      </DProfileBox>
    </React.Fragment>
  );
};

const DProfileBox = styled.div`
  padding: 20px 0 28px 0;
  position: relative;
`;

const DProfileImage = styled.div`
  height: 150px;
  width: 156.34px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #c4c4c4;
  z-index: -1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const DCircleBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 134px;
`;

const DPropfileInfo = styled.div`
  padding: 50px;
`;

const ProfileHead = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export default UserProfileD;
