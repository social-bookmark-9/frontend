import { useState } from "react";
import styled from "styled-components";

import Text from "../elements/Text";
import Button from "../elements/Button";
import { Title } from "../elements";

const EditProfileLink = () => {

  // 채널 설정 부분
  const channelList = [
    {channelName:"인스타그램", channelAddress:"instagram.com/"},
    {channelName:"Github", channelAddress:"github.com/"},
    {channelName:"Brunch", channelAddress:"brunch.co.kr/"},
    {channelName:"블로그", channelAddress:"blog.naver.com/"},
    {channelName:"Website", channelAddress:"instagram.com/"}
  ];

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  // 자동 입력되는 초기 주소
  const [currentUrl, setCurrentUrl] = useState("");
  // 유저가 마저 입력한 세부 주소
  const [urlInput, setUrlInput] = useState("");
  // 인덱스값
  const [tempId, setTempId] = useState();

  const handleChecked = e => {
    setIsChecked(!isChecked);
    handleCheckedItems(e.target.parentNode, e.target.id, e.target.value, e.target.checked);
  };

  const handleCheckedItems = (box, id, value, isChecked) => {
    if (isChecked && checkedItems.size < 1) {
      checkedItems.add(value);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#d2d6da";
      setCurrentUrl(value);
      setTempId(id);
    } else if (!isChecked && checkedItems.has(value)) {
      checkedItems.delete(value);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#f2f4f6";
      setCurrentUrl("");
      setTempId("");
    }
    return checkedItems;
  };

  // 추가된 링크 부분
  const [addUrl, setAddUrl] = useState(new Set());
  
  const handleAddUrl = () => {
    console.log(tempId)
    setAddUrl(addUrl.add(currentUrl, urlInput, tempId));
    console.log(addUrl);
  }


  return (
    <InnerDiv>
      <Title
        _titleSize={({ theme }) => theme.fontSizes.font20}
        lineHeight="24px"
      >
        <Text _color="#353C49" _fontSize="20px" _padding="0 0 8px 0">
          프로필 링크 등록
        </Text>
        <Text>프로필 링크는 4개까지만 등록할 수 있어요.</Text>
      </Title>

      <div style={{ padding: "28px 0px 0px 0px" }} />
      <ProfileLink>
        <div style={{height:"270"}}>
          <Text _padding="0 0 8px 0">채널 설정</Text>
          <InputBox onChange={handleChecked}>
            {channelList.map((channel, idx) => (
              <div key={idx} style={{
                display:"inline-block",
                borderRadius:"8px",
                margin:"0 8px 8px 0",
              }}>
                <FavoriteInput
                  type="checkbox"
                  id={idx}
                  value={channel.channelAddress}
                />
                <ProfileChannel htmlFor={idx}>
                  <img
                    src={`/images/icon10${idx}.png`}
                    width={"20px"}
                    alt={`icon10${idx}`}
                  />
                <span style={{marginLeft:"8px"}}>{channel.channelName}</span>
                </ProfileChannel>
              </div>
            ))}
            <Text _padding="20px 0 8px 0">url입력</Text>
            <Input>
              <div style={{display:"flex"}}>
                {currentUrl}
              </div>
              <div style={{display:"flex"}}>
                <input 
                  style={{
                    height:"100%"}}
                  name="url입력"
                  value={urlInput}
                  onChange={(e)=> {
                    setUrlInput(e.target.value);
                    console.log(urlInput);
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
          >저장</Button>
        </div>
      </ProfileLink>

      {/* 추가된 링크 부분 */}
      <ProfileLink>
        <div style={{height:"270"}}>
          <Text _padding="0 0 16px 0">추가된 링크</Text>
          <InputBox>
            {channelList.map((channel, idx) => (
              <div key={idx} style={{
                display: "grid",
                gridTemplateColumns: "27.5% 60% 12.5%",
                alignItems:"center",
                borderRadius:"8px",
                margin:"0 8px 8px 0",
              }}>
                
                <div style={{
                  display: "flex",               
                  }}>
                  <ProfileChannel htmlFor={idx}>
                    <img
                      src={`/images/icon10${idx}.png`}
                      width={"20px"}
                      alt={`icon10${idx}`}
                    />
                    <span style={{marginLeft:"8px"}}>{channel.channelName}</span>
                  </ProfileChannel>
                </div>
                <div
                  style={{
                    display: "flex",
                    color: "#353C49",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                    alksdjflaksjdlfkasjdlfkasjdflkjalskdjfalskdfj
                </div>
                <div
                  style={{
                    display: "flex",
                    color: "#353C49"
                  }}
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

const FavoriteInput = styled.input`
  display: none;
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
  flex-direction: column;
  width: 100%;
  height: 50px;
  border: 1px solid #E5E8EC;
  border-radius: 5px;
`;




export default EditProfileLink