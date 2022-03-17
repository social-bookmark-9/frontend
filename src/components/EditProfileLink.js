import { useState } from "react";
import styled from "styled-components";

import Text from "../elements/Text";
import Button from "../elements/Button";
import { Title } from "../elements";

const EditProfileLink = () => {

  // 채널
  const channelList = [
    {channelName:"인스타그램", channelAddress:"instagram.com/"},
    {channelName:"Github", channelAddress:"github.com/"},
    {channelName:"Brunch", channelAddress:"brunch.co.kr/"},
    {channelName:"블로그", channelAddress:"blog.naver.com/"},
    {channelName:"Website", channelAddress:""}
  ];

  // 자동 입력되는 초기 주소
  const [currentUrl, setCurrentUrl] = useState("");
  // 유저가 마저 입력한 나머지 주소
  const [urlInput, setUrlInput] = useState("");
  // 인덱스값
  const [tempId, setTempId] = useState("");


  // 추가된 링크 부분
  const [addUrl, setAddUrl] = useState([]);
  
  const handleAddUrl = () => {
    if (addUrl.length < 1) {
      setAddUrl([{...channelList[tempId], url:urlInput, img:tempId}]);
    }
    if (addUrl.length >= 1 && addUrl.length < 4) {
      setAddUrl([...addUrl, {...channelList[tempId], url:urlInput, img:tempId}]);
    }
  }

  return (
    <InnerDiv>
      <Title
        _titleSize={({ theme }) => theme.fontSizes.font20}
        lineHeight="24px"
        _padding="28px 0 0 0"
      >
        <Text _color="#353C49" _fontSize="20px" _padding="0 0 8px 0">
          프로필 링크 등록
        </Text>
        <Text _fontSize="13px">프로필 링크는 4개까지만 등록할 수 있어요.</Text>
      </Title>

      <div style={{ padding: "28px 0px 0px 0px" }} />
      <ProfileLink>
        <div style={{height:"270"}}>
          <Text _fontSize="13px" _padding="0 0 8px 0">채널 설정</Text>
          <InputBox>
            {channelList.map((channel, idx) => (
              <ChannelInput
                key={idx}
                onClick = {() => {setTempId(idx)
                setCurrentUrl(channelList[idx].channelAddress)}}
                isSelected={idx === tempId}
              >
                <ProfileChannel htmlFor={idx}>
                  <img
                    src={`/images/icon10${idx}.png`}
                    width={"12px"}
                    alt={`icon10${idx}`}
                  />
                <span style={{fontSize:"12px", marginLeft:"8px"}}>{channel.channelName}</span>
                </ProfileChannel>
              </ChannelInput>
            ))}
            <Text _fontSize="13px" _padding="20px 0 8px 0">url입력</Text>
            <Input>
              <div style={{
                display:"flex",
                justifyContent:"start",
                color:"#B1BBC0",
                padding: "0 4px 0 16px",
                fontSize: "13px"
              }}>
                {currentUrl}
              </div>
              <div style={{display:"flex", justifyContent:"end"}}>
                <input 
                  style={{
                    height:"100%",
                    fontSize:"13px"}}
                  name="url입력"
                  value={urlInput}
                  onChange={(e)=> {
                    setUrlInput(e.target.value);
                  }}
                />
              </div>
            </Input>
          </InputBox>
        </div>
        <div style={{
          width:"100%",
          bottom:"24px"
          }}>
          <Button
            _onClick={handleAddUrl}
            _padding="18px"
            bgColor="#D2D6DA"
            _color="#383838"
            _fontSize="14px"
          >저장</Button>
        </div>
      </ProfileLink>

      {/* 추가된 링크 부분 */}
      <ProfileLink>
        <div style={{height:"270"}}>
          <Text _fontSize="13px" _padding="0 0 16px 0">추가된 링크</Text>
          <InputBox>
            {addUrl.map((url, idx) => (
              <div key={idx} style={{
                display: "grid",
                gridTemplateColumns: "98px 60% 18px",
                alignItems:"center",
                borderRadius:"8px",
                margin:"0 8px 8px 0",
              }}>
                <div style={{
                  display: "flex",               
                  }}>
                  <ProfileChannel htmlFor={url.img}>
                    <img
                      src={`/images/icon10${url.img}.png`}
                      width={"12px"}
                      alt={`icon10${url.img}`}
                    />
                    <span style={{fontSize:"12px", marginLeft:"8px"}}>
                      {url.channelName}
                    </span>
                  </ProfileChannel>
                </div>
                <div
                  style={{
                    color: "#353C49",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    fontSize: "12px",
                    textOverflow: "ellipsis",
                    padding: "0 6px 0 18px"
                  }}
                >
                  {url.channelAddress}{url.url}
                </div>
                <div
                  style={{
                    display:"flex",
                    padding:"5px",
                    color: "#353C49"}}
                    idx={idx}
                >
                  x
                </div>
              </div>
            ))}       
          </InputBox>
        </div>  
      </ProfileLink>
    </InnerDiv>
  );
}

const InnerDiv = styled.div`
  position: absolute;
  width: 390px;
  top:470px;
  z-index:1;
  background-color: white;
  padding: 16px;
`;

const ProfileLink = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayColor01};
  color: #ffffff;
  border-radius: 8px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
`;

const InputBox = styled.div`
  display: inline-block;
  margin: 0 8px 8px 0;
  width: 100%;
  border-radius: 8px;
`;

const ChannelInput = styled.div`
  display: inline-block;
  border-radius: 8px;
  margin: 0 8px 8px 0;
  ${({isSelected}) => (isSelected ? `
    background-color: #D2D6DA;
  ` : `background-color: null;`)}
`;

const ProfileChannel = styled.label`
  display: flex;
  align-items: center;
  width: auto;
  height: 30px;
  padding: 9px 10px 9px 10px;
  border: 0.8px solid #d2d6da;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  color: #383838;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid #E5E8EC;
  border-radius: 5px;
`;




export default EditProfileLink