import React from "react";
import styled, { css } from "styled-components";

const UserTitle = props => {
  const { children, textAlign, padding } = props;

  const styles = { textAlign, padding };

  return <TitleBox {...styles}>{children}</TitleBox>;
};

UserTitle.defaultProps = {
  textAlign: "left",
  padding: "16px 0px",
};

const TitleBox = styled.div`
  ${({ theme }) => {
    const { fontWeight, fontSizes, colors } = theme;
    return css`
      padding: ${props => props.padding};
      text-align: ${props => props.textAlign};
      & h3 {
        font-size: ${fontSizes.font24};
        font-weight: ${fontWeight.semiBold};
        color: ${colors.fontColor04};
        line-height: 32px;
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

export default UserTitle;
