import { useState } from "react";
import Text from "../elements/Text";
import styled from "styled-components";
import Button from "../elements/Button";
import Label from "../elements/Label";
import AddLinkTag from "./AddLinkTag";
import AddFolder from "./AddFolder";


const AddLink = (props) => {
  const modalChange = () => {
    props.setShowModal((current) => !current);
  }

  // 컬렉션 추가 선택시 이동 토글
  const [addFolderList, setAddFolderList] = useState(true);
  const toggleAddFolderList = () => {
    setAddFolderList(false);
  }

  const dummyOption = [
    { key: 1, value: "미분류 컬렉션" },
    { key: 2, value: "컬렉션명2" },
    { key: 3, value: "컬렉션명3" },
    { key: 4, value: "컬렉션명4" },
  ];

  const options = [...dummyOption, {
    key: 0,
    value:
      <div style={{
        width:"100%", height:"100%"
      }} onClick={toggleAddFolderList}>
        추가
      </div>
  }]

  const [folder, setFolder] = useState(options[0].value);
  const handleChangeFolder = e => {
    setFolder(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [showFolder, setShowFolder] = useState(options[0].value);

  return (
    <>
      {addFolderList ? (
        <div style={{height:"270"}}>
          <Text _fontSize="14px">컬렉션 선택</Text>
          <Dropdown>
            <DropdownHeader state={isOpen} onClick={toggleDropdown}>
              <div style={{display:"flex", width:"50%", justifyContent:"start"}}>
                {showFolder}
              </div>
              <div style={{display:"flex", width:"50%", justifyContent:"end"}}>
                {">"}
              </div>
            </DropdownHeader>
            {isOpen && (
              <DropdownList
                key={folder}
                onChange={handleChangeFolder}
              >
                {options.map((option) => (
                  <DropdownItem
                    key={option.key}
                    onClick={() => {
                      setShowFolder(option.value);
                      toggleDropdown();
                    }}
                  >
                  {option.value}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </Dropdown>
          <LinkField>
            <Text _fontSize="14px">링크</Text>
            <Input></Input>
            <Hr></Hr>
          </LinkField>
          <Reminder>
            <div style={{display:"flex", width:"30%", justifyContent:"start"}}>
              <Text _fontSize="14px">리마인드</Text>
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Label
                _color={({ theme }) => theme.colors.fontColor02}
                bgColor={({ theme }) => theme.colors.white}
                borderColor={({ theme }) => theme.colors.grayColor02}
                _padding="7px 21px 7px 21px"
                borderRadius="25px"
                _fontSize="12px"
              >
                &nbsp;&nbsp;내일&nbsp;&nbsp;
              </Label>
              <Label
                _color={({ theme }) => theme.colors.fontColor02}
                bgColor={({ theme }) => theme.colors.white}
                borderColor={({ theme }) => theme.colors.grayColor02}
                _padding="7px 21px 7px 21px"
                borderRadius="25px"
                _fontSize="12px"
              >
                3일 뒤
              </Label>
              <Label
                _color={({ theme }) => theme.colors.fontColor02}
                bgColor={({ theme }) => theme.colors.white}
                borderColor={({ theme }) => theme.colors.grayColor02}
                _padding="7px 21px 7px 21px"
                borderRadius="25px"
                _fontSize="12px"
              >
                7일 뒤
              </Label>
            </div>
          </Reminder>
          <div style={{
            width:"100%",
            paddingRight:"56px",
            position:"fixed",
            bottom:"24px"
          }}>
            <Button
              _onClick={modalChange}
              _padding="18px"
              _fontSize="14px"
            >
              선택 완료
            </Button>
          </div>
        </div>
      ) : 
        <AddFolder
          setAddFolderList={setAddFolderList}
        />
      }
    </>
  );
};

const Dropdown = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  z-index: 5;
`;

const DropdownHeader = styled.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 16px 16px 16px 24px;
  border: 1px solid #F2F4F6;
  font-size: 13px;
  display: flex;
  ${({ state }) =>
    state
      ? `
    border-radius: 5px 5px 0 0;
  `
      : `border-radius: 5px;`}
`;

const DropdownList = styled.ul`
  position: relative;
  width: 100%;
  height: 147px;
  overflow: scroll;
  padding: 0;
  border-radius: 0 0 5px 5px;
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
  position: absolute;
  width: 100%;
  padding-right: 56px;
  bottom: 181px;
  z-index: 3;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #f2f4f6;
  border-radius: 5px;
  padding: 24px;
  font-size: 13px;
`;

const Hr = styled.hr`
  position: fixed;
  width: 100%;
  height: 1px;
  left: 0;
  border: 0;
  border-top: 1px solid #f2f4f6;
  bottom: 145px;
`;

const Reminder = styled.div`
  position: fixed;
  bottom: 112px;
  width: 100%;
  display: flex;
`;

export default AddLink;
