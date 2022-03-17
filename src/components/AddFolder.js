import { useEffect, useState } from "react";
import Text from "../elements/Text";
import styled from "styled-components";
import Button from "../elements/Button";
import { Title } from "../elements";

const AddFolder = (props) => {


  // 뒤로가기
  const modalChange = () => {
    props.setAddFolderList((current) => !current);
  }

  // 컬렉션 추가 완료 버튼 (컬렉션 추가 + 뒤로가기)
  const addFolderDone = () => {
    modalChange();
    console.log("쨔쟌");
  };

  const [show, setShow] = useState(true);
  const [unshow, setUnshow] = useState(false);
  const toggleShow = () => {
    setShow(current => !current);
    setUnshow(current => !current);
  };

  return (
    <>
      <div style={{marginTop:"-18px", display:"flex", alignItems:"center"}}>
        <div>
          <button
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "start"
            }}
            onClick={modalChange}
          >
            {"<"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "center"
          }}
        >
          <Title>새 컬렉션 추가</Title>
        </div>
      </div>
      <Header>
        <Text _fontSize="14px">새 컬렉션 이름</Text>
        <Input></Input>
      </Header>
      <LinkField>
        <Text _fontSize="14px">공개여부</Text>
        <Settingwrap>
          <ShowSetting state={show} onClick={toggleShow}>
            공개
          </ShowSetting>
          <ShowSetting state={unshow} onClick={toggleShow}>
            비공개
          </ShowSetting>
        </Settingwrap>
      </LinkField>
      <div
        style={{
          width: "100%",
          paddingRight: "56px",
          position: "fixed",
          bottom: "24px",
        }}
      >
        <Button _onClick={addFolderDone} _padding="18px">
          완료
        </Button>
      </div>
    </>
  );
};

const Header = styled.div`
  padding-top: 45px;
`;

const LinkField = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 24px;
  font-size: 13px;
  border: 1px solid #F2F4F6;
  border-radius: 5px;
`;

const Settingwrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ShowSetting = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 50px;
  width: 50%;
  height: 50px;
  border: 1px solid #e5e8ec;
  border-radius: 5px;
  ${({ state }) =>
    state
      ? `
    background-color: rgba(0, 0, 0, 0.3);
  `
      : `background-color: white`}
`;

export default AddFolder;
