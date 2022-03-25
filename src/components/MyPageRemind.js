import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";
// import ArticleFolder from "./ArticleFolder";

import { RemindCard } from ".";
import { Label, Title, Image, Text } from "../elements";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleFolder from "./ArticleFolder";

const MyPageRemind = props => {
  const {
    defaultFolder,
    userFolder,
    userInfo,
    completeRate,
    memberId,
    openModal,
  } = props;

  const [myOwnPage, setMyOwnPage] = useState(false);
  const params = useParams();

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
          <RemindCard
            _title="저장한 글, 다시 읽고 계신가요?"
            _text={
              "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
            }
            _button="리마인드 받기"
          />

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

          <ArticleFolder
            folderColor="default"
            folder={defaultFolder}
            isDefault
          />

          {userFolder && userFolder.length > 0 ? (
            <AlertBox>
              <RemindAlert>
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
                    아직 읽지 않은 아티클 <TextPoint>15개</TextPoint>가 있어요
                  </Text>
                </TextBox>
              </RemindAlert>
            </AlertBox>
          ) : (
            <AlertBox onClick={openModal}>
              <RemindAlert>
                <ImageBox>
                  <Image _src="/images/add.png" _width="20px" _height="20px" />
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
      ) : null}
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

export default MyPageRemind;
