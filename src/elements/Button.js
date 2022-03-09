import React from "react";
import styled from "styled-components";

const Button = props => {
  const { _onClick, name, width, height, margin, bgColor, color, _fontSize } =
    props;
  const styles = {
    width,
    height,
    margin,
    bgColor,
    color,
    _fontSize,
  };
  return (
    <StyledButton onClick={_onClick} {...styles}>
      {name}
    </StyledButton>
  );
};
// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
  background-color: ${props => props.bgColor || "#313131"};
  color: ${props => props.color || "#ffffff"};
  padding: 0.5em 1em;
  margin: ${props => props.margin || "20px 0px"};
  width: ${props => props.width || "100vw"};
  height: ${props => props.height || "10vh"};
  font-size: ${props => props._fontSize}
`;

// export
export default Button;
