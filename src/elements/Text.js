import React from "react";
import styled, { css } from "styled-components";

const Text = props => {
  const {
    _color,
    _fontSize,
    _lineHeight,
    _padding,
    children,
    textAlign,
    _onClick,
  } = props;

  const styles = { _color, _fontSize, _lineHeight, _padding, textAlign };

  return (
    <TextP onClick={_onClick} {...styles}>
      {children}
    </TextP>
  );
};

Text.defaultProps = {
  _color: "#B1B8C0",
  _fontSize: "16px",
  _lineHeight: "22px",
  _padding: "0px",
  textAlign: "left",
  _onClick: () => {},
};

const TextP = styled.p`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      padding: ${props => props._padding};
      font-size: ${props => props._fontSize};
      font-weight: ${fontWeight.regular};
      color: ${props => props._color || colors.fontColor02};
      line-height: ${props => props._lineHeight};
      letter-spacing: 0.0024em;
      text-align: ${props => props.textAlign};
    `;
  }}
`;

export default Text;