import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const UserNickname = props => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container style={{ padding: "20px", margin: "0px" }}>
        <p style={{ margin: "0px" }}>뒤로가기</p>
        <div>
          <h3>
            내가 가진 멋진 닉네임을
            <br />
            자랑해주세요
          </h3>
        </div>
        <div style={{ width: "100%" }}>
          <UserInput placeholder="닉네임을 입력해주세요" />
          <p style={{ textAlign: "right", margin: "4px 0px" }}>0/6</p>
        </div>
        <div style={{ position: "fixed", bottom: 0 }}>
          <UserBtn
            onClick={() => {
              navigate("/category");
            }}
          >
            다음
          </UserBtn>
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

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  padding: 16px;
  &::placeholder {
    color: #e3e3e3;
  }
  &:focus {
    outline: none;
  }
`;
const UserBtn = styled.button`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
`;
// default props 작성 위치
UserNickname.defaultProps = {};

export default UserNickname;
