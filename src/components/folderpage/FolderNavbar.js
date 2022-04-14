import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Button, Image, Title, Text } from "../../elements";

import Swal from "sweetalert2";
import {
  deleteFolderAxios,
  updateFolderNameAxios,
} from "../../redux/modules/Folder";

const FolderNavbar = props => {
  const { title, isMe, folderId } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const folderList = useSelector(state => state.folder.myFolderList);
  const myFolderList =
    folderList && folderList.map(list => list.articleFolderName);

  // 모달 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState(title);

  const articleFolderName = { articleFolderName: newFolderName };

  const openModal = () => {
    if (modalOpen === false) {
      setModalOpen(true);
      document.body.style.cssText = `overflow: hidden; touch-action: none;`;
    } else {
      setModalOpen(false);
      document.body.style.cssText = `overflow:auto;`;
    }
  };

  const handleDelete = () => {
    Swal.fire({
      text: "컬렉션을 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteFolderAxios({ folderId, navigate }));
      }
    });
  };

  const getFolderName = e => {
    setNewFolderName(e.target.value);
  };

  const handleUpdate = () => {
    if (myFolderList.includes(newFolderName)) {
      Swal.fire({
        text: "동일한 컬렉션 이름이 존재합니다",
        confirmButtonText: "확인",
      });
    } else {
      Swal.fire({
        text: "변경한 내용을 저장할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          dispatch(updateFolderNameAxios({ folderId, articleFolderName }));
        }
      });
    }
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <NavBox>
          <Title>{title}</Title>
          {isMe ? (
            <NavMenu onClick={openModal}>
              <Image
                _src="/images/editMenu.webp"
                _width="24px"
                _height="24px"
                _marginR="0px"
              />
            </NavMenu>
          ) : null}
        </NavBox>
        {modalOpen ? (
          <Section>
            <ModalCover onClick={openModal} />
            <MainModal>
              <ImageContainer>
                <ImageBox onClick={handleDelete}>
                  <Image
                    _src="/images/delete.webp"
                    _width="24px"
                    _height="24px"
                    _marginR="0px"
                  />
                </ImageBox>
                <ImageBox onClick={openModal}>
                  <Image
                    _src="/images/close.webp"
                    _width="24px"
                    _height="24px"
                    _marginR="0px"
                  />
                </ImageBox>
              </ImageContainer>
              <Main>
                <LinkBox>
                  <EditBox>
                    <Text _fontSize="14px">컬렉션 이름 변경</Text>
                    <Input
                      type="text"
                      defaultValue={title}
                      onBlur={getFolderName}
                    />
                  </EditBox>
                  <ButtonBox>
                    <Button
                      _padding="18px"
                      _fontSize="14px"
                      _onClick={handleUpdate}
                    >
                      변경하기
                    </Button>
                  </ButtonBox>
                </LinkBox>
              </Main>
            </MainModal>
          </Section>
        ) : null}
      </NavbarContainer>
    </React.Fragment>
  );
};

FolderNavbar.defaultProps = {};

const NavbarContainer = styled.div`
  width: 100%;
  ${props => (props.bgColor ? `background-color: ${props.bgColor}` : null)}
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
`;

const NavMenu = styled.div`
  float: right;
  display: flow-root;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const ImageBox = styled.div`
  display: block;
`;

const EditBox = styled.div`
  padding-bottom: 16px;
`;

const Section = styled.div`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ModalCover = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainModal = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 20px 28px;
  background-color: white;
  border-radius: 12px 12px 0 0;
`;

const Main = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 2px;
`;

const LinkBox = styled.div`
  height: 170px;
  & p {
    line-height: 18px;
    margin-bottom: 8px;
    cursor: default;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  padding-right: 56px;
  position: fixed;
  bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #f2f4f6;
  border-radius: 5px;
  padding: 24px;
  font-size: 13px;
  cursor: pointer;
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor01};
  }
`;

export default FolderNavbar;
