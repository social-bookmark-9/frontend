import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { Flexbox } from "../styles/flexbox";
import { Link } from "react-router-dom";

const Circle = props => {
  const { _width, _height, bgColor } = props;
  const styles = {
    _width,
    _height,
    bgColor,
  };
  return (
    <React.Fragment>
      <CircleObj {...styles} />
    </React.Fragment>
  );
};

const Logo = props => {
  return (
    <React.Fragment>
      <Link to="/">
        <Image _src="/images/bubbled.png" _width="26px" _height="21px" />
      </Link>
    </React.Fragment>
  );
};

const DesignObj = props => {
  const objList = [
    "/images/obj01.png",
    "/images/obj02.png",
    "/images/obj03.png",
    "/images/obj04.png",
    "/images/obj05.png",
  ];
  return (
    <React.Fragment>
      <ObjBox>
        {objList.map((obj, idx) => (
          <img src={obj} alt={obj} key={idx} />
        ))}
      </ObjBox>
    </React.Fragment>
  );
};

const ObjBox = styled.div`
  ${Flexbox}
  & img {
    width: 8px;
    height: 8px;
    margin-right: 6px;
  }
`;

const CircleObj = styled.div`
  width: ${props => props._width};
  height: ${props => props._height};
  background-color: ${props => props.bgColor};
  border-radius: 50%;
`;

Circle.defaultProps = {
  width: "22px",
  height: "22px",
  backgroundColor: "#353C49",
};

export { Logo, DesignObj, Circle };
