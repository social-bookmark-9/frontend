import React from "react";
import styled from "styled-components";
import { Title } from "../elements";
import { Button } from "../elements";
import ArticleFolder from "./ArticleFolder";
import { useNavigate } from "react-router";

const Curations = props => {
  const { folderList } = props;

  const navigate = useNavigate();

  return (
    <CurationContainer>
      <CurationBox>
        <Title _padding="0 0 19px 0">추천 큐레이션</Title>
        {folderList.map((folder, idx) => (
          <FolderBox
            key={idx}
            _onClick={() => {
              navigate(`/articles/${folder.folderId}`);
            }}
          >
            <ArticleFolder
              key={idx}
              folderColor={
                idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
              }
              folder={folder}
            ></ArticleFolder>
          </FolderBox>
        ))}
        <Button
          _padding="12px"
          bgColor="#ffffff"
          _color="#383838"
          isBorder="true"
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
`;

const FolderBox = styled.div`
  margin-bottom: 16px;
`;

export default Curations;
