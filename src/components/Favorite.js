import React from "react";
import styled from "styled-components";

const Favorite = props => {
  const { favoriteName, idx } = props;

  return (
    <React.Fragment>
      <InputBox>
        <FavoriteInput
          type="checkbox"
          id={idx}
          name={favoriteName}
          value={favoriteName}
        />
        <FavoriteLabel htmlFor={idx}>
          <img src={`/images/${idx}.png`} width={"20px"} alt={`icon${idx}`} />
          {favoriteName}
        </FavoriteLabel>
      </InputBox>
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
