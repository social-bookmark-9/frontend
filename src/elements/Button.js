import React from "react";
import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";

const Button = props => {
  const {
    _onClick,
    name,
    width,
    height,
    margin,
    bgColor,
    _color,
    _fontSize,
    isBorder,
    inArticle,
  } = props;
  const styles = {
    width,
    height,
    margin,
    bgColor,
    _color,
    _fontSize,
    isBorder,
  };

  if (inArticle) {
    return (
      <React.Fragment>
        <ButtonBox onClick={_onClick}>
          <p>{name}</p>
        </ButtonBox>
      </React.Fragment>
    );
  }

  return (
    <StyledButton onClick={_onClick} {...styles}>
      {name}
    </StyledButton>
  );
};
// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props._color};
  padding: 0.5em 1em;
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: ${props => props._fontSize};
  ${props =>
    props.isBorder ? `border: 1px solid #dedede; border-radius: 3px;` : ""}
`;

const ButtonBox = styled.div`
  ${Flexbox}
  ${({ theme }) => {
    const { colors, fontSizes, fontWeight } = theme;
    return css`
      margin: 0px 4px;
      width: 100%;
      height: 44px;
      align-items: center;
      background-color: ${colors.white};
      border: 1px solid ${colors.grayColor03};
      border-radius: 8px;
      font-size: ${fontSizes.font14};
      color: ${colors.fontColor04};
      font-weight: ${fontWeight.semiBold};
      text-align: center;
    `;
  }}
`;

Button.defaultProps = {
  width: "100%",
  height: "10vh",
  margin: "20px 0px",
  bgColor: "#353C49",
  _color: "#ffffff",
  _fontSize: "",
  isBorder: false,
};

// export
export default Button;
