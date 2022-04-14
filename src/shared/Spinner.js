import React from "react";
import styled from "styled-components";
import { Image, Title } from "../elements";

const Spinner = props => {
  return (
    <React.Fragment>
      <Section>
        <Image
          _src="/images/bubbled.webp"
          _width="65px"
          _height="52px"
          _marginR="0px"
        />
        <Title>bubbled</Title>
      </Section>
    </React.Fragment>
  );
};

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fafbfb;
  & h1 {
    padding-top: 16px;
  }
`;

export default Spinner;
