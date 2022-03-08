import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import { logger } from "../shared/utils";
import UserTitle from "../elements/Box";

const UserNickname = props => {
  const navigate = useNavigate();
  const [words, setWords] = useState(0);
  const [nickname, setNickname] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const favorList = [
    "💼 커리어",
    "📋 업무스킬",
    "💻 IT",
    "🪄 디자인",
    "📊 마케팅",
    "🤑 투자",
    "🎡 장소",
    "❤️‍🔥 인간관계",
    "👏 동기부여",
    "👕 패션",
    "🎨 예술",
    "🧪 과학",
  ];

  logger(nickname);

  const handleToggle = e => {
    if (nickname) {
      setIsFocus(true);
    } else {
      alert("닉네임을 입력해주세요");
      e.preventDefault();
    }
  };

  const handleChange = e => {
    setNickname(e.target.value);
  };

  const handleKeyUp = e => {
    if (e.target.value.length <= 6) {
      setWords(e.target.value.length);
    }
  };

  return (
    <React.Fragment>
      <UserBox>
        {isFocus ? (
          <>
            <UserArea>
              <UserTitle textAlign="center">
                <h3>
                  관심있는 분야를
                  <br />
                  선택해주세요
                </h3>
                <p>최대 3개까지 선택 가능해요</p>
              </UserTitle>
              <FavoritesBox>
                {favorList.map((favorite, idx) => (
                  <Favorites key={idx}>
                    <input type="checkbox" id={idx} name={favorite} />
                    <label htmlFor={idx}>{favorite}</label>
                  </Favorites>
                ))}
              </FavoritesBox>
            </UserArea>
            <ButtonBox>
              <Button
                onClick={() => {
                  navigate("/category");
                }}
                name="선택완료"
                width="100%"
              />
            </ButtonBox>
          </>
        ) : (
          <>
            <UserArea>
              <BackButton
                onClick={() => {
                  navigate(-1);
                }}
              >
                &#8249;
              </BackButton>
              <UserTitle>
                <h3>
                  내가 가진 멋진 닉네임을
                  <br />
                  자랑해주세요
                </h3>
              </UserTitle>
              <InputBox>
                <UserInput
                  placeholder="닉네임을 입력해주세요"
                  maxLength={6}
                  onKeyUp={handleKeyUp}
                  onChange={handleChange}
                />
                <p style={{ textAlign: "right", padding: "4px 0px" }}>
                  {words}/6
                </p>
              </InputBox>
            </UserArea>
            <ButtonBox>
              <Button onClick={handleToggle} name="다음" width="100%" />
            </ButtonBox>
          </>
        )}
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
  padding: 16px;
`;

const BackButton = styled.p`
  font-size: 40px;
`;

const InputBox = styled.div`
  padding: 48px 0px;
`;

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  padding: 16px;
  width: 100%;
  &::placeholder {
    color: #e3e3e3;
  }
  &:focus {
    outline: none;
  }
`;

const FavoritesBox = styled.div`
  margin: auto;
  width: 300px;
`;

const Favorites = styled.div`
  margin: 14px 0px;
  display: inline-block;
  width: 100px;
  justify-content: space-evenly;
  & input {
    display: none;
  }
  & label {
    border: 1px solid #dcdcdc;
    padding: 8px;
    border-radius: 5px;
  }
  & input:checked + label {
    background-color: #ececec;
    color: #383838;
  }
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// default props 작성 위치
UserNickname.defaultProps = {};

export default UserNickname;
