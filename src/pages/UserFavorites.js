import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import UserTitle from "../elements/Box";
import Favorite from "../components/Favorite";

const UserFavorites = props => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

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

  console.log(checkedItems);

  const handleChecked = e => {
    setIsChecked(!isChecked);
    handleCheckedItems(e.target.parentNode, e.target.value, e.target.checked);
    console.log(e.target.parentNode);
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
    <React.Fragment>
      <UserBox>
        <UserArea>
          <UserTitle textAlign="center" padding="114px 0px 101px 0px">
            <h3>
              관심있는 분야를
              <br />
              선택해주세요
            </h3>
            <p>최대 3개까지 선택 가능해요</p>
          </UserTitle>
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
            _onClick={() => {
              navigate("/");
            }}
            name="선택완료"
            margin="0px"
            _fontSize={({ theme }) => theme.fontSizes.font20}
            height="63px"
          />
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
