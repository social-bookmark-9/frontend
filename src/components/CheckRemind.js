import React from "react";
import styled, { css } from "styled-components";

const CheckRemind = props => {
  const { remindOption, id, changeRemind } = props;

  return (
    <React.Fragment>
      <div>
        <label>
          <RemindRadio
            type="radio"
            id={id}
            name="radioButton"
            value={remindOption}
            onClick={changeRemind}
          />
          <RemindText>{remindOption}</RemindText>
        </label>
      </div>
    </React.Fragment>
  );
};

const RemindText = styled.span`
  ${({ theme }) => {
    const { fontSizes, fontWeight, colors } = theme;
    return css`
      font-size: ${fontSizes.font12};
      font-weight: ${fontWeight.semiBold};
      line-height: 16px;
      letter-spacing: -0.0008em;
      color: ${colors.fontColor02};
      padding: 5px 18px;
      border: 1px solid #f2f3f4;
      box-sizing: border-box;
      border-radius: 24.5px;
      background-color: ${colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0px 2.5px;
    `;
  }}
`;

const RemindRadio = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${RemindText} {
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        background-color: ${colors.grayColor05};
        border-color: ${colors.whilte};
        color: ${colors.white};
      `;
    }}
  }
  display: none;
`;

CheckRemind.defaultProps = {};

export default CheckRemind;
