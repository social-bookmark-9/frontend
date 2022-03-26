import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editProfileHashtagAxios } from "../../redux/modules/Profile";

import styled from "styled-components";
import { FlexboxColumn } from "../../styles/flexbox";
import { Button, Title, Text } from "../../elements";

import Favorite from "../common/Favorite";

import Swal from "sweetalert2";

const EditFavorites = props => {
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
      box.style.backgroundColor = "#D2D6DA";
    } else if (!isChecked && checkedItems.has(value)) {
      checkedItems.delete(value);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#FFFFFF";
    }
    return checkedItems;
  };

  const handleRegister = e => {
    if (newList.length < 1) {
      Swal.fire({
        text: "관심분야를 최소 한개는 선택해주세요",
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#353C49",
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ display: "flex", width: "80%", justifyContent: "start" }}
        />
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "end",
            padding: "14px 14px 0 0",
          }}
        >
          <img
            src="/images/close.png"
            width="24px"
            height="24px"
            alt=""
            onClick={handleExit}
          />
        </div>
      </div>
      <UserBox>
        <UserArea>
          <TitleBox>
            <Title
              textAlign="center"
              _fontSize={({ theme }) => theme.fontSizes.font24}
              _lineHeight="38px"
              _padding="15px 0px"
            >
              관심있는 분야를
              <br />
              선택해주세요
            </Title>
            <Text textAlign="center">최대 3개까지 선택 가능해요</Text>
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
  ${FlexboxColumn}
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const UserArea = styled.div`
  padding: 0px 36px;
`;

const TitleBox = styled.div`
  padding: 65px 0px;
`;

const FavoritesBox = styled.div`
  width: 100%;
`;

const Favorites = styled.div`
  margin: auto;
  width: 317px;
  justify-content: center;
  text-align: center;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default EditFavorites;
