import { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import Swal from "sweetalert2";
import { Button, Text } from "../../elements";
import { updateHashtagAxios } from "../../redux/modules/Article";

import Favorite from "../common/Favorite";

const ChangeTag = props => {
  const { articleId } = props;

  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const tagList = [...checkedItems];
  const tagData = {
    hashtag1: tagList[0],
    hashtag2: tagList[1] ? tagList[1] : null,
    hashtag3: tagList[2] ? tagList[2] : null,
  };

  const changeTags = () => {
    Swal.fire({
      text: "선택하신 태그로 변경할까요?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(updateHashtagAxios({ articleId, tagData }));
        Swal.fire({ text: "변경되었습니다", confirmButtonText: "확인" });
      }
    });
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
      <TagBox>
        <TitleBox>
          <Text _fontSize="14px">태그 선택</Text>
        </TitleBox>
        <FavoritesBox>
          <Favorites onChange={handleChecked}>
            <Favorite tagList={tagList} />
          </Favorites>
        </FavoritesBox>
      </TagBox>
      <ButtonBox>
        <Button _onClick={changeTags} _padding="18px">
          태그 변경하기
        </Button>
      </ButtonBox>
    </>
  );
};

const TagBox = styled.div`
  height: 270px;
`;

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
