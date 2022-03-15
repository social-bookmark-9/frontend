import { useState } from "react";
import Text from "../elements/Text";
import styled from "styled-components";
import Favorite from "../components/Favorite";
import Button from "../elements/Button";

const AddLinkTag = props => {
  // 뒤로가기
  const goBack = () => {
    props.setAddStage(true);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const favoritesList = [
    "커리어",
    "업무스킬",
    "IT",
    "디자인",
    "마케팅",
    "투자",
    "장소",
    "인간관계",
    "동기부여",
    "패션",
    "예술",
    "과학",
  ];

  const handleChecked = e => {
    setIsChecked(!isChecked);
    handleCheckedItems(e.target.parentNode, e.target.value, e.target.checked);
  };

  const handleCheckedItems = (box, value, isChecked) => {
    if (isChecked && checkedItems.size < 2) {
      checkedItems.add(value);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#d2d6da";
    } else if (!isChecked && checkedItems.has(value)) {
      checkedItems.delete(value);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#ffffff";
    }
    return checkedItems;
  };

  return (
    <>
      {/* <div style={{marginTop:"-18px"}}>
        <button onClick={goBack}>{"<"}</button>
      </div> */}
      <div style={{ height: "270" }}>
        <Text>태그 선택</Text>
        <FavoritesBox>
          <Favorites onChange={handleChecked}>
            {favoritesList.map((favor, idx) => (
              <Favorite key={idx} idx={idx} favoriteName={favor} />
            ))}
          </Favorites>
        </FavoritesBox>
      </div>
      <div
        style={{
          width: "100%",
          paddingRight: "56px",
          position: "fixed",
          bottom: "24px",
        }}
      >
        <Button _onClick={goBack} _padding="18px">
          완료
        </Button>
      </div>
    </>
  );
};

const FavoritesBox = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const Favorites = styled.div`
  margin: auto;
  width: 317px;
  justify-content: center;
  text-align: center;
`;

export default AddLinkTag;
