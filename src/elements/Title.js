import styled from "styled-components";

const Title = ({text}) => {
    return (
        <H1>{text}</H1>
    );
}

// 스타일 컴포넌트 작성 위치
const H1 = styled.h1`
    color: black;
    margin: auto;
    text-align: center;
`

export default Title;