import React from "react";
import styled, { css } from "styled-components";

const Title = props => {
  const { _fontSize, _lineHeight, _padding, _color, children, textAlign } =
    props;

  const styles = { _fontSize, _lineHeight, _padding, _color, textAlign };

  return <TitleText {...styles}>{children}</TitleText>;
};

Title.defaultProps = {
  _fontSize: "20px",
  _lineHeight: "24px",
  _padding: "0px",
  _color: "#353C49",
  textAlign: "left",
};

const TitleText = styled.h1`
  ${({ theme }) => {
    const { fontWeight } = theme;
    return css`
      padding: ${props => props._padding};
      font-size: ${props => props._fontSize};
      font-weight: ${fontWeight.semiBold};
      color: ${props => props._color};
      line-height: ${props => props._lineHeight};
      letter-spacing: 0.0038em;
      text-align: ${props => props.textAlign};
      align-self: center;
    `;
  }}
`;

export default Title;
