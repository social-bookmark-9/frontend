import React from "react";
import styled from "styled-components";

const Button = props => {
  const {
    _onClick,
    name,
    width,
    height,
    margin,
    bgColor,
    _color,
    _fontSize,
    isBorder,
  } = props;
  const styles = {
    width,
    height,
    margin,
    bgColor,
    _color,
    _fontSize,
    isBorder,
  };
  return (
    <StyledButton onClick={_onClick} {...styles}>
      {name}
    </StyledButton>
  );
};
// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props._color};
  padding: 0.5em 1em;
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props._fontSize};
  ${props =>
    props.isBorder ? `border: 1px solid #dedede; border-radius: 3px;` : ""}
`;

Button.defaultProps = {
  width: "100%",
  height: "10vh",
  margin: "20px 0px",
  bgColor: "#353C49",
  _color: "#ffffff",
  _fontSize: "",
  isBorder: false,
};

// export
export default Button;
