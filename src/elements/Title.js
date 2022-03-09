import React from "react";
import styled, { css } from "styled-components";

const Title = props => {
  const { children, textAlign, padding, _fontSize, lineHeight } = props;

  const styles = { textAlign, padding, _fontSize, lineHeight };

  return <TitleBox {...styles}>{children}</TitleBox>;
};

Title.defaultProps = {
  textAlign: "",
  padding: "",
  _fontSize: "",
  lineHeight: "",
};

const TitleBox = styled.div`
  ${({ theme }) => {
    const { fontWeight, fontSizes, colors } = theme;
    return css`
      padding: ${props => props.padding};
      text-align: ${props => props.textAlign};
      & h1 {
        font-size: ${props => props._fontSize};
        font-weight: ${fontWeight.semiBold};
        color: ${colors.fontColor04};
        line-height: ${props => props.lineHeight};
        letter-spacing: 0.0038em;
      }
      & p {
        font-size: ${fontSizes.font16};
        line-height: 22px;
        color: ${colors.fontColor02};
        padding-top: 15px;
        letter-spacing: -0.0024em;
      }
    `;
  }}
`;

export default Title;
