import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import { registerAxios } from "../../redux/modules/User";

import styled from "styled-components";
import { Button, Title, Text } from "../../elements";
import { FlexboxColumn, FlexboxRow } from "../../styles/flexbox";

import FavoriteD from "../../components/common/FavoriteD";

import Swal from "sweetalert2";
import BubbleAnimation from "../../components/common/BubbleAnimation";

const UserFavoritesD = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // 다중 체크 아이템
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const newList = [...checkedItems];

  const userInfo = {
    kakaoId: location.state.kakaoId,
    email: location.state.email,
    memberName: location.state.nickname,
    profileImage: location.state.profileImage,
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
      dispatch(registerAxios({ userInfo, navigate }));
    }
  };

  return (
    <React.Fragment>
      <BaseDiv>
        <BubbleAnimation />
        <UserBox>
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

const BaseDiv = styled.div`
  ${FlexboxRow};
  width: 100vw;
  height: 100vh;
`;

const UserBox = styled.div`
  height: 100vh;
  width: 57vw;
  background-color: #ffffff;
  display: inline-block;
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

export default UserFavoritesD;
