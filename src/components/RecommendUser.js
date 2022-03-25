import { Button, Text, Title } from "../elements";
import { Circle } from "../elements/ImageObj";
import styled from "styled-components";
import { Desktop, Tablet, Mobile } from "../styles/mediaquery";
import Slider from "react-slick";

const RecommendUser = () => {
  const images = [
    { id: 0, image: "/images/icon100.png" },
    { id: 1, image: "/images/icon101.png" },
    { id: 2, image: "/images/icon102.png" },
    { id: 3, image: "/images/icon103.png" },
    { id: 4, image: "/images/icon104.png" },
  ];

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
      <Desktop>
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
              minWidth: "255px",
              marginRight: "10%",
              justifyContent: "start",
            }}
          >
            <div style={{ marginTop: "-46px" }}>
              <img src="/images/DesktopMain3.png" width={"44px"} alt="" />
            </div>
            <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
              <div>나와 비슷한 버블러</div>
            </Title>
            <div style={{ fontSize: "20px", color: "#b1b8c0" }}>
              설명설명설명설명
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              flexDirection: "column",
              width: "734px",
              justifyContent: "end",
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
                        _color="#3e3e3e"
                        _fontSize="13px"
                        _padding="0 0 8px 0"
                        textAlign="center"
                      >
                        글쓰는 UX디자이너
                      </Text>
                      <div style={{ display: "inline-block" }}>
                        <Button
                          _width="76px"
                          _padding="6px"
                          borderRadius="45px"
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
      </Desktop>

      <Tablet>
        <div
          style={{
            margin: "0 auto 0 auto",
            maxWidth: "1194px",
            padding: "47px 40px 0 40px",
          }}
        >
          <Title _padding="0 0 20px 0">추천 유저</Title>
          <div style={{ margin: "0 19px 16px 0" }}>
            {images.map(item => (
              <div key={item.id} style={{ display: "inline-block" }}>
                <TabletCard>
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
                        src={item.image}
                        alt="profile"
                        style={{ zIndex: "3" }}
                      />
                    </ProfileImage>
                    <Title _padding="23px 15px 2px 15px" textAlign="center">
                      김철수
                    </Title>
                    <Text
                      _color="#3e3e3e"
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
                </TabletCard>
              </div>
            ))}
          </div>
        </div>
      </Tablet>

      <Mobile>
        <div
          style={{
            width: "100%",
            padding: "32px 0 40px 18px",
          }}
        >
          <Title _padding="0 0 20px 4px">추천 유저</Title>
          <div
            style={{
              marginLeft: "-58px",
            }}
          >
            <Slider {...mobileSettings}>
              {images.map(item => {
                return (
                  <div key={item.id}>
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
                            src={item.image}
                            alt="profile"
                            style={{ zIndex: "3" }}
                          />
                        </ProfileImage>
                        <Title _padding="23px 15px 2px 15px" textAlign="center">
                          김철수
                        </Title>
                        <Text
                          _color="#3e3e3e"
                          _fontSize="13px"
                          _padding="0 0 8px 0"
                          textAlign="center"
                        >
                          글쓰는 UX디자이너
                        </Text>
                        <div style={{ display: "inline-block" }}>
                          <Button
                            _width="76px"
                            _padding="6px"
                            borderRadius="45px"
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
      </Mobile>

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

const DesktopCard = styled(Card)`
  width: 234px;
  height: 312px;
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

const ProfileImageDesktop = styled(ProfileImage)`
  height: 123px;
  width: 127.5px;
  clip-path: url(#desktopClip);
`;

const CircleBox = styled.div`
  position: absolute;
  top: 64.8px;
  right: 10px;
  z-index: 3;
`;

const CircleBoxDesktop = styled(CircleBox)`
  top: 70px;
  right: 30px;
`;

export default RecommendUser;
