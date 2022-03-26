import { useState } from "react";

import styled from "styled-components";
import { Button, Text } from "../../elements";

import Favorite from "../common/Favorite";

const ChangeTag = props => {
  const { setShowModal } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const modalChange = () => {
    setShowModal(current => !current);
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
          <Text _fontSize="14px">태그 선택</Text>
        </TitleBox>
        <FavoritesBox>
          <Favorites onChange={handleChecked}>
            <Favorite />
          </Favorites>
        </FavoritesBox>
      </div>
      <ButtonBox>
        <Button _onClick={modalChange} _padding="18px">
          링크 저장
        </Button>
      </ButtonBox>
    </>
  );
};

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  padding-right: 56px;
  position: fixed;
  bottom: 24px;
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

export default ChangeTag;
