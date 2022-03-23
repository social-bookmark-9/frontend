import React from "react";
import { Title } from "../elements";
import styled from "styled-components";
import Slider from "react-slick";

const RecommendList = () => {
  const images = [
    { articleId: 0, reminderDate: 3, image: "/images/icon100.png" },
    { id: 1, image: "/images/icon101.png" },
    { id: 2, image: "/images/icon102.png" },
    { id: 3, image: "/images/icon103.png" },
    { id: 4, image: "/images/icon104.png" },
  ];

  const mobileSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          backgroundColor: "#f2f3f4",
        }}
      >
        <Title _padding="0 0 20px 4px">추천 아티클</Title>
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
                    <div style={{ width: "30px", height: "30px" }}>
                      <img src={item.image} alt="" />
                    </div>
                    대충 글씨
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

const Card = styled.div`
  height: 240px;
  width: 95%;
  padding: 10px;
  margin: 0 6px 0 6px;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  background-color: #505866;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const DesktopCard = styled(Card)`
  width: 358px;
  margin: 0 10px 10px 0;
`;

const FavoritesBox = styled.div`
  width: 100%;
`;

const Favorites = styled.div`
  margin: auto;
  width: 317px;
  justify-content: center;
  text-align: left;
`;

const InputBox = styled.div`
  display: inline-block;
  margin: 4px;
  border-radius: 8px;
`;

const FavoriteInput = styled.input`
  display: none;
`;

const FavoriteLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 0.8px solid #d2d6da;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
`;

export default RecommendList;