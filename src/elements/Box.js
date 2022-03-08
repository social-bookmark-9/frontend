import React from "react";
import styled, { css } from "styled-components";

const UserTitle = props => {
  const { children, textAlign } = props;


  return <TitleBox textAlign={textAlign}>{children}</TitleBox>;
};

UserTitle.defaultProps = {
  _textAlign: "left",
};

const TitleBox = styled.div`
  ${({ theme }) => {
    const { fontWeight, fontSizes } = theme;
    return css`
      padding: 16px 0px;
      text-align: ${props => props.textAlign};
      & h3 {
        font-size: ${fontSizes.lg};
        font-weight: ${fontWeight.semiBold};
        line-height: 1.2;
      }
      & p {
        font-size: ${fontSizes.sm};
        color: #b1b8c0;
        padding: 8px;
      }
    `;
  }}
`;

export default UserTitle;
