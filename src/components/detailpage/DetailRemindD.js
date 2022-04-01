import React from "react";
import { useDispatch } from "react-redux";

import styled, { css } from "styled-components";
import { Text } from "../../elements";
import {
  postReminderAxios,
  patchReminderAxios,
  deleteReminderAxios,
} from "../../redux/modules/Reminder";
import { FlexboxRow } from "../../styles/flexbox";

const DetailRemindD = props => {
  const { reminderDate, articleId, titleOg, imgOg } = props;

  const dispatch = useDispatch();

  const remindList = [
    { key: "내일", value: 1 },
    { key: "3일 뒤", value: 3 },
    { key: "7일 뒤", value: 7 },
    { key: "선택안함", value: 0 },
  ];

  console.log(reminderDate);

  const changeRemind = e => {
    const remindData = {
      articleId: parseInt(articleId),
      titleOg: titleOg,
      buttonDate: parseInt(e.target.value),
      imgOg: imgOg,
    };
    console.log(e.target.value);
    if (reminderDate === null && e.target.value !== "0") {
      dispatch(postReminderAxios(remindData));
    } else if (reminderDate !== null && e.target.value === "0") {
      dispatch(deleteReminderAxios(remindData));
    } else if (reminderDate !== null && e.target.value !== "0") {
      dispatch(patchReminderAxios(remindData));
    }
  };

  return (
    <React.Fragment>
      <Reminder>
        <Text
          _fontSize={({ theme }) => theme.fontSizes.font14}
        >
          리마인드 받기
        </Text>
        <RemindSelection>
          {remindList.map((remind, idx) => (
            <RemindLabel key={idx}>
              {remind.value === 0 && reminderDate === null ? (
                <RemindRadio
                  type="radio"
                  name="remindeCheck"
                  id={remind.value}
                  value={remind.value}
                  defaultChecked={true}
                  onClick={changeRemind}
                />
              ) : (
                <RemindRadio
                  type="radio"
                  name="remindeCheck"
                  id={remind.value}
                  value={remind.value}
                  defaultChecked={remind.value === reminderDate ? true : false}
                  onClick={changeRemind}
                />
              )}
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
  ${FlexboxRow}
  align-items: center;
  padding: 17px 0px;
`;

const RemindSelection = styled.div`
  ${FlexboxRow}
  margin-left: 140px;
`;

const RemindLabel = styled.label``;

DetailRemindD.defaultProps = {};

export default DetailRemindD;
