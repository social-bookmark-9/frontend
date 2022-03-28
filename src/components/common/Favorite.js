import React from "react";
import styled from "styled-components";

const Favorite = props => {
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
    "기타",
  ];

  return (
    <React.Fragment>
      {favoritesList.map((favoriteName, idx) => (
        <InputBox key={idx}>
          <FavoriteInput
            type="checkbox"
            id={idx}
            name={favoriteName}
            value={favoriteName}
          />
          <FavoriteLabel htmlFor={idx}>
            <img
              src={`/images/icon${idx}.png`}
              width={"20px"}
              alt={`icon${idx}`}
            />
            {favoriteName}
          </FavoriteLabel>
        </InputBox>
      ))}
    </React.Fragment>
  );
};

const InputBox = styled.div`
  display: inline-block;
  margin: 4px;
  border-radius: 8px;
`;

const FavoriteInput = styled.input`
  display: none;
`;

const FavoriteLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 0.8px solid #d2d6da;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
`;

Favorite.defaultProps = {
  name: "",
  idx: 0,
};

export default Favorite;
