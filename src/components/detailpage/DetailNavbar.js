import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  changeArticleFolderAxios,
  deleteArticleAxios,
  updateTitleOgAxios,
} from "../../redux/modules/Article";

import styled from "styled-components";
import { Button, Image, Title, Text } from "../../elements";

import ChangeTag from "./ChangeTag";

import Swal from "sweetalert2";

const DetailNavbar = props => {
  const { title, article, articleId, isMe } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const folderList = useSelector(state => state.folder.myFolderList);
  const myFolderList =
    folderList && folderList.map(list => list.articleFolderName);

  // 모달 열고 닫기
  const [folderModalOpen, setfolderModalOpen] = useState(false);
  // 어떤 모달창 보여줄지 (링크 추가 단계)
  const [showFolderModal, setshowFolderModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [folder, setFolder] = useState(title);
  const [newTitleOg, setNewTitleOg] = useState(article.titleOg);
  const tagList = [article.hashtag1, article.hashtag2, article.hashtag3];

  const openFolderModal = () => {
    if (folderModalOpen === false) {
      setfolderModalOpen(true);
      document.body.style.cssText = `overflow: hidden; touch-action: none;`;
    } else {
      setfolderModalOpen(false);
      setshowFolderModal(false);
      document.body.style.cssText = `overflow:auto;`;
    }
  };

  const modalChange = () => {
    setshowFolderModal(current => !current);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    Swal.fire({
      text: "저장하신 링크를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteArticleAxios({ articleId, navigate }));
      }
    });
  };

  const getFolderName = e => {
    setFolder(e.target);
  };

  const getTitleOg = e => {
    setNewTitleOg(e.target.value);
  };

  const titleOg = { titleOg: newTitleOg };
  const articleFolderName = { articleFolderName: folder };

  const handleUpdate = () => {
    if (newTitleOg === undefined && folder === undefined) {
      Swal.fire({
        text: "변경 할 내용이 없습니다",
        confirmButtonText: "확인",
      });
    } else {
      Swal.fire({
        text: "변경하신 내용을 저장할까요?",
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          if (newTitleOg !== undefined) {
            return article.titleOg !== newTitleOg
              ? dispatch(updateTitleOgAxios({ articleId, titleOg }))
              : null;
          }
          if (folder !== undefined) {
            return title !== folder
              ? dispatch(
                  changeArticleFolderAxios({ articleId, articleFolderName }),
                )
              : null;
          }
          Swal.fire({ text: "변경되었습니다", confirmButtonText: "확인" });
        }
      });
    }
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <NavBox>
          <Title>{title}</Title>
          <NavMenu onClick={openFolderModal}>
            <Image
              _src="/images/editMenu.png"
              _width="24px"
              _height="24px"
              _marginR="0px"
            />
          </NavMenu>
        </NavBox>
        {folderModalOpen ? (
          <Section>
            <ModalCover onClick={openFolderModal} />
            <MainModal>
              <ImageContainer>
                <ImageBox onClick={handleDelete}>
                  <Image
                    _src="/images/delete.png"
                    _width="24px"
                    _height="24px"
                    _marginR="0px"
                  />
                </ImageBox>
                <ImageBox onClick={openFolderModal}>
                  <Image
                    _src="/images/close.png"
                    _width="24px"
                    _height="24px"
                    _marginR="0px"
                  />
                </ImageBox>
              </ImageContainer>
              {showFolderModal ? (
                <ChangeTag tagList={tagList} articleId={articleId} />
              ) : (
                <Main>
                  <LinkBox>
                    <EditBox>
                      <Text _fontSize="14px">컬렉션 선택</Text>
                      <Dropdown>
                        <DropdownHeader state={isOpen} onClick={toggleDropdown}>
                          <FolderName>{folder}</FolderName>
                          <SelectIcon>{">"}</SelectIcon>
                        </DropdownHeader>
                        {isOpen && (
                          <DropdownList key={folder}>
                            {myFolderList.map((option, idx) => (
                              <DropdownItem
                                key={idx}
                                onClick={() => {
                                  toggleDropdown(setFolder(option));
                                }}
                                onChange={getFolderName}
                              >
                                {option}
                              </DropdownItem>
                            ))}
                          </DropdownList>
                        )}
                      </Dropdown>
                    </EditBox>
                    <EditBox>
                      <Text _fontSize="14px">링크 타이틀 변경</Text>
                      <Input
                        type="text"
                        defaultValue={article.titleOg ? article.titleOg : ""}
                        onBlur={getTitleOg}
                      />
                    </EditBox>
                    <Hr />
                    <Text
                      _fontSize={({ theme }) => theme.fontSizes.font14}
                      textAlign="center"
                      _onClick={modalChange}
                    >
                      태그 변경
                    </Text>
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
              )}
            </MainModal>
          </Section>
        ) : null}
      </NavbarContainer>
    </React.Fragment>
  );
};

DetailNavbar.defaultProps = {};

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
  height: 398px;
  bottom: 0;
  padding: 20px 28px;
  background-color: white;
  border-radius: 12px 12px 0 0;
`;

const Main = styled.div`
  width: 100%;
  height: 270px;
  margin-top: 2px;
`;

const LinkBox = styled.div`
  height: 270px;
  & p {
    line-height: 18px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  padding-right: 56px;
  position: fixed;
  bottom: 24px;
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 16px 16px 16px 24px;
  border: 1px solid #f2f4f6;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  ${({ state }) =>
    state
      ? `
    border-radius: 5px 5px 0 0;
  `
      : `border-radius: 5px;`}
`;

const FolderName = styled.div`
  display: flex;
  width: 50%;
  justify-content: start;
`;

const SelectIcon = styled.div`
  display: flex;
  justify-content: end;
  color: ${({ theme }) => theme.colors.fontColor03};
  transform: rotate(90deg);
`;
const DropdownList = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 0;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;

const DropdownItem = styled.li`
  width: 100%;
  height: 50px;
  padding: 16px 16px 16px 24px;
  margin: 0;
  border: 1px solid #f2f4f6;
  list-style: none;
  background: white;
  margin-top: -1px;
  font-size: 13px;
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

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border-top: 1px solid #f2f4f6;
  margin-bottom: 20px;
`;

export default DetailNavbar;
