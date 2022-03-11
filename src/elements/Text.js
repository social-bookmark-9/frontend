import React from "react";
import styled, { css } from "styled-components";

const Text = props => {
  const { _fontSize, _lineHeight, _padding, children, textAlign } = props;

  const styles = { _fontSize, _lineHeight, _padding, textAlign };

  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  _fontSize: "16px",
  _lineHeight: "22px",
  _padding: "0px",
  textAlign: "left",
};

const P = styled.p`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      padding: ${props => props._padding};
      font-size: ${props => props._fontSize};
      font-weight: ${fontWeight.regular};
      color: ${colors.fontColor02};
      line-height: ${props => props._lineHeight};
      letter-spacing: 0.0024em;
      text-align: ${props => props.textAlign};
    `;
  }}
`;

export default Text;
