import { Title } from "../elements";
import { Button } from "../elements";
import ArticleFolder from "./ArticleFolder";
import { useNavigate } from "react-router";
import { Desktop, Tablet, Mobile } from "../styles/mediaquery";
import ArticleFolderDesktop from "./ArticleFolderDesktop";

const Curations = () => {
  const navigate = useNavigate();
  const folderList = [0, 1, 2, 3];

  return (
    <>
      <Desktop>
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
              <ArticleFolderDesktop
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
              ></ArticleFolderDesktop>
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
      </Desktop>

      <Tablet>
        <div
          style={{
            margin: "0 auto 0 auto",
            maxWidth: "1194px",
            padding: "28px 40px 0 40px",
          }}
        >
          <Title _padding="0 0 20px 0">추천 큐레이션</Title>
          {folderList.map((folderId, idx) => (
            <div
              key={idx}
              style={{
                width: "359px",
                margin: "0 19px 16px 0",
                display: "inline-block",
              }}
            >
              <ArticleFolder
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
              ></ArticleFolder>
            </div>
          ))}

          <div style={{ textAlign: "center", margin: "18px auto 0 auto" }}>
            <div style={{ display: "inline-block" }}>
              <Button
                _width="359px"
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
      </Tablet>

      <Mobile>
        <div style={{ width: "100%" }}>
          <div style={{ padding: "28px 19px 0 20px" }}>
            <Title _padding="0 0 19px 0">추천 큐레이션</Title>
            {folderList.map((folderId, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <ArticleFolder
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
                ></ArticleFolder>
              </div>
            ))}

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
      </Mobile>
    </>
  );
};

export default Curations;
