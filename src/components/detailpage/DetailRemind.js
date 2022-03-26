import React, { useState } from "react";

import styled, { css } from "styled-components";
import { Text } from "../../elements";
import { FlexboxRow, FlexboxSpace } from "../../styles/flexbox";

const DetailRemind = ({ reminderDate }) => {
  const [userRemind, setUserRemind] = useState(reminderDate);

  const remindList = [
    { key: "선택안함", value: 0 },
    { key: "내일", value: 1 },
    { key: "3일 뒤", value: 3 },
    { key: "7일 뒤", value: 7 },
  ];

  const changeRemind = e => {
    setUserRemind(e.target.value);
    console.log(e.target.value);
  };

  return (
    <React.Fragment>
      <Reminder>
        <Text _fontSize={({ theme }) => theme.fontSizes.font14}>
          리마인드 받기
        </Text>
        <RemindSelection>
          {remindList.map((remind, idx) => (
            <RemindLabel key={idx}>
              <RemindRadio
                type="radio"
                name="remindeCheck"
                id={remind.value}
                value={remind.value}
                checked={userRemind === reminderDate ? true : false}
                onClick={changeRemind}
              />
              <RemindText>{remind.key}</RemindText>
            </RemindLabel>
          ))}
        </RemindSelection>
      </Reminder>
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
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      display: none;
      &:checked {
        background: none;
        padding: 0px 10px;
        text-align: center;
        height: 35px;
        line-height: 33px;
        font-weight: 500;
      }
      &:checked + ${RemindText} {
        background-color: ${colors.pointPurple01};
        border-color: ${colors.pointPurple02};
        color: ${colors.pointPurple02};
      }
    `;
  }}
`;

const Reminder = styled.div`
  ${FlexboxSpace}
  align-items: center;
  padding: 17px 0px;
`;

const RemindSelection = styled.div`
  ${FlexboxRow}
`;

const RemindLabel = styled.label``;

DetailRemind.defaultProps = {};

export default DetailRemind;
