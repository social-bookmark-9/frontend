import React from "react";
import styled from "styled-components";

const Button = ({onClick, name, width, height, margin, bgColor}) => {
    return (
        <StyledButton
            onClick={onClick}
            width={width}
            height={height}
            margin={margin}
            bgColor={bgColor}
        >
            {name}
        </StyledButton>
    );
}

// 스타일드 컴포넌트 작성 위치
const StyledButton = styled.button`
    background-color: ${props => props.bgColor || "black" };
    color: white;
    padding: 0.5em 1em;
    margin: ${props => props.margin || "20 0 20 0" };
    width: ${props => props.width || "100%" };
    height: ${props => props.height || "10vh" };
`;

// export
export default Button;