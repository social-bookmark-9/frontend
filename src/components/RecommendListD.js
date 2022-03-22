import { useState } from "react";
import { Title } from "../elements";
import styled from "styled-components";

const RecommendListD = () => {
  const images = [
    { id: 0, image: "/images/icon100.png" },
    { id: 1, image: "/images/icon101.png" },
    { id: 2, image: "/images/icon102.png" },
    { id: 3, image: "/images/icon103.png" },
    { id: 4, image: "/images/icon104.png" },
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
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

  return (
    <>
      <div
        style={{
          margin: "0 auto 0 auto",
          display: "flex",
          width: "1220px",
          paddingTop: "120px",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            width: "255px",
            marginRight: "10%",
            justifyContent: "start",
          }}
        >
          <Title _fontSize="34px" _lineHeight="41px" _padding="0 0 20px 0">
            <div style={{ marginTop: "-46px" }}>
              <img src="/images/DesktopMain1.png" width={"44px"} alt="icon" />
            </div>
            <div>이번달 버블러들이</div>
            <div>모은 글</div>
          </Title>
          <div>
            <FavoritesBox>
              <Favorites onChange={handleChecked}>
                {favoritesList.map((favor, idx) => (
                  <InputBox key={idx}>
                    <FavoriteInput
                      type="checkbox"
                      id={idx}
                      name={favor}
                      value={favor}
                    />
                    <FavoriteLabel htmlFor={idx}>
                      <img
                        src={`/images/icon${idx}.png`}
                        width={"20px"}
                        alt={`icon${idx}`}
                      />
                      {favor}
                    </FavoriteLabel>
                  </InputBox>
                ))}
              </Favorites>
            </FavoritesBox>
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          {images.map(item => {
            return (
              <div key={item.id} style={{ display: "inline-block" }}>
                <DesktopCard>
                  <div style={{ width: "30px", height: "30px" }}>
                    <img src={item.image} alt="" />
                  </div>
                  대충 글씨
                </DesktopCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Card = styled.div`
  height: 240px;
  width: 95%;
  padding: 10px;
  margin: 0 6px 0 6px;
  border: 1px solid #f2f4f6;
  border-radius: 20px;
  overflow: hidden;
  background-color: #505866;
  & img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const DesktopCard = styled(Card)`
  width: 358px;
  margin: 0 10px 10px 0;
`;

const FavoritesBox = styled.div`
  width: 100%;
`;

const Favorites = styled.div`
  margin: auto;
  width: 317px;
  justify-content: center;
  text-align: left;
`;

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

export default RecommendListD;
