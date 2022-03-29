import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Button, Text, Title } from "../../elements";
import { Circle } from "../../elements/ImageObj";

import Slider from "react-slick";

import { Tablet, Mobile } from "../../styles/mediaquery";

const RecommendUser = props => {
  const { memberInfo } = props;

  const navigate = useNavigate();

  const mobileSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "32px 0 40px 18px",
        }}
      >
        <Title _padding="0 0 20px 4px">나와 비슷한 버블러</Title>
        <div
          style={{
            marginLeft: "-58px",
          }}
        >
          <Slider {...mobileSettings}>
            {memberInfo.map(member => {
              return (
                <div key={member.memberId}>
                  <Card>
                    <ProfileBox>
                      {/*  그거... 동그라미 */}
                      <CircleBox>
                        <Circle
                          _width="15.7px"
                          _height="15.7px"
                          bgColor="black"
                        />
                      </CircleBox>
                      <ProfileImage>
                        <img
                          src={member.profileImage}
                          alt="profile"
                          style={{ zIndex: "3" }}
                        />
                      </ProfileImage>
                      <Title _padding="23px 15px 2px 15px" textAlign="center">
                        {member.memberName}
                      </Title>
                      <Text
                        _color="#3E3E3E"
                        _fontSize="13px"
                        _padding="0 0 8px 0"
                        textAlign="center"
                      >
                        {member.memberComment}
                      </Text>
                      <div style={{ display: "inline-block" }}>
                        <Button
                          _width="76px"
                          _padding="6px"
                          borderRadius="45px"
                          _onClick={() => {
                            // navigate(`/mypage/${member.memberId}`);
                            navigate(`/${member.memberName}`);
                          }}
                        >
                          구경하기
                        </Button>
                      </div>
                    </ProfileBox>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <ellipse cx="25" cy="56" rx="25" ry="24.5" />
            <ellipse cx="62" cy="56" rx="25" ry="24.5" />
            <ellipse cx="25" cy="24.5" rx="25" ry="24.5" />
            <ellipse cx="62" cy="24.5" rx="25" ry="24.5" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

const Card = styled.div`
  height: 240px;
  width: 95%;
  padding: 20px;
  margin: 0 6px 0 6px;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f2f4f6;
  text-align: center;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const TabletCard = styled(Card)`
  display: inline-block;
  width: 159px;
  margin: 0 20px 0 0;
`;

const ProfileBox = styled.div`
  display: inline-block;
  width: 100%;
  height: 278px;
  position: relative;
`;

const ProfileImage = styled.div`
  display: inline-block;
  height: 84px;
  width: 87px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #c4c4c4;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const CircleBox = styled.div`
  position: absolute;
  top: 64.8px;
  right: 10px;
  z-index: 3;
`;

export default RecommendUser;
