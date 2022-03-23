import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { Title } from "../elements";

const Spinner = props => {
  return (
    <React.Fragment>
      <Section>
        <ReactLoading type="bubbles" color="#000000" />
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
`;

export default Spinner;
