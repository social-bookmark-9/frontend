import React from "react";
import styled from "styled-components";

const BubbleAnimation = props => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderBox />
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.div`
  width: 43vw;
  padding: 188px 0px;
  background-color: ${({ theme }) => theme.colors.gray07};
`;

const HeaderBox = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray07};
  background-image: url("/images/loginGif.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default BubbleAnimation;
