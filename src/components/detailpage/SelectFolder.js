import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Button, Image, Text } from "../../elements";

import { postArticleAxios } from "../../redux/modules/Article";

const SelectFolder = props => {
  const { openFolderModal, folderModalOpen, article } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const folderList = useSelector(state => state.folder.myFolderList);
  let myFolderList;
  if (folderList) {
    myFolderList = folderList.map(list => list.articleFolderName);
  }

  const [isOpen, setIsOpen] = useState(false);
  const [folder, setFolder] = useState("미분류 컬렉션");
  const articleData = {
    articleFolderName: folder,
    url: article.url,
    reminderDate: 0,
    readCount: 0,
    hashtag1: article.hashtag1,
    hashtag2: article.hashtag2,
    hashtag3: article.hashtag3,
  };
  console.log(articleData);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getFolderName = e => {
    setFolder(e.target);
  };

  const handleSave = () => {
    dispatch(postArticleAxios({ articleData, navigate }));
    folderModalOpen(false);
  };

  return (
    <React.Fragment>
      <Section>
        <ModalCover onClick={openFolderModal} />
        <MainModal>
          <ImageBox onClick={openFolderModal}>
            <Image
              _src="/images/close.png"
              _width="24px"
              _height="24px"
              _marginR="0px"
            />
          </ImageBox>
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
              <ButtonBox>
                <Button _padding="18px" _fontSize="14px" _onClick={handleSave}>
                  저장하기
                </Button>
              </ButtonBox>
            </LinkBox>
          </Main>
        </MainModal>
      </Section>
    </React.Fragment>
  );
};
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
  height: 285px;
  bottom: 0;
  padding: 20px 28px;
  background-color: white;
  border-radius: 12px 12px 0 0;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: end;
  padding-bottom: 20px;
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
  }
`;

const EditBox = styled.div`
  padding-bottom: 16px;
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

const DropdownList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 0;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
`;

const DropdownItem = styled.div`
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

const ButtonBox = styled.div`
  width: 100%;
  padding-right: 56px;
  position: fixed;
  bottom: 24px;
`;

export default SelectFolder;
