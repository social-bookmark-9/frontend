import styled from "styled-components";
import { Button, Text, Title } from "../../elements";
import { Circle } from "../../elements/ImageObj";

const RecommendUserD = () => {
  const images = [
    { id: 0, image: "/images/icon100.png" },
    { id: 1, image: "/images/icon101.png" },
    { id: 2, image: "/images/icon102.png" },
    { id: 3, image: "/images/icon103.png" },
    { id: 4, image: "/images/icon104.png" },
  ];

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
            설명설명설명설명
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
            {images.slice(0, 3).map(item => (
              <div key={item.id}>
                <DesktopCard>
                  <ProfileBox>
                    {/*  그거... 동그라미 */}
                    <CircleBoxDesktop>
                      <Circle _width="22px" _height="22px" bgColor="black" />
                    </CircleBoxDesktop>
                    <ProfileImageDesktop>
                      <img
                        src={item.image}
                        alt="profile"
                        style={{ zIndex: "3" }}
                      />
                    </ProfileImageDesktop>
                    <Title _padding="23px 15px 2px 15px" textAlign="center">
                      김철수
                    </Title>
                    <Text
                      _color="#3E3E3E"
                      _fontSize="13px"
                      _padding="0 0 8px 0"
                      textAlign="center"
                    >
                      글쓰는 UX디자이너
                    </Text>
                    <div style={{ display: "inline-block" }}>
                      <Button _width="76px" _padding="6px" borderRadius="45px">
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
            <ellipse cx="44.8" cy="56" rx="44.8" ry="44" />
            <ellipse cx="111" cy="56" rx="44.8" ry="44" />
            <ellipse cx="25" cy="44" rx="44.8" ry="44" />
            <ellipse cx="62" cy="24.5" rx="44.8" ry="44" />
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
  border: 1px solid #F2F4F6;
  border-radius: 20px;
  overflow: hidden;
  background-color: #F2F4F6;
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
  background-color: #C4C4C4;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const CircleBoxDesktop = styled.div`
  position: absolute;
  top: 70px;
  right: 30px;
  z-index: 3;
`;

const ProfileBox = styled.div`
  display: inline-block;
  width: 100%;
  height: 278px;
  position: relative;
`;

export default RecommendUserD;