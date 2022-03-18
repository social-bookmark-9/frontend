import Slider from "react-slick";
import styled from "styled-components";

const Carousel = () => {
  const images = [
    {id:0, image:"/images/icon100.png"},
    {id:1, image:"/images/icon101.png"},
    {id:2, image:"/images/icon102.png"},
    {id:3, image:"/images/icon103.png"},
    {id:4, image:"/images/icon104.png"}
  ]

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true,
    variableWidth: true
  };

  return (
    <Slider {...settings}>
      {images.map((item) => {
        return(
          <div key={item.id}>
            <Card>
              <div style={{
                padding:"0 2px 6px 2px", 
                color:"#595959",
                fontSize:"14px"
              }}>
                애자일이란 무엇인가
              </div>
              <div style={{color:"#9190a0", fontSize:"12px"}}>
                UX방법론에는 많은 것들이 있는데요 오늘은 어피니티 다이어그램에 대해 알아보겠습니다 UX방법론에는 많은
              </div>
            </Card>
          </div>
        )
      })}
      <SeeMoreCard>
        <div>13개</div>
        더보기
      </SeeMoreCard>
    </Slider>
  )

}


const Card = styled.div`
  height: 146px;
  width: 243px;
  padding: 20px;
  margin-left: 8px;
  border: 1px solid #f2f4f6;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const SeeMoreCard = styled.div`
  height: 146px;
  width: 61px;
  padding: 57px 14px;
  margin-left: 8px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #f2f4f6;
  border-radius: 10px;
  overflow: hidden;
`;

export default Carousel;