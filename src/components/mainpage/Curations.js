import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Button } from "../../elements";

import ArticleFolder from "../folderpage/ArticleFolder";

const Curations = props => {
  const { folderList } = props;
  // const myId = useSelector(state => state.user.myInfo.memberId);

  const navigate = useNavigate();

  return (
    <CurationContainer>
      <CurationBox>
        <Title _padding="0 0 19px 0">추천 큐레이션</Title>
        <FolderContainer>
          {folderList.map((folder, idx) => (
            <FolderBox
              key={idx}
              onClick={() => {
                navigate(`/articles/${folder.folderId}`);
              }}
            >
              <ArticleFolder
                key={idx}
                folderColor={
                  idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
                }
                // myId={myId}
                memberId={folder.memberId}
                folder={folder}
                {...folder}
              />
            </FolderBox>
          ))}
        </FolderContainer>

        <Button
          _padding="12px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.gray07}
          isBorder
        >
          더보기
        </Button>
      </CurationBox>
    </CurationContainer>
  );
};

const CurationContainer = styled.div`
  width: 100%;
`;

const CurationBox = styled.div`
  padding: 28px 16px;
  @media screen and (min-width: 768px) and (max-width: 1194px) {
    & button {
      width: 359px;
      margin: 0 auto;
    }
  }
`;

const FolderContainer = styled.div`
  padding-bottom: 45px;
  @media screen and (min-width: 920px) and (max-width: 1194px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    column-gap: 16px;
    justify-content: start;
    grid-auto-flow: dense;
  }
  @media screen and (min-width: 768px) and (max-width: 919px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(48%, auto));
    column-gap: 16px;
    justify-content: start;
    grid-auto-flow: dense;
  }
`;

const FolderBox = styled.div`
  margin-bottom: 16px;
`;

export default Curations;
