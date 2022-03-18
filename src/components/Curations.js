import { Title } from "../elements";
import { Button } from "../elements";
import ArticleFolder from "./ArticleFolder";
import { useNavigate } from "react-router";


const Curations = () => {
  const navigate = useNavigate();
  const folderList = [0, 1, 2, 3];

  return (
    <div style={{width:"100%"}}>
      <Title _padding="28px 0 9px 20px">추천 큐레이션</Title>
      {folderList.map((folderId, idx) => (
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
        >
        </ArticleFolder>
      ))}

      <div style={{margin:"18px 16px"}}>
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
  )

}


export default Curations;