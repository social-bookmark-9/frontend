import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import Title from "../elements/Title";
import Text from "../elements/Text";
import Favorite from "../components/Favorite";
import { registerAxios } from "../redux/modules/User";
import { useDispatch } from "react-redux";

const UserFavorites = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const newList = [...checkedItems];
  console.log(newList);

  const userInfo = {
    kakaoId: location.state.kakaoId,
    email: location.state.email,
    memberName: location.state.nickname,
    profileImage: location.state.profileImage,
    hashtag1: newList[0],
    hashtag2: (newList[1]) ? newList[1] : "null",
    hashtag3: (newList[2]) ? newList[2] : "null"
  };

  console.log("여기는 마지막 확인");
  console.log(location.state);

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

  const handleRegister = (e) => {
    if (newList.length < 1){
      alert("관심분야를 최소 한개는 선택해주세요")
    }
    else {
    // console.log(userInfo);
    // navigate("/");
    dispatch(registerAxios({ userInfo, navigate }));
    }
  }

  return (
    <React.Fragment>
      <UserBox>
        <UserArea>
          <TitleBox>
            <Title
              textAlign="center"
              _fontSize={({ theme }) => theme.fontSizes.font24}
              _lineHeight="32px"
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
              {favoritesList.map((favor, idx) => (
                <Favorite key={idx} idx={idx} favoriteName={favor} />
              ))}
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
  padding: 100px 0px;
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

export default UserFavorites;
