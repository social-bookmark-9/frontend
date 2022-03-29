import React from "react";
import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";

const Label = props => {
  const {
    children,
    _fontSize,
    _color,
    _padding,
    bgColor,
    borderColor,
    borderRadius,
  } = props;
  const styles = {
    _fontSize,
    _color,
    _padding,
    bgColor,
    borderColor,
    borderRadius,
  };
  return <LabelText {...styles}>{children}</LabelText>;
};

Label.defaultProps = {
  _fontSize: "10px",
  _color: "#ffffff",
  _padding: "5px 11px",
  bgColor: "rgba(0, 0, 0, 0.2)",
  borderColor: "#D2D6DA",
  borderRadius: "5px",
};

const LabelText = styled.label`
  ${Flexbox}
  ${({ theme }) => {
    const { fontWeight } = theme;
    return css`
      font-size: ${props => props._fontSize};
      color: ${props => props._color};
      font-weight: ${fontWeight.semiBold};
      padding: ${props => props._padding};
      background-color: ${props => props.bgColor};
      border: 0.568419px solid;
      border-color: ${props => props.borderColor};
      border-radius: ${props => props.borderRadius};
      margin-right: 4px;
    `;
  }}
`;

export default Label;