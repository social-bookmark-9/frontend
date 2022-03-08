import React from "react";
import styled from "styled-components";

const Button = ({onClick, name}) => {
    return (
        <StyledButton onClick={onClick}>
            {name}
        </StyledButton>
    );
}


// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
    background-color: black;
    color: white;
    padding: 12px;
    width: 100%;
    border: none;
    box-sizing: border-box;

`;

// export
export default Button;