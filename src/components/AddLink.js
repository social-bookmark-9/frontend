import { useState } from "react";
import Text from "../elements/Text";
import styled from "styled-components";
import Button from "../elements/Button";

const AddLink = (props) => {
  const dummyOption = [
    { key: 1, value: "미분류 컬렉션" },
    { key: 2, value: "컬렉션명2" },
    { key: 3, value: "컬렉션명3" },
    { key: 4, value: "컬렉션명4" }
  ]

  const options = [...dummyOption, { key: 0, value: <Button>추가</Button>}]

  const [folder, setFolder] = useState(options[0].value);
  const handleChangeFolder = (e) => {
    setFolder(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const modalChange = () => {
    props.setShowModal((current) => !current);
  }

  return (
    <>
    <div style={{height:"270"}}>
      <Text>컬렉션 선택</Text>
      <Dropdown>
        <DropdownHeader state={isOpen} onClick={toggleDropdown}>
        <div style={{display:"flex", width:"50%", justifyContent:"start"}}>
          그려
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
              <DropdownItem key={option.key}>{option.value}</DropdownItem>
            ))}
          </DropdownList>
        )}
      </Dropdown>
      <LinkField>
        <Text>링크</Text>
        <Input></Input>
        <Hr></Hr>
      </LinkField>
      <Reminder>
        <button onClick={modalChange}>모달창 바꾸기</button>
      </Reminder>
      </div>
    </>
  );
}

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
  display: flex;
  ${({ state }) => (state ? `
    border-radius: 5px 5px 0 0;
  ` : `border-radius: 5px;` )}
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
  border: 1px solid #F2F4F6;
  list-style: none;
  background: white;
  margin-top: -1px;

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
  border: 1px solid #F2F4F6;
  border-radius: 5px;
  padding: 24px;
`;

const Hr = styled.hr`
  position: fixed;
  width: 100%;
  height: 1px;
  left: 0;
  border: 0;
  border-top: 1px solid #F2F4F6;
  bottom: 145px;
`;

const Reminder = styled.div`
  position: fixed;
  bottom: 112px;
`;

export default AddLink;