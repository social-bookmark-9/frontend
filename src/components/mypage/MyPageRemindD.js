import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { Label, Title, Image, Text } from "../../elements";
import { Flexbox } from "../../styles/flexbox";

import RemindCard from "./RemindCard";

const MyPageRemindD = props => {
  const { userInfo, completeRate, memberId } = props;

  const [myOwnPage, setMyOwnPage] = useState(false);

  useEffect(() => {
    if (userInfo.memberId === memberId) {
      setMyOwnPage(true);
    } else if (userInfo.memberId !== memberId) {
      setMyOwnPage(false);
    }
  }, [memberId, userInfo.memberId]);

  const reminderData = useSelector(state => state.reminder);

  return (
    <>
      {myOwnPage ? (
        <>
          <RemindCard
            _title="저장한 글, 다시 읽고 계신가요?"
            _text={
              "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
            }
            _button="리마인드 받기"
          />

          <CurationDiv>
            <AlertBox>
              <RemindAlert>
                <div style={{ margin: "0 auto 0 auto", display: "flex" }}>
                  <ImageBox>
                    <Image
                      _src="/images/remind.png"
                      _width="20px"
                      _height="19px"
                    />
                  </ImageBox>
                  <TextBox>
                    <Title
                      _fontSize={({ theme }) => theme.fontSizes.font16}
                      _lineHeight="22px"
                    >
                      아티클 리마인드
                    </Title>
                    <Text
                      _fontSize={({ theme }) => theme.fontSizes.font13}
                      _lineHeight="18px"
                    >
                      아직 읽지 않은 아티클
                      <TextPoint>{reminderData.remindData.length}개</TextPoint>
                      가 있어요
                    </Text>
                  </TextBox>
                </div>
              </RemindAlert>
            </AlertBox>
          </CurationDiv>
          <Qheader>
            <Title _padding="20px">{userInfo.memberName}님의 큐레이션</Title>
            <LabelBox>
              <Label
                _color={({ theme }) => theme.colors.fontColor07}
                bgColor="#FFFFFF"
                _padding="7px 21px"
              >
                전체 완독률 {completeRate}%
              </Label>
            </LabelBox>
          </Qheader>
        </>
      ) : null}
    </>
  );
};

const Qheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0 16px 16px;
`;

const LabelBox = styled.div`
  ${Flexbox};
  padding-right: 20px;
`;

const AlertBox = styled.div`
  padding: 8px 0 8px 0;
  width: 100%;
`;

const RemindAlert = styled.div`
  display: flex;
  flex-direction: row;
  height: 82px;
  border: 1px solid #f2f3f4;
  border-radius: 16px;
  padding: 19px 22px;
  text-align: center;
  cursor: pointer;
`;

const TextPoint = styled.span`
  ${({ theme }) => {
    const { colors, fontWeight } = theme;
    return css`
      display: inline-block;
      color: ${colors.fontPurple};
      font-weight: ${fontWeight.semiBold};
    `;
  }}
`;

const ImageBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: block;
  & h1 {
    padding-bottom: 2px;
  }
`;

const CurationDiv = styled.div`
  display: inline-block;
  width: 100%;
`;

export default MyPageRemindD;
