import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { createFolderWithAxios } from "../../redux/modules/Folder";
import { postArticleAxios } from "../../redux/modules/Article";

import styled from "styled-components";
import { FlexboxRow } from "../../styles/flexbox";
import { Title, Button, Text, Image } from "../../elements";

import Favorite from "../common/Favorite";
import Swal from "sweetalert2";

const AddLinkTagD = props => {
  const { setShowModal, openModal, myFolderList } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (tagData.length < 1) {
      Swal.fire({
        text: "관심분야를 최소 한개는 선택해주세요",
        icon: "warning",
        confirmButtonText: "확인",
      });
    } else {
      if (myFolderList.includes(linkData.articleFolderName)) {
        dispatch(postArticleAxios({ articleData, navigate }));
      } else {
        dispatch(createFolderWithAxios({ folderData, articleData, navigate }));
      }
      openModal();
    }
  };

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
          <BackButton onClick={modalChange}>{"<"}</BackButton>
          <Title _fontSize={({ theme }) => theme.fontSizes.font16}>
            태그 선택
          </Title>
          <div />
        </TitleBox>
        <FavoritesBox>
          <NotiBox>
            <Image
              _src="/images/DesktopMain1.webp"
              _width="16px"
              _height="16px"
            />
            <Text
              _fontSize={({ theme }) => theme.fontSizes.font13}
              textAlign="center"
            >
              링크와 비슷한 유형의 태그부터 선택해주세요{" "}
              <TextSpan>(최대 3개)</TextSpan>
            </Text>
          </NotiBox>
          <Favorites onChange={handleChecked}>
            <Favorite />
          </Favorites>
        </FavoritesBox>
      </div>
      <ButtonBox>
        <Button _onClick={handleAddLink} _padding="18px">
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

const NotiBox = styled.div`
  ${FlexboxRow};
  align-items: center;
  padding: 8px 0 16px 0;
  & p {
    display: inline-block;
  }
`;

const TextSpan = styled.span`
  color: ${({ theme }) => theme.colors.fontColor01};
  font-size: ${({ theme }) => theme.fontSizes.font12};
  line-height: 16px;
`;

const ButtonBox = styled.div`
  padding-top: 20px;
  width: 334px;
`;

export default AddLinkTagD;
