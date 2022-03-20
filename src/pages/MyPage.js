import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFoldersAxios } from "../redux/modules/Folder";

import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";
import { Desktop, Tablet, Mobile } from "../styles/mediaquery";

import { Navbar, Profile, ArticleFolder, RemindCard } from "../components";
import { Label, Title, Image, Text } from "../elements";
import { useLocation } from "react-router";

const MyPage = props => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getFoldersAxios());
  }, [dispatch]);

  // ----- 폴더 리스트 ----- //
  const folderList = useSelector(state => state.folder.folderList);
  const defaultFolder = folderList[0];
  const userFolder = folderList.slice(1);

  // ----- 유저 정보 ----- //
  const userInfo = useSelector(state => state.folder.userInfo);

  // ----- 전체구독률 ----- //
  const completeRates = [100, 49, 29, 0, 35];
  const completeRate = Math.round(
    completeRates.reduce((a, b) => a + b) / completeRates.length,
  );

  return (
    <React.Fragment>
      <Desktop>
        <Navbar />
        <DContainer>
          {/* ----- 프로필+이름 부분 ----- */}
          <Profile {...userInfo} />
          {/* ----- 리마인드 부분 ----- */}
          {/* {isMe ? ( */}
          <RemindCard
            _title="저장한 글, 다시 읽고 계신가요?"
            _text={
              "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
            }
            _button="리마인드 받기"
          />
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* ----- 큐레이션 부분 ----- */}
          <Qheader>
            <Title _padding="20px">{"username"}님의 큐레이션</Title>
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
          {/* ----- 디폴트 폴더 ----- */}
          {/* {isMe ? ( */}
          <>
            <ArticleFolder
              folderColor="default"
              isDefault={true}
              {...defaultFolder}
            />

            {/* 아티클 리마인드 */}
            <AlertBox>
              <RemindAlert>
                <div>
                  <Image
                    _src="/images/remind.png"
                    _width="20px"
                    _height="19px"
                  />
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
          </>
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* 폴더리스트 시작 */}
          {userFolder.map((folder, idx) => (
            <ArticleFolder
              {...folder}
              key={idx}
              folderColor={
                idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
              }
            />
          ))}
          {/* {isMe ? ( */}
          ""
          {/* ) : ( */}
          <RemindCard
            _title={`${"username"}님의 큐레이션이 유용하셨나요?`}
            _text={
              "크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해\n나만의 큐레이션을 만들고 공유할 수 있어요"
            }
            _button="내 버블드 만들기"
            isMe={false}
          />
          {/* )} */}
        </DContainer>
      </Desktop>
      <Tablet>
        <Container>
          <Navbar />
          {/* ----- 프로필+이름 부분 ----- */}
          <Profile {...userInfo} />
          {/* ----- 리마인드 부분 ----- */}
          {/* {isMe ? ( */}
          <RemindCard
            _title="저장한 글, 다시 읽고 계신가요?"
            _text={
              "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
            }
            _button="리마인드 받기"
          />
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* ----- 큐레이션 부분 ----- */}
          <Qheader>
            <Title _padding="20px">{"username"}님의 큐레이션</Title>
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
          {/* ----- 디폴트 폴더 ----- */}
          {/* {isMe ? ( */}
          <>
            <ArticleFolder
              folderColor="default"
              isDefault={true}
              {...defaultFolder}
            />

            {/* 아티클 리마인드 */}
            <AlertBox>
              <RemindAlert>
                <div>
                  <Image
                    _src="/images/remind.png"
                    _width="20px"
                    _height="19px"
                  />
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
          </>
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* 폴더리스트 시작 */}
          {userFolder.map((folder, idx) => (
            <ArticleFolder
              {...folder}
              key={idx}
              folderColor={
                idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
              }
            />
          ))}
          {/* {isMe ? ( */}
          ""
          {/* ) : ( */}
          <RemindCard
            _title={`${"username"}님의 큐레이션이 유용하셨나요?`}
            _text={
              "크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해\n나만의 큐레이션을 만들고 공유할 수 있어요"
            }
            _button="내 버블드 만들기"
            isMe={false}
          />
          {/* )} */}
        </Container>
      </Tablet>
      <Mobile>
        <Container>
          <Navbar />
          {/* ----- 프로필+이름 부분 ----- */}
          <Profile {...userInfo} />
          {/* ----- 리마인드 부분 ----- */}
          {/* {isMe ? ( */}
          <RemindCard
            _title="저장한 글, 다시 읽고 계신가요?"
            _text={
              "3번은 읽어야 완전한 내 것이 될 수 있어요.\n저장한 글을 리마인드 해드릴게요"
            }
            _button="리마인드 받기"
          />
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* ----- 큐레이션 부분 ----- */}
          <Qheader>
            <Title _padding="20px">{"username"}님의 큐레이션</Title>
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
          {/* ----- 디폴트 폴더 ----- */}
          {/* {isMe ? ( */}
          <>
            <ArticleFolder
              folderColor="default"
              isDefault={true}
              {...defaultFolder}
            />

            {/* 아티클 리마인드 */}
            <AlertBox>
              <RemindAlert>
                <div>
                  <Image
                    _src="/images/remind.png"
                    _width="20px"
                    _height="19px"
                  />
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
          </>
          {/* ) : ( */}
          ""
          {/* )} */}
          {/* 폴더리스트 시작 */}
          {userFolder.map((folder, idx) => (
            <ArticleFolder
              {...folder}
              key={idx}
              folderColor={
                idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
              }
            />
          ))}
          {/* {isMe ? ( */}
          ""
          {/* ) : ( */}
          <RemindCard
            _title={`${"username"}님의 큐레이션이 유용하셨나요?`}
            _text={
              "크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해\n나만의 큐레이션을 만들고 공유할 수 있어요"
            }
            _button="내 버블드 만들기"
            isMe={false}
          />
          {/* )} */}
        </Container>
      </Mobile>
    </React.Fragment>
  );
};

const DContainer = styled.div`
  width: 1115px;
  margin: auto;
`;

const Container = styled.div`
  margin-bottom: 85px;
`;

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

export default MyPage;
