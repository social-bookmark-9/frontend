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
        color: ${colors.gray06};
        line-height: 1.2;
      }
      & p {
        font-size: ${fontSizes.font16};
        color: ${colors.gray04};
        padding: 8px;
      }
    `;
  }}
`;

export default UserTitle;
