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
    padding: 0.5em 1em;
`;

// export
export default Button;