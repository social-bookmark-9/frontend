import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editProfileHashtagAxios } from "../../redux/modules/Profile";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Button, Title, Text, Image  } from "../../elements";

import Favorite from "../../components/common/Favorite";

import Swal from "sweetalert2";

const UserFavoritesT = props => {
  const dispatch = useDispatch();

  // 다중 체크 아이템
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const newList = [...checkedItems];

  const hashTag = {
    hashtag1: newList[0],
    hashtag2: newList[1] ? newList[1] : null,
    hashtag3: newList[2] ? newList[2] : null,
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

  const handleRegister = e => {
    if (newList.length < 1) {
      Swal.fire({
        text: "관심분야를 최소 한개는 선택해주세요",
        icon: "warning",
        confirmButtonText: "확인",
      });
    } else {
      props.setIsEdit(false);
      dispatch(editProfileHashtagAxios(hashTag));
    }
  };

  const handleExit = () => {
    props.setIsEdit(false);
  };

  return (
    <React.Fragment>
      <UserBox>
        <UserArea>
          <TitleBox>
            <Title
              textAlign="left"
              _fontSize={({ theme }) => theme.fontSizes.font24}
              _lineHeight="38px"
              _padding="0 0 4px 0"
            >
              관심있는 분야를 선택해주세요
            </Title>
            <Text textAlign="left">최대 3개까지 선택 가능해요</Text>
          </TitleBox>
          <FavoritesBox>
            <Favorites onChange={handleChecked}>
              <Favorite />
            </Favorites>
          </FavoritesBox>
        </UserArea>
        <ButtonBox>
          <Button
            _onClick={handleRegister}
            _fontSize={({ theme }) => theme.fontSizes.font20}
            borderRadius="0px"
            _padding="18px 0px"
          >
            선택완료
          </Button>
        </ButtonBox>
      </UserBox>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치
const UserBox = styled.div`
  width: 100%;
  text-align: center;
`;

const UserArea = styled.div`
  ${FlexboxColumn}
  align-items: center;
  height: 75vh;
  text-align: left;
`;

const TitleBox = styled.div`
  width: 547px;
  margin-bottom: 78px;
`;

const FavoritesBox = styled.div`
  width: 547px;
`;

const Favorites = styled.div`
  width: 472px;
  justify-content: center;
  text-align: left;
`;

const ButtonBox = styled.div`
  bottom: 0;
  width: 547px;
  text-align: center;
  display: inline-block;
`;

export default UserFavoritesT;
