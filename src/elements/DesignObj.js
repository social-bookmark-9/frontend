import React from "react";
import styled from "styled-components";
import { Flexbox } from "../styles/flexbox";

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

export default DesignObj;
