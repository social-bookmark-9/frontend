import React from "react";
import { useNavigate, useLocation } from "react-router";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import Button from "../elements/Button";
import UserTitle from "../elements/Box";

const UserFavorites = props => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state)

  return (
    <React.Fragment>
      <UserBox>
        <UserArea>
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8249;
          </BackButton>
          <UserTitle textAlign="center" padding="50px 0px">
            <h3>
              관심있는 분야를
              <br />
              선택해주세요
            </h3>
            <p>최대 3개까지 선택 가능해요</p>
          </UserTitle>
          <FavoritesBox>
            <Favorites>
              <input type="checkbox" id="career" name="커리어" />
              <label htmlFor="career">💼 커리어</label>
              <input type="checkbox" id="skill" name="업무스킬" />
              <label htmlFor="skill">📋 업무스킬</label>
              <input type="checkbox" id="IT" name="IT" />
              <label htmlFor="IT">💻 IT</label>
            </Favorites>
            <Favorites style={{ textAlign: "right" }}>
              <input type="checkbox" id="design" name="디자인" />
              <label htmlFor="design">🪄 디자인</label>
              <input type="checkbox" id="marketing" name="마케팅" />
              <label htmlFor="marketing">📊 마케팅</label>
              <input type="checkbox" id="invest" name="투자" />
              <label htmlFor="invest">🤑 투자</label>
            </Favorites>
            <Favorites>
              <input type="checkbox" id="place" name="장소" />
              <label htmlFor="place">🎡 장소</label>
              <input type="checkbox" id="relationship" name="인간관계" />
              <label htmlFor="relationship">❤️‍🔥 인간관계</label>
              <input type="checkbox" id="motivation" name="동기부여" />
              <label htmlFor="motivation">👏 동기부여</label>
            </Favorites>
            <Favorites style={{ textAlign: "right" }}>
              <input type="checkbox" id="fashion" name="패션" />
              <label htmlFor="fashion">👕 패션</label>
              <input type="checkbox" id="art" name="예술" />
              <label htmlFor="art">🎨 예술</label>
              <input type="checkbox" id="science" name="과학" />
              <label htmlFor="science">🧪 과학</label>
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
            _fontSize={({theme}) => theme.fontSizes.font20}
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
  padding: 16px;
`;

const BackButton = styled.p`
  font-size: 40px;
`;

const FavoritesBox = styled.div`
  margin: auto;
  width: 300px;
`;

const Favorites = styled.div`
  margin: 30px 0px;
  & input {
    display: none;
  }
  & label {
    border: 1px solid #dcdcdc;
    padding: 8px;
    border-radius: 8px;
    margin: 0px 4px;
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

export default UserFavorites;
