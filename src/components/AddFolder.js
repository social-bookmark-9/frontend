
import { useEffect, useState } from "react";
import Text from "../elements/Text";
import styled from "styled-components";
import Button from "../elements/Button";

const AddFolder = (props) => {
  useEffect(() => {
    props.setModalTitle("새 컬렉션 추가");
    props.setModalBackspace(backButton);
  }, []);

  const backButton = () => {
    return(
      <button onClick={modalChange}>{"<"}</button>
    )
  }

  const modalChange = () => {
    props.setShowModal((current) => !current);
    props.setModalTitle("");
    props.setModalBackspace("");
  }

  const [show, setShow] = useState(true);
  const [unshow, setUnshow] = useState(false);
  const toggleShow = () => {
    setShow((current) => !current);
    setUnshow((current) => !current);
  }

  return (
    <>
      <Header>
        <Text>새 컬렉션 이름</Text>
        <Input></Input>
      </Header>
      <LinkField>
        <Text>공개여부</Text>
        <Settingwrap>
          <ShowSetting state={show} onClick={toggleShow}>
            공개
          </ShowSetting>
          <ShowSetting state={unshow} onClick={toggleShow}>
            비공개
          </ShowSetting>
        </Settingwrap>
      </LinkField>
    </>
  );
}

const Header = styled.div`
  margin-top: 45px;
`;

const LinkField = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #F2F4F6;
  border-radius: 5px;
`;

const Reminder = styled.div`
  position: fixed;
  bottom: 112px;
`;

const Settingwrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ShowSetting = styled.div`
  margin-top: 8px;
  text-align: center;
  line-height: 50px;
  width: 50%;
  height: 50px;
  border: 1px solid #E5E8EC;
  border-radius: 5px;
  ${({ state }) => (state ? `
    background-color: rgba(0, 0, 0, 0.3);
  ` : `background-color: white` )}
`;


export default AddFolder;