import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Text, Title } from "../../elements";
import { Circle } from "../../elements/ImageObj";

const RecommendUserD = props => {
  const { memberInfo } = props;

  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          margin: "0 auto 184px auto",
          display: "flex",
          width: "1220px",
          paddingTop: "184px",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            minWidth: "35%",
            // marginRight: "10%",
            justifyContent: "start",
          }}
        >
          <div style={{ marginTop: "-46px" }}>
            <img src="/images/DesktopMain3.png" width={"44px"} alt="" />
          </div>
          <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
            <div>추천 유저</div>
          </Title>
          <div style={{ fontSize: "20px", color: "#B1B8C0" }}>
            나와 비슷한 유저들의
            <br />
            생각을 구경해보세요
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            flexDirection: "column",
            width: "65%",
            justifyContent: "end",
            textAlign: "right",
          }}
        >
          <div style={{ display: "flex" }}>
            {memberInfo.slice(0, 3).map(member => (
              <div key={member.memberId}>
                <DesktopCard>
                  <ProfileBox>
                    {/*  그거... 동그라미 */}
                    <CircleBoxDesktop>
                      <Circle _width="22px" _height="22px" bgColor="black" />
                    </CircleBoxDesktop>
                    <ProfileImageDesktop>
                      <img
                        src={member.profileImage}
                        alt="profile"
                        style={{ zIndex: "3" }}
                      />
                    </ProfileImageDesktop>
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
                          navigate(`/mypage/${member.memberId}`);
                        }}
                      >
                        구경하기
                      </Button>
                    </div>
                  </ProfileBox>
                </DesktopCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="desktopClip">
            <ellipse cx="36.5" cy="85.8" rx="36.5" ry="36.1" />
            <ellipse cx="89.8" cy="85.8" rx="36.5" ry="36.1" />
            <ellipse cx="36.5" cy="36.1" rx="36.5" ry="36.1" />
            <ellipse cx="89.8" cy="36.1" rx="36.5" ry="36.1" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

const DesktopCard = styled.div`
  width: 234px;
  height: 312px;
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

const ProfileImageDesktop = styled.div`
  display: inline-block;
  height: 123px;
  width: 127.5px;
  clip-path: url(#desktopClip);
  position: relative;
  background-color: #c4c4c4;
  & img {
    position: absolute;
    width: 100%;
    left: 0;
  }
`;

const CircleBoxDesktop = styled.div`
  position: absolute;
  top: 100px;
  right: 27px;
  z-index: 3;
`;

const ProfileBox = styled.div`
  display: inline-block;
  width: 100%;
  height: 278px;
  position: relative;
`;

export default RecommendUserD;
