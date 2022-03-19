import React, { useState } from "react";

import styled from "styled-components";
import { Button, Text } from "../elements";
import { FlexboxRow, FlexboxSpace } from "../styles/flexbox";

import AddLinkTag from "./AddLinkTag";
import AddFolder from "./AddFolder";
import CheckRemind from "./CheckRemind";
import { useDispatch } from "react-redux";
import { postArticleAxios } from "../redux/modules/Article";
import { useNavigate } from "react-router";

const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 모달 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);
  // 어떤 모달창 보여줄지 (링크 추가 단계)
  const [showModal, setShowModal] = useState(false);
  // 모달 열고 닫기 펑션
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setShowModal(false);
  };

  const remindList = [
    { key: "내일", value: 1 },
    { key: "3일 뒤", value: 3 },
    { key: "7일 뒤", value: 7 },
  ];

  const toggleAddFolderList = () => {
    setAddFolderList(!addFolderList);
  };

  const [options, setOptions] = useState([
    "미분류 컬렉션",
    <FolderAdd onClick={toggleAddFolderList}>+ 새 컬렉션 추가</FolderAdd>,
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [addFolderList, setAddFolderList] = useState(true);
  const [folder, setFolder] = useState(options[0]);

  // 전달할 정보 세팅
  const [url, setUrl] = useState("");
  const [checkedRemind, setCheckedRemind] = useState(0);
  const [folderHide, setFolderHide] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [addLink, setAddLink] = useState(false);
  const tagData = [...checkedItems];

  const articleData = {
    url: url,
    readCount: 0,
    reminderDate: +checkedRemind,
    articleFolderName: folder,
    hashtag1: tagData[0],
    hashtag2: tagData[1] ? tagData[1] : null,
    hashtag3: tagData[2] ? tagData[2] : null,
  };
  const folderData = {
    articleFolderName: folder,
    folderHide: folderHide,
  };

  const getUrl = e => {
    setUrl(e.target.value);
  };

  const changeRemind = e => {
    setCheckedRemind(e.target.id);
  };

  const modalChange = () => {
    setShowModal(current => !current);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeFolder = e => {
    setFolder(e.target);
  };

  const handleAddLink = () => {
    dispatch(postArticleAxios({ articleData, navigate }));
  };

  return (
    <>
      {/* 아직 버튼 모양은 안 잡아서 기본으로! */}
      <LinkButtonBox>
        <Button borderRadius="16px" _fontSize="28px" _onClick={openModal}>
          +
        </Button>
      </LinkButtonBox>
      {modalOpen ? (
        <Section>
          <MainModal>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "start",
                }}
              />
              <div
                style={{ display: "flex", width: "20%", justifyContent: "end" }}
              >
                <button onClick={closeModal}>&times;</button>
              </div>
            </div>
            <Main>
              {showModal ? (
                <AddLinkTag
                  setAddLink={setAddLink}
                  closeModal={closeModal}
                  setShowModal={setShowModal}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                  articleData={articleData}
                />
              ) : (
                <>
                  {addFolderList ? (
                    <LinkBox>
                      <Text _fontSize="14px">컬렉션 선택</Text>
                      <Dropdown>
                        <DropdownHeader state={isOpen} onClick={toggleDropdown}>
                          <FolderName>{folder}</FolderName>
                          <SelectIcon>{">"}</SelectIcon>
                        </DropdownHeader>
                        {isOpen && (
                          <DropdownList key={folder}>
                            {options.map((option, idx) => (
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
                      <LinkField>
                        <Text _fontSize="14px">링크</Text>
                        <Input
                          type="text"
                          defaultValue={url ? url : ""}
                          placeholder="링크를 입력해주세요"
                          onBlur={getUrl}
                        ></Input>
                      </LinkField>
                      <Hr></Hr>
                      <Reminder>
                        <RemindText>
                          <Text _fontSize="14px">리마인드</Text>
                        </RemindText>
                        <RemindSelection>
                          {remindList.map((remindOption, idx) => (
                            <CheckRemind
                              remindOption={remindOption.key}
                              key={idx}
                              id={remindOption.value}
                              changeRemind={changeRemind}
                            />
                          ))}
                        </RemindSelection>
                      </Reminder>
                      <ButtonBox>
                        {addLink ? (
                          <Button
                            _onClick={handleAddLink}
                            _padding="18px"
                            _fontSize="14px"
                          >
                            링크 추가
                          </Button>
                        ) : (
                          <Button
                            _onClick={modalChange}
                            _padding="18px"
                            _fontSize="14px"
                            articleData={articleData}
                          >
                            선택 완료
                          </Button>
                        )}
                      </ButtonBox>
                    </LinkBox>
                  ) : (
                    <AddFolder
                      options={options}
                      setAddFolderList={setAddFolderList}
                      setOptions={setOptions}
                      setFolderHide={setFolderHide}
                      setFolder={setFolder}
                    />
                  )}
                </>
              )}
            </Main>
          </MainModal>
        </Section>
      ) : null}
    </>
  );
};

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

const LinkButtonBox = styled.div`
  display: inline-flex;
  position: fixed;
  top: 50%;
  right: 16px;
  & button {
    width: 62px;
    height: 64px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

const FolderAdd = styled.div`
  cursor: cell;
  color: ${({ theme }) => theme.colors.fontColor03};
`;

const LinkBox = styled.div`
  height: 270px;
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

const LinkField = styled.div`
  width: 100%;
  padding: 16px 0px;
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
  left: 0;
  border: 0;
  border-top: 1px solid #f2f4f6;
  bottom: 145px;
`;

const Reminder = styled.div`
  ${FlexboxSpace}
  align-items: center;
  padding: 17px 0px;
`;

const RemindSelection = styled.div`
  ${FlexboxRow}
`;

const RemindText = styled.div`
  ${FlexboxRow}
`;

const ButtonBox = styled.div`
  width: 100%;
  padding-right: 56px;
  position: fixed;
  bottom: 24px;
`;

export default Modal;
