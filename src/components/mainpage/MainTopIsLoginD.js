import { useRef, useState } from "react";

import styled from "styled-components";
import { Image, Text, Title } from "../../elements";
import ModalD from "../modal/ModalD";

const MainTopIsLoginD = (props) => {
  const {isMain} = props;
  const newUrlRef = useRef();
  const [newUrl, setNewUrl] = useState("");

  return (
    <>
      <div style={{ backgroundColor: "#fafbfb" }}>
        <div
          style={{
            margin: "auto",
            width: "1220px",
            padding: "131px 0px 90px 0px",
            textAlign: "center",
          }}
        >
          <Title
            _padding="0 0 0 70px"
            textAlign="center"
            _fontSize={({ theme }) => theme.fontSizes.font34}
            _lineHeight="41px"
          >
            빠르게 링크를 저장하고 분류하세요!
            <span style={{ verticalAlign: "middle" }}>
              <Image _src="/images/emoji2.png" _width="40px" _height="40px" />
            </span>
          </Title>
          <Text
            _color={({ theme }) => theme.colors.fontColor03}
            _padding="12px 0 50px 0"
            textAlign="center"
            _fontSize={({ theme }) => theme.fontSizes.font20}
            _lineHeight="28px"
          >
            잊지 않도록 버블드가 리마인드 해드릴게요 :)
          </Text>
          <div style={{ display: "inline-block", backgroundColor: "white" }}>
            <Input>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  color: "#B1BBC0",
                  padding: "0 4px 0 16px",
                  fontSize: "22px",
                }}
              >
                <LinkInput
                  name="url입력"
                  onChange={() => setNewUrl(newUrlRef.current.value)}
                  placeholder="이곳에 링크를 붙여넣어 주세요"
                  ref={newUrlRef}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  marginLeft: "-65px",
                }}
              >
                <ModalD newUrl={newUrl} isMain={isMain} />
              </div>
            </Input>
          </div>
        </div>
      </div>
    </>
  );
};

const Input = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  width: 997px;
  height: 68px;
  border: 1px solid #e5e8ec;
  border-radius: 15px;
  padding: 13px 26px 13px 26px;
`;

const LinkInput = styled.input`
  width: 957px;
  height: 68px;
  font-size: 22px;
  &:focus {
    background-color: none;
  }
`;

export default MainTopIsLoginD;
