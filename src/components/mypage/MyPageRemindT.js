import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled, { css } from "styled-components";
import { Title, Image, Text } from "../../elements";

const MyPageRemindT = props => {
  const { userInfo, remindData, memberId, openModal } = props;
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
          <CurationDiv>
            {remindData && remindData.length > 0 ? (
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
                        <TextPoint>{remindData.length}개</TextPoint>가 있어요
                      </Text>
                    </TextBox>
                  </div>
                </RemindAlert>
              </AlertBox>
            ) : (
              <AlertBox onClick={openModal}>
                <RemindAlert>
                  <div style={{ margin: "0 auto 0 auto", display: "flex" }}>
                    <ImageBox>
                      <Image
                        _src="/images/add.png"
                        _width="20px"
                        _height="20px"
                      />
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
                  </div>
                </RemindAlert>
              </AlertBox>
            )}
          </CurationDiv>
        </>
      ) : null}
    </>
  );
};
const AlertBox = styled.div`
  padding: 8px 0px;
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1194px) {
    padding: 0px 16px;
  }
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
  padding: 0 16px;
`;

export default MyPageRemindT;
