import styled from "styled-components";
import { useState } from "react";
import Button from "../elements/Button";
import AddLink from "./AddLink";
import AddLinkTag from "./AddLinkTag";

const Modal = () => {
  // 모달 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  // 어떤 모달창 보여줄지 (링크 추가 단계)
  const [showModal, setShowModal] = useState(false);
  // 모달 열고 닫기 펑션
  const openModal = () => {setModalOpen(true);}
  const closeModal = () => {
    setModalOpen(false);
    setShowModal(false);
  }
  
  const [modalBackspace, setModalBackspace] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      {/* 아직 버튼 모양은 안 잡아서 기본으로! */}
      <Button _onClick={openModal}>모달팝업</Button>
      {modalOpen ? (
        <Section>
          <MainModal>
            <div style={{display:"flex", alignItems:"center"}}>
              <div style={{display:"flex", width:"80%", justifyContent:"start"}} />
              <div style={{display:"flex", width:"20%", justifyContent:"end"}}>
                <button onClick={closeModal}>
                  &times;
                </button>
              </div>
            </div>
            <Main>
              {showModal ? (
                <AddLinkTag
                closeModal={closeModal}
                />
              ) : (
                <AddLink
                  setShowModal={setShowModal}
                />
              )}
            </Main>
          </MainModal>
        </Section>
      ) : null}
    </>
  );
}

const Section = styled.div`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MainModal = styled.div`
  position: fixed;
  width: 100%;
  height: 398px;
  bottom: 0;
  padding: 20px 28px 24px 28px;
  background-color: white;
  border-radius: 12px 12px 0 0;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 2px;
`;


export default Modal;