import React from "react";
import styled from "styled-components";

const Image = props => {
  const { _src, _width, _height, _marginR } = props;
  const styles = {
    _width,
    _height,
    _marginR,
  };
  return <Img src={_src} {...styles} alt="icons" />;
};

Image.defaultProps = {
  _src: "",
  _width: "11px",
  _height: "11px",
  _marginR: "8px",
};

const Img = styled.img`
  margin-right: ${props => props._marginR || "8px"};
  width: ${props => props._width};
  height: ${props => props._height};
`;

export default Image;
