import { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, Text, Title } from "../../elements";
import { useParams } from "react-router";
import RemindCard from "./RemindCard";

const MyPageSuggest = props => {
  const { userInfo, memberId, isLogin, isTablet, openModal } = props;
  const params = useParams();
  const [myOwnPage, setMyOwnPage] = useState(false);
  const isNew = true;

  useEffect(() => {
    if (parseInt(params.id) === parseInt(memberId)) {
      setMyOwnPage(true);
    } else if (parseInt(params.id) !== parseInt(memberId)) {
      setMyOwnPage(false);
    }
  }, [memberId, params.id]);

  return (
    <>
      {!myOwnPage ? (
        <CardWrap>
          <RemindCard
            memberId={memberId}
            isLogin={isLogin}
            _title={`${userInfo.memberName}님의 큐레이션이 유용하셨나요?`}
            _text={
              "크롬 사용자라면 버튼 클릭 한번으로 링크를 저장해\n나만의 큐레이션을 만들고 공유할 수 있어요"
            }
            _button="내 버블드 만들기"
            isNew={isNew}
          />
        </CardWrap>
      ) : isTablet ? (
        <AlertBox onClick={openModal}>
          <RemindAlert>
            <div style={{ margin: "0 auto 0 auto", display: "flex" }}>
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
            </div>
          </RemindAlert>
        </AlertBox>
      ) : null}
    </>
  );
};

const CardWrap = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1194px) {
    padding: 0px 16px;
  }
`;

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

const ImageBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: block;
  & h1 {
    padding-bottom: 2px;
  }
`;

export default MyPageSuggest;
