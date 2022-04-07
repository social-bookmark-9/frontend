import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Label, Image, Title } from "../../elements";

import LinesEllipsis from "react-lines-ellipsis";

const ArticleFolderD = props => {
  const { folder, folderColor, memberId, myId } = props;

  const navigate = useNavigate();
  const isDefault = folder.isdDeleteable;
  const articleContents = folder.articleTitleContentDto;
  let isMe;
  if (memberId === myId) {
    isMe = true;
  } else {
    isMe = false;
  }
  // const isMe = false;
  // 해시태스 리스트
  const _hashTag = [props.hashTag1, props.hashTag2, props.hashTag3];
  const hashTag = _hashTag.filter(el => el !== null);

  // 폴더 별 색상 (폰트, 라벨, 해시태그)
  const propsColor = () => {
    switch (folderColor) {
      case "purple":
        return "#7881F5";
      case "blue":
        return "#0A8ED0";
      case "green":
        return "#4EB0AB";
      default:
        return "#505866";
    }
  };

  return (
    <React.Fragment>
      <Container
        onClick={() => {
          navigate(`/articles/${folder.folderId}`);
        }}
      >
        <CurationBox
          folderColor={folderColor}
          isMe={isMe}
          isDefault={isDefault}
        >
          {isMe || isDefault ? (
            <LabelBox>
              <Label
                _color={propsColor}
                borderColor={propsColor}
                bgColor="none"
              >
                완독률 {props.completeRate}%
              </Label>
            </LabelBox>
          ) : (
            <LabelBox>
              {hashTag.map((tag, idx) => (
                <Label
                  _color={propsColor}
                  borderColor={propsColor}
                  bgColor="none"
                  key={idx}
                >
                  {tag}
                </Label>
              ))}
            </LabelBox>
          )}

          <TitleBox>
            <Title
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _lineHeight="24px"
              _color={propsColor}
            >
              {props.folderName}
            </Title>
            {isMe ? (
              isDefault ? (
                <Label bgColor="white" _padding="7px" borderColor="white">
                  <Image
                    _src={`/images/${props.hide ? "show" : "hide"}.png`}
                    _marginR="0px"
                    _width="20px"
                    _height="20px"
                  />
                </Label>
              ) : null
            ) : (
              <Label
                _fontSize={({ theme }) => theme.fontSizes.font12}
                _color={propsColor}
                bgColor="none"
                borderColor={propsColor}
                borderRadius="40px"
              >
                <Image
                  _src={
                    folderColor === "blue"
                      ? "/images/thumbsUpBlue.png"
                      : folderColor === "purple"
                      ? "/images/thumbsUpPurple.png"
                      : "/images/thumbsUpGreen.png"
                  }
                  _width="11px"
                  _height="11px"
                />
                {props.likeCount}
              </Label>
            )}
          </TitleBox>

          <CardWrap>
            {articleContents && articleContents.length > 4 ? (
              <>
                {articleContents.slice(0, 3).map((content, idx) => (
                  <CardBox key={idx}>
                    <Card>
                      <CardTitle>
                        {content.titleOg !== null ? (
                          <LinesEllipsis
                            text={content.titlOg}
                            maxLine="2"
                            ellipsis="..."
                            trimRight
                            basedOn="words"
                          />
                        ) : (
                          "제목없음"
                        )}
                      </CardTitle>
                      <CardContents>
                        {content.contentOg !== null ? (
                          <LinesEllipsis
                            text={content.contentOg}
                            maxLine="2"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                          />
                        ) : (
                          "미리보기 내용을 불러올 수 없습니다"
                        )}
                      </CardContents>
                    </Card>
                  </CardBox>
                ))}
                <MoreCard>
                  <div>{articleContents.length - 3}개 더보기</div>
                </MoreCard>
              </>
            ) : (
              <>
                {articleContents &&
                  articleContents.map((content, idx) => (
                    <CardBox key={idx}>
                      <Card>
                        <CardTitle>
                          {content.titleOg !== null ? (
                            <LinesEllipsis
                              text={content.titleOg}
                              maxLine="2"
                              ellipsis="..."
                              trimRight
                              basedOn="words"
                            />
                          ) : (
                            "제목없음"
                          )}
                        </CardTitle>
                        <CardContents>
                          {content.contentOg !== null ? (
                            <LinesEllipsis
                              text={content.contentOg}
                              maxLine="2"
                              ellipsis="..."
                              trimRight
                              basedOn="letters"
                            />
                          ) : (
                            "미리보기 내용을 불러올 수 없습니다"
                          )}
                        </CardContents>
                      </Card>
                    </CardBox>
                  ))}
              </>
            )}
          </CardWrap>
        </CurationBox>
      </Container>
    </React.Fragment>
  );
};
const Container = styled.div`
  width: 100%;
  height: 450px;
`;

const CurationBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 24px 30px 0 22px;
  margin-bottom: 20px;
  overflow: hidden;
  ${props => props.folderColor === "green" && "background-color: #F2FDFA"};
  ${props => props.folderColor === "purple" && "background-color: #F7F7FD"};
  ${props => props.folderColor === "blue" && "background-color: #F0F7FB"};
  ${props => props.folderColor === "default" && "background-color: #F2F3F4"};
`;

const LabelBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 36px 0 0 0;
`;

const CardBox = styled.div`
  width: 100%;
  height: 146px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid #f2f4f6;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const MoreCard = styled(Card)`
  background-color: rgb(53, 60, 73, 0.025);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.div`
  padding: 0px 2px 6px 2px;
  color: ${({ theme }) => theme.colors.fontColor04};
  font-size: ${({ theme }) => theme.fontSizes.font14};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 20px;
`;

const CardContents = styled.div`
  color: ${({ theme }) => theme.colors.fontColor03};
  font-size: ${({ theme }) => theme.fontSizes.font12};
  line-height: 16px;
`;

export default ArticleFolderD;
