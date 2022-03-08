import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../elements/Button";

const UserNickname = props => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Container>
        <div style={{padding: "16px"}}>
        <p style={{ margin: "0px", fontSize: "24px" }}>&#8249;</p>
        <div>
          <h3>
            내가 가진 멋진 닉네임을
            <br />
            자랑해주세요
          </h3>
        </div>
        <div>
          <UserInput placeholder="닉네임을 입력해주세요" />
          <p style={{ textAlign: "right", padding: "4px 0px" }}>0/6</p>
        </div>
        </div>
        <div style={{ position: "fixed", bottom: 0, width: "fit-content" }}>
          <Button
            onClick={() => {
              navigate("/category");
            }}
            name="다음"
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

// 스타일 컴포넌트 작성 위치
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  padding: 16px;
  width: max-content;
  &::placeholder {
    color: #e3e3e3;
  }
  &:focus {
    outline: none;
  }
`;

// default props 작성 위치
UserNickname.defaultProps = {};

export default UserNickname;
