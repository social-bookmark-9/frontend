import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import { Button, Text, Title } from "../elements";
import { createFolderAxios } from "../redux/modules/Folder";

const AddCollection = props => {
  const { setModalOpen, setShowModal } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [folderName, setFolderName] = useState("");
  const [showOption, setShowOption] = useState(false);

  const folderData = {
    articleFolderName: folderName,
    folderHide: showOption,
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowModal(false);
  };

  const getFolderName = e => {
    setFolderName(e.target.value);
  };

  const checkShow = e => {
    setShowOption(e.target.value);
  };

  // 컬렉션 추가 완료 버튼
  const addFolderDone = () => {
    dispatch(createFolderAxios({ folderData, navigate }));
  };

  return (
    <Section>
      <MainModal>
        <Main>
          <TitleBox>
            <div />
            <Title _fontSize={({ theme }) => theme.fontSizes.font16}>
              새 컬렉션 추가
            </Title>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
          </TitleBox>
          <Header>
            <Text _fontSize="14px">새 컬렉션 이름</Text>
            <Input
              placeholder="컬렉션명을 입력하세요"
              onChange={getFolderName}
            />
          </Header>
          <LinkField>
            <Text _fontSize="14px">공개여부</Text>
            <Settingwrap>
              <ShowLabel>
                <ShowRadio
                  type="radio"
                  id="0"
                  name="radioButton"
                  value={false}
                  onClick={checkShow}
                />
                <ShowText>공개</ShowText>
              </ShowLabel>
              <ShowLabel>
                <ShowRadio
                  type="radio"
                  id="1"
                  name="radioButton"
                  value={true}
                  onClick={checkShow}
                />
                <ShowText>비공개</ShowText>
              </ShowLabel>
            </Settingwrap>
          </LinkField>
          <ButtonBox>
            <Button _onClick={addFolderDone} _padding="18px">
              완료
            </Button>
          </ButtonBox>
        </Main>
      </MainModal>
    </Section>
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

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.fontColor03};
`;

const CloseButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.font16};
`;

const Header = styled.div`
  padding-top: 45px;
  & p {
    margin-bottom: 8px;
  }
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
  border: 1px solid #f2f4f6;
  border-radius: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor01};
  }
`;

const Settingwrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 0px;
`;
const ShowLabel = styled.label`
  width: 50%;
`;

const ShowText = styled.span`
  ${({ theme }) => {
    const { fontSizes, fontWeight, colors } = theme;
    return css`
      font-size: ${fontSizes.font12};
      font-weight: ${fontWeight.semiBold};
      line-height: 16px;
      letter-spacing: -0.0008em;
      color: ${colors.fontColor02};
      padding: 15px 18px;
      border: 1px solid #f2f3f4;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: ${colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;
  }}
`;

const ShowRadio = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${ShowText} {
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        background-color: ${colors.gray05};
        border-color: ${colors.whilte};
        color: ${colors.white};
      `;
    }}
  }
  display: none;
`;

const ButtonBox = styled.div`
  width: 100%;
  padding-top: 36px;
`;

export default AddCollection;
