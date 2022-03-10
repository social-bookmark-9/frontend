import React from "react";
import styled, { css } from "styled-components";

const Title = props => {
  const {
    children,
    textAlign,
    padding,
    _titleSize,
    lineHeight,
    _subtitleSize,
  } = props;

  const styles = { textAlign, padding, _titleSize, lineHeight, _subtitleSize };

  return <TitleBox {...styles}>{children}</TitleBox>;
};

Title.defaultProps = {
  textAlign: "",
  padding: "",
  _titleSize: "",
  lineHeight: "",
  _subtitleSize: "",
};

const TitleBox = styled.div`
  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      padding: ${props => props.padding};
      text-align: ${props => props.textAlign};
      & h1 {
        font-size: ${props => props._titleSize};
        font-weight: ${fontWeight.semiBold};
        color: ${colors.fontColor04};
        line-height: ${props => props.lineHeight};
        letter-spacing: 0.0038em;
      }
      & p {
        font-size: ${props => props._subtitleSize};
        line-height: 22px;
        color: ${colors.fontColor02};
        padding-top: 15px;
        letter-spacing: -0.0024em;
      }
    `;
  }}
`;

export default Title;
