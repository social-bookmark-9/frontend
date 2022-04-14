import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { editProfileHashtagAxios } from "../../redux/modules/Profile";

import styled from "styled-components";
import { FlexboxColumn, FlexboxRow } from "../../styles/flexbox";
import { Button, Title, Text, Image } from "../../elements";

import FavoriteD from "../common/FavoriteD";

import Swal from "sweetalert2";

const EditFavoritesD = props => {
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
      <BaseDiv>
        <div
          style={{ backgroundColor: "#c4c4c4", height: "100vh", width: "45vw" }}
        />
        <UserBox>
          <CloseButtonBox onClick={handleExit}>
            <Image
              _src="/images/close.webp"
              _width="30px"
              _height="30px"
              _marginR="0px"
            />
          </CloseButtonBox>
          <Topdiv>
            <TitleBox>
              <Title
                textAlign="left"
                _fontSize={({ theme }) => theme.fontSizes.font24}
                _lineHeight="38px"
              >
                관심있는 분야를 선택해주세요.
              </Title>
              <Text
                textAlign="left"
                _padding="22px 0px"
                _color={({ theme }) => theme.colors.fontColor02}
                _fontSize={({ theme }) => theme.fontSizes.font16}
                _lineHeight="22px"
              >
                최대 3개까지 선택 가능해요
              </Text>
            </TitleBox>
            <FavoritesBox>
              <Favorites onChange={handleChecked}>
                <FavoriteD />
              </Favorites>
            </FavoritesBox>
          </Topdiv>

          <Button
            _onClick={handleRegister}
            _fontSize={({ theme }) => theme.fontSizes.font20}
            borderRadius="0px"
            _padding="19px 0px"
            _width="547px"
          >
            선택완료
          </Button>
        </UserBox>
      </BaseDiv>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치

const CloseButtonBox = styled.div`
  position: absolute;
  top: 125px;
  left: 635px;
`;

const BaseDiv = styled.div`
  ${FlexboxRow};
  width: 100vw;
  height: 100vh;
  padding-top: 82px;
  background-color: #ffffff;
`;

const UserBox = styled.div`
  width: 57vw;
  display: inline-block;
  position: relative;
  padding-left: 115px;
`;

const Topdiv = styled.div`
  ${FlexboxColumn}
  align-items: left;
  text-align: left;
  height: 75vh;
`;

const TitleBox = styled.div`
  padding: 28px 0px;
  text-align: left;
`;

const FavoritesBox = styled.div`
  width: 100%;
  text-align: left;
`;

const Favorites = styled.div`
  width: 472px;
  justify-content: center;
  text-align: left;
`;

export default EditFavoritesD;
