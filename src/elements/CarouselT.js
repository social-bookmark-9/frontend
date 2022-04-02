import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import LinesEllipsis from "react-lines-ellipsis";

const CarouselT = props => {
  const { articleContents } = props;

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    focusOnSelect: true,
    variableWidth: true,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {articleContents &&
        articleContents.map((content, idx) => {
          return (
            <CardBox key={idx}>
              <Card>
                <CardTitle>
                  {content.title !== null ? (
                    <LinesEllipsis
                      text={content.title}
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      basedOn="words"
                    />
                  ) : (
                    "제목없음"
                  )}
                </CardTitle>
                <CardContents>
                  {content.content !== null ? (
                    <LinesEllipsis
                      text={content.content}
                      maxLine="2"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  ) : (
                    "미리보기 내용을 불러올 수 없습니다"
                  )}
                </CardContents>
              </Card>
            </CardBox>
          );
        })}
      {/* {articleContents.length > 3 ? ( */}
      {/* <SeeMoreCard>
        <div>13개</div>
        더보기
      </SeeMoreCard> */}
      {/* ) : null} */}
    </Slider>
  );
};

const CardBox = styled.div`
  width: 100%;
`;

const Card = styled.div`
  height: 146px;
  width: 243px;
  padding: 20px;
  margin-left: 8px;
  border: 1px solid #f2f4f6;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const CardTitle = styled.div`
  padding: 0px 2px 6px 2px;
  color: ${({ theme }) => theme.colors.fontColor04};
  font-size: ${({ theme }) => theme.fontSizes.font14};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 20px;
`;

const CardContents = styled.div`
  color: ${({ theme }) => theme.colors.fontColor03};
  font-size: ${({ theme }) => theme.fontSizes.font12};
  line-height: 16px;
`;

// const SeeMoreCard = styled.div`
//   height: 146px;
//   width: 61px;
//   padding: 57px 14px;
//   margin-left: 8px;
//   font-size: 12px;
//   text-align: center;
//   border: 1px solid #f2f4f6;
//   border-radius: 10px;
//   overflow: hidden;
// `;

export default CarouselT;
