import { useState } from "react";

import styled from "styled-components";
import { Title, Button, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { createFolderAxios } from "../redux/modules/Folder";
import { postArticleAxios } from "../redux/modules/Article";

import Favorite from "./Favorite";
import { useNavigate } from "react-router";

const AddLinkTag = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const folderName = useSelector(
    state => state.localData.linkData.articleFolderName,
  );
  const linkData = useSelector(state => state.localData.linkData);
  const folderData = useSelector(state => state.localData.folderData);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const tagData = [...checkedItems];

  const articleData = {
    url: linkData.url,
    readCount: linkData.readCount,
    reminderDate: linkData.reminderDate,
    articleFolderName: linkData.articleFolderName,
    hashtag1: tagData[0],
    hashtag2: tagData[1] ? tagData[1] : null,
    hashtag3: tagData[2] ? tagData[2] : null,
  };

  const handleAddLink = () => {
    if (folderName === "미분류 컬렉션") {
      dispatch(postArticleAxios({ articleData, navigate }));
    } else {
      dispatch(createFolderAxios({ folderData, articleData, navigate }));
    }
  };

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
          <Text></Text>
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
        <Button _onClick={handleAddLink} _padding="18px">
          링크 저장
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
