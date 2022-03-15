import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";

import { Navbar, Profile, ArticleFolder, RemindCard } from "../components";
import { Label, Title, Image, Text } from "../elements";
import { Flexbox } from "../styles/flexbox";

const MyPage = props => {
  const { isLogin } = props;
  const navigate = useNavigate();
  const folderData = useSelector(state => state.folder.data);
  const isMe = true;
  const completeRates = [15, 100, 30, 45];

  const completeRate = Math.round(
    completeRates.reduce((a, b) => a + b) / completeRates.length,
  );

  return (
    <React.Fragment>
      <Navbar isLogin={isLogin} />
      {/* 프로필+이름 부분 */}
      <Profile />
      {/* 리마인드 부분 */}
      <RemindCard
        _title="저장한 글, 다시 읽고 계신가요?"
        _text={
          "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
        }
        _button="리마인드 받기"
      />
      {/* 큐레이션 부분 */}
      <Qheader>
        <Title _padding="20px">김철수님의 큐레이션</Title>
        <LabelBox>
          <Label
            _color={({ theme }) => theme.colors.fontColor07}
            bgColor="#ffffff"
            _padding="7px 21px"
          >
            전체 완독률 {completeRate}%
          </Label>
        </LabelBox>
      </Qheader>
      {/* 디폴트 폴더 */}
      <ArticleFolder
        _onClick={() => {
          navigate("/articles");
        }}
        folderColor="default"
        isMe={true}
      />
      {/* 아티클 리마인드 */}
      <AlertBox>
        <RemindAlert>
          <div>
            <Image _src="/images/remind.png" _width="20px" _height="19px" />
          </div>
          <div>
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
          </div>
        </RemindAlert>
      </AlertBox>

      {/* 폴더리스트 시작 */}
      {folderData.map((folder, idx) => (
        <ArticleFolder
          key={idx}
          folder={folder}
          _onClick={() => {
            navigate("/articles");
          }}
          folderColor={
            idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
          }
          isMe={isMe}
        />
      ))}
    </React.Fragment>
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
  height: 82px;
  border: 1px solid #f2f3f4;
  border-radius: 16px;
  padding: 19px 22px;
`;

const TextPoint = styled.div`
  ${({ theme }) => {
    const { colors, fontWeight } = theme;
    return css`
      display: inline-block;
      color: ${colors.fontPurple};
      font-weight: ${fontWeight.semiBold};
    `;
  }}
`;

export default MyPage;
