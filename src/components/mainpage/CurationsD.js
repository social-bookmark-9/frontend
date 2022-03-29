import React from "react";
import { useNavigate } from "react-router";

import { Title, Button } from "../../elements";

import ArticleFolderD from "../folderpage/ArticleFolderD";

const CurationsD = () => {
  const navigate = useNavigate();
  const folderList = [0, 1, 2, 3];

  return (
    <div
      style={{
        margin: "0 auto 0 auto",
        display: "flex",
        width: "1220px",
        paddingTop: "120px",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          width: "255px",
          marginRight: "10%",
          justifyContent: "start",
        }}
      >
        <div style={{ marginTop: "-46px" }}>
          <img src="/images/DesktopMain2.png" width={"44px"} alt="icon" />
        </div>
        <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
          <div>추천 큐레이션</div>
        </Title>
        <div style={{ fontSize: "20px", color: "#b1b8c0" }}>
          설명설명설명설명
        </div>
      </div>
      <div
        style={{
          display: "inline-block",
          flexDirection: "column",
          justifyContent: "end",
        }}
      >
        {folderList.map((folderId, idx) => (
          <ArticleFolderD
            key={idx}
            _onClick={() => {
              navigate("/articles");
            }}
            folderColor={
              folderId % 3 === 0
                ? "green"
                : folderId % 3 === 1
                ? "purple"
                : "blue"
            }
          ></ArticleFolderD>
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
      </div>
    </div>
  );
};

export default CurationsD;
