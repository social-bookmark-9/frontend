import React from "react";
import styled from "styled-components";
import { Image, Title } from "../../elements";
import Modal from "../modal/Modal";

const NoContent = props => {
  const { isMe } = props;
  return (
    <Container>
      <Image _src="/images/bubbledLight.png" _width="56px" _height="45px" />
      {isMe ? (
        <>
          <Title textAlign="center" _padding="25px" _lineHeight="28px">
            폴더에 저장된 아티클이 없어요!
            <br />
            흩어진 아티클을 모아보세요!
          </Title>
          <Modal />
        </>
      ) : (
        <Title textAlign="center" _padding="25px" _lineHeight="28px">
          아쉽게도 <br />
          폴더에 저장된 아티클이 없어요!
        </Title>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: block;
  text-align: center;
  padding-top: 15vh;
`;

export default NoContent;
