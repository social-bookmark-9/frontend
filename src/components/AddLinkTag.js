import { useState } from "react";
import styled from "styled-components";
import Favorite from "./Favorite";
import { Title, Button } from "../elements";

const AddLinkTag = props => {
  const { setAddLink, checkedItems, setCheckedItems } = props;
  // 완료
  const addLinkFinish = () => {
    props.setShowModal(current => !current);
    setAddLink(true);
  };

  const [isChecked, setIsChecked] = useState(false);
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

  const modalChange = () => {
    props.setShowModal(current => !current);
  };

  const handleChecked = e => {
    setIsChecked(!isChecked);
    handleCheckedItems(e.target.parentNode, e.target.value, e.target.checked);
  };

  const handleCheckedItems = (box, value, isChecked) => {
    if (isChecked && checkedItems.size < 3) {
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
      <div style={{ height: "270" }}>
        <TitleBox>
          <BackButton onClick={modalChange}>{"<"}</BackButton>
          <Title _fontSize={({ theme }) => theme.fontSizes.font16}>
            태그 선택
          </Title>
          <div />
        </TitleBox>
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
        <Button _onClick={addLinkFinish} _padding="18px">
          완료
        </Button>
      </div>
    </>
  );
};

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -22px;
`;

const BackButton = styled.div`
  display: inline-block;
`;

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