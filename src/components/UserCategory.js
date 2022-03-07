import React from "react";
import styled from "styled-components";

const UserCategory = props => {
  return (
    <React.Fragment>
      <Container style={{ padding: "20px", margin: "0px" }}>
        <p>뒤로가기</p>
        <div style={{ textAlign: "center" }}>
          <h3>
            관심있는 분야를
            <br />
            선택해주세요
          </h3>
          <p>최대 3개까지 선택 가능해요</p>
        </div>

        <CategoryBox>
          <input type="checkbox" id="career" name="커리어" />
          <label htmlFor="career">💼 커리어</label>
          <input type="checkbox" id="skill" name="업무스킬" />
          <label htmlFor="skill">📋 업무스킬</label>
          <input type="checkbox" id="IT" name="IT" />
          <label htmlFor="IT">💻 IT</label>
        </CategoryBox>
        <CategoryBox>
          <input type="checkbox" id="design" name="디자인" />
          <label htmlFor="design">🪄 디자인</label>
          <input type="checkbox" id="marketing" name="마케팅" />
          <label htmlFor="marketing">📊 마케팅</label>
          <input type="checkbox" id="invest" name="투자" />
          <label htmlFor="invest">🤑 투자</label>
        </CategoryBox>
        <CategoryBox>
          <input type="checkbox" id="place" name="장소" />
          <label htmlFor="place">🎡 장소</label>
          <input type="checkbox" id="relationship" name="인간관계" />
          <label htmlFor="relationship">❤️‍🔥 인간관계</label>
          <input type="checkbox" id="motivation" name="동기부여" />
          <label htmlFor="motivation">👏 동기부여</label>
        </CategoryBox>
        <CategoryBox>
          <input type="checkbox" id="fashion" name="패션" />
          <label htmlFor="fashion">👕 패션</label>
          <input type="checkbox" id="art" name="예술" />
          <label htmlFor="art">🎨 예술</label>
          <input type="checkbox" id="science" name="과학" />
          <label htmlFor="science">🧪 과학</label>
        </CategoryBox>
        <div style={{ position: "fixed", bottom: 0 }}>
          <button>선택완료</button>
        </div>
      </Container>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;
const CategoryBox = styled.div`
  margin: 8px 0px;
  & input {
    display: none;
  }
  & label {
    border: 1px solid #dcdcdc;
    padding: 4px;
    margin-right: 4px;
    border-radius: 10px;
  }
  & input:checked + label {
    background-color: #ececec;
    color: #383838;
  }
`;

// default props 작성 위치
UserCategory.defaultProps = {};

export default UserCategory;
