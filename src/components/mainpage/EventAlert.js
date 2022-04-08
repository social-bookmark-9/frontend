import React from "react";

import styled from "styled-components";
import { Text, Button } from "../../elements";
import { FlexboxSpace } from "../../styles/flexbox";

const EventAlert = props => {
  const handleAlert = () => {
    const alertBox = document.getElementById("alertBox");
    alertBox.style.cssText = `display: none;`;
  };

  return (
    <React.Fragment>
      <Container id="alertBox">
        <AlertBox>
          <EmptyBox />
          <TextBox
            href="https://docs.google.com/forms/d/1a8-aYpDY8tdUg9Gyva-w9xfTDB2qHvfV4S1lprffIyA/edit"
            target="_blank"
          >
            <Text
              _color={({ theme }) => theme.colors.white}
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _padding="19px 0px"
            >
              더 나은 버블드를 만들기 위해, 소중한 의견을 남겨주세요!
            </Text>
          </TextBox>
          <CloseBox onClick={handleAlert}>
            <Button
              bgColor="none"
              _fontSize={({ theme }) => theme.fontSizes.font18}
              _onClick={handleAlert}
            >
              &times;
            </Button>
          </CloseBox>
        </AlertBox>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  background: linear-gradient(90.06deg, #7881f5 -0.71%, #0a8ed0 100%);
`;

const AlertBox = styled.div`
  ${FlexboxSpace};
  align-items: center;
`;
const EmptyBox = styled.div`
  padding: 0px 32px;
`;

const TextBox = styled.a`
  padding: 0px 32px;
`;

const CloseBox = styled.div`
  padding: 0px 32px;
`;

export default EventAlert;
