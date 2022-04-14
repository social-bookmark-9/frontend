import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled, { css } from "styled-components";
import { Label, Title, Image, Text } from "../../elements";
import { Flexbox } from "../../styles/flexbox";

import RemindCard from "./RemindCard";
import ArticleFolder from "../folderpage/ArticleFolder";

const MyPageRemind = props => {
  const {
    remindData,
    defaultFolder,
    userInfo,
    completeRate,
    memberId,
    openModal,
  } = props;
  const params = useParams();
  const [myOwnPage, setMyOwnPage] = useState(false);

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId, params.id]);

  return (
    <>
      {myOwnPage ? (
        <>
          {remindData && remindData.length > 0 ? null : (
            <RemindCard
              _title="저장한 글, 다시 읽고 계신가요?"
              _text={
                "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
              }
              _button="리마인드 받기"
            />
          )}

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
          <FolderContainer>
            <ArticleFolder
              folderColor="default"
              folder={defaultFolder}
              {...defaultFolder}
              memberId={userInfo.memberId}
              myId={memberId}
            />
          </FolderContainer>
          {remindData && remindData.length > 0 ? (
            <>
              <AlertBox>
                <RemindAlert>
                  <ImageBox>
                    <Image
                      _src="/images/remind.webp"
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
                      아직 읽지 않은 아티클{" "}
                      <TextPoint>{remindData.length}개</TextPoint>가 있어요
                    </Text>
                  </TextBox>
                </RemindAlert>
              </AlertBox>
            </>
          ) : (
            <AlertBox onClick={openModal}>
              <RemindAlert>
                <ImageBox>
                  <Image _src="/images/add.webp" _width="20px" _height="20px" />
                </ImageBox>
                <TextBox>
                  <Title
                    _fontSize={({ theme }) => theme.fontSizes.font16}
                    _lineHeight="22px"
                  >
                    새 컬렉션 만들기
                  </Title>
                  <Text
                    _fontSize={({ theme }) => theme.fontSizes.font13}
                    _lineHeight="18px"
                  >
                    컬렉션을 만들어 링크를 분류해 보세요
                  </Text>
                </TextBox>
              </RemindAlert>
            </AlertBox>
          )}
        </>
      ) : (
        <Title _padding="20px">{userInfo.memberName}님의 큐레이션</Title>
      )}
    </>
  );
};

const Qheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelBox = styled.div`
  ${Flexbox};
  padding-right: 20px;
`;

const AlertBox = styled.div`
  padding: 16px;
`;

const RemindAlert = styled.div`
  display: flex;
  flex-direction: row;
  height: 82px;
  border: 1px solid #f2f3f4;
  border-radius: 16px;
  padding: 19px 22px;
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

const FolderContainer = styled.div`
  padding: 8px 16px;
`;

export default MyPageRemind;
