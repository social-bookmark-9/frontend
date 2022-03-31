import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFolderListAxios } from "../../redux/modules/Folder";

import styled from "styled-components";
import { Button, Text, Image } from "../../elements";
import { saveAllArticleAxios } from "../../redux/modules/Article";
// import { useNavigate } from "react-router";

const SelectFolderD = props => {
  const { openModal, folderId, setModalOpen } = props;

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFolderListAxios());
  }, [dispatch]);

  const folderList = useSelector(state => state.folder.myFolderList);
  const myFolderList =
    folderList && folderList.map(list => list.articleFolderName);

  // 모달 열고 닫기
  const [isOpen, setIsOpen] = useState(false);
  const [folder, setFolder] = useState(myFolderList && myFolderList[0]);
  const articleFolderName = { articleFolderName: folder };
  console.log(articleFolderName);
  console.log(folderId);

  // 모달 열고 닫기 펑션

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeFolder = e => {
    setFolder(e.target);
  };

  const saveCollection = () => {
    dispatch(saveAllArticleAxios({ folderId, articleFolderName }));
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Section>
        <MainModal>
          <CloseBox onClick={openModal}>
            <Image
              _src="/images/close.png"
              _width="24px"
              _height="24px"
              _marginR="0px"
            />
          </CloseBox>
          <Main>
            <LinkBox>
              <Text _fontSize="14px">컬렉션 선택</Text>
              <Dropdown>
                <DropdownHeader state={isOpen} onClick={toggleDropdown}>
                  <FolderName>{folder}</FolderName>
                  <SelectIcon>{">"}</SelectIcon>
                </DropdownHeader>
                {isOpen && (
                  <DropdownList>
                    {myFolderList.map((option, idx) => (
                      <DropdownItem
                        key={idx}
                        onClick={() => {
                          toggleDropdown(setFolder(option));
                        }}
                        onChange={handleChangeFolder}
                      >
                        {option}
                      </DropdownItem>
                    ))}
                  </DropdownList>
                )}
              </Dropdown>
              <ButtonBox>
                <Button
                  _padding="18px"
                  _fontSize="14px"
                  _onClick={saveCollection}
                >
                  컬렉션 저장하기
                </Button>
              </ButtonBox>
            </LinkBox>
          </Main>
        </MainModal>
      </Section>
    </React.Fragment>
  );
};

const CloseBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const Section = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MainModal = styled.div`
  width: 390px;
  height: 398px;
  margin: auto;
  padding: 20px 28px 24px 28px;
  background-color: white;
  border-radius: 12px;
`;

const Main = styled.div`
  width: 100%;
  margin-top: 2px;
`;

const LinkBox = styled.div`
  height: 325px;
  position: relative;
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
  height: 147px;
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

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export default SelectFolderD;
