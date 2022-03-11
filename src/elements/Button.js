import React from "react";
import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";

const Button = props => {
  const {
    children,
    _onClick,
    borderRadius,
    _padding,
    bgColor,
    _color,
    _fontSize,
    isBorder,
  } = props;
  const styles = {
    borderRadius,
    _padding,
    bgColor,
    _color,
    _fontSize,
    isBorder,
  };

  return (
    <StyledButton onClick={_onClick} {...styles}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  _onClick: () => {},
  _padding: "0px",
  bgColor: "#353C49",
  _color: "#ffffff",
  _fontSize: "14px",
  isBorder: false,
  borderRadius: "8px",
};

// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
  ${Flexbox}
  ${({ theme }) => {
    const { fontWeight } = theme;
    return css`
      width: 100%;
      padding: ${props => props._padding};
      background-color: ${props => props.bgColor};
      font-size: ${props => props._fontSize};
      font-weight: ${fontWeight.semiBold};
      color: ${props => props._color};
      ${props => (props.isBorder ? "border: 0.8px solid #DCDCDC" : "")}
      border-radius: ${props => props.borderRadius};
    `;
  }}
`;

// export
export default Button;
