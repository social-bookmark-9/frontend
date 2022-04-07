import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Title, Button } from "../../elements";

import ArticleFolderD from "../folderpage/ArticleFolderD";

const CurationsD = props => {
  const { folderList } = props;
  const navigate = useNavigate();
  const myId = useSelector(state => state.user.myInfo.memberId);

  return (
    <CurationContainer>
      <CurationExplain>
        <div style={{ marginTop: "-46px" }}>
          <img src="/images/DesktopMain2.png" width={"44px"} alt="icon" />
        </div>
        <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
          <div>추천 큐레이션</div>
        </Title>
        <div style={{ fontSize: "20px", color: "#b1b8c0" }}>
          버블드가 직접 엄선한
          <br />
          유저들의 큐레이션을
          <br /> 만나보세요
        </div>
      </CurationExplain>

      <CurationBox>
        {folderList.map((folder, idx) => (
          <FolderBox
            key={idx}
            onClick={() => {
              navigate(`/articles/${folder.folderId}`);
            }}
          >
            <ArticleFolderD
              key={idx}
              folderColor={
                idx % 3 === 0 ? "green" : idx % 3 === 1 ? "purple" : "blue"
              }
              myId={myId}
              memberId={folder.memberId}
              folder={folder}
              {...folder}
            />
          </FolderBox>
        ))}

        <div style={{ marginTop: "38px" }}>
          <Button
            _padding="12px"
            bgColor="#ffffff"
            _color="#383838"
            isBorder="true"
          >
            더보기
          </Button>
        </div>
      </CurationBox>
    </CurationContainer>
  );
};

const CurationContainer = styled.div`
  margin: 0 auto 0 auto;
  display: flex;
  width: 1220px;
  padding-top: 120px;
`;

const CurationExplain = styled.div`
  flex-direction: column;
  width: 35%;
  justify-content: start;
`;

const CurationBox = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: end;
  width: 65%;
`;

const FolderBox = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export default CurationsD;
