import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import styled from "styled-components";
import Swal from "sweetalert2";

import { Title, Text, Button, Image } from "../../elements";

import { editProfileSnsUrlAxios } from "../../redux/modules/Profile";

const EditProfileLink = props => {
  const { memberId, isDeskTop } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 채널
  const channelList = [
    {
      channelName: "Instagram",
      channelAddress: "instagram.com/",
    },
    {
      channelName: "Github",
      channelAddress: "github.com/",
    },
    {
      channelName: "Brunch",
      channelAddress: "brunch.co.kr/",
    },
    {
      channelName: "블로그",
      channelAddress: "blog.naver.com/",
    },
    { channelName: "웹사이트", channelAddress: "" },
  ];

  // 자동 입력되는 초기 주소
  const [currentUrl, setCurrentUrl] = useState("");
  // 유저가 마저 입력한 나머지 주소
  const [urlInput, setUrlInput] = useState("");
  // 인덱스값
  const [tempId, setTempId] = useState();
  // 추가된 링크 부분
  const [addUrl, setAddUrl] = useState([]);
  // 비교할 링크
  const [selectedUrl, setSelectedUrl] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [brunch, setBrunch] = useState("");
  const [blog, setBlog] = useState("");
  const [website, setWebsite] = useState("");

  const handleAddUrl = props => {
    const url = [channelList[tempId].channelAddress, urlInput].join("");
    if (addUrl.length < 1) {
      setAddUrl([
        {
          channelName: channelList[tempId].channelName,
          url: url,
          img: tempId,
        },
      ]);
    }
    if (addUrl.length >= 1 && addUrl.length < 4) {
      setAddUrl([
        ...addUrl,
        {
          channelName: channelList[tempId].channelName,
          url: url,
          img: tempId,
        },
      ]);
    }
    switch (selectedUrl) {
      case "Instagram":
        return setInstagram(url);
      case "Github":
        return setGithub(url);
      case "Brunch":
        return setBrunch(url);
      case "블로그":
        return setBlog(url);
      case "웹사이트":
        return setWebsite(url);
      default:
        return null;
    }
  };

  const urlData = {
    instagramUrl: instagram ? instagram : "",
    githubUrl: github ? github : "",
    brunchUrl: brunch ? brunch : "",
    blogUrl: blog ? blog : "",
    websiteUrl: website ? website : "",
  };

  const updateSnsUrl = () => {
    Swal.fire({
      text: "입력하신 링크를 저장하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(editProfileSnsUrlAxios({ urlData, memberId, navigate }));
      }
    });
  };
  const deleteUrl = e => {
    console.log(e.target.id);
    console.log(addUrl.filter((url, idx) => console.log(idx !== e.target.id)));
  };

  return (
    <InnerDiv>
      <SnsContainer isDeskTop={isDeskTop}>
        <Title
          _titleSize={({ theme }) => theme.fontSizes.font20}
          lineHeight="24px"
          _padding="28px 0 0 0"
        >
          <Text
            _color={({ theme }) => theme.colors.fontColor05}
            _fontSize="20px"
            _padding="0 0 8px 0"
          >
            프로필 링크 등록
          </Text>
        </Title>

        <ProfileLinkBox />

        <ProfileLinkDiv isDeskTop={isDeskTop}>
          <ProfileLink>
            <div style={{ height: "270" }}>
              <Text _fontSize="13px" _padding="0 0 8px 0">
                채널 설정
              </Text>
              <InputBox>
                {channelList &&
                  channelList.map((channel, idx) => (
                    <ChannelInput
                      key={idx}
                      isSelected={idx === tempId}
                      onClick={e => {
                        setTempId(idx);
                        setCurrentUrl(channelList[idx].channelAddress);
                        setSelectedUrl(e.target.id);
                      }}
                    >
                      <ProfileChannel htmlFor={idx}>
                        <Image
                          _src={`/images/icon10${idx}.webp`}
                          _width="12px"
                          _height="12px"
                          _marginR="0px"
                        />
                        <ChannelName id={channel.channelName}>
                          {channel.channelName}
                        </ChannelName>
                      </ProfileChannel>
                    </ChannelInput>
                  ))}
                <Text _fontSize="13px" _padding="20px 0 8px 0">
                  url입력
                </Text>
                <Input>
                  <DefaultUrl>{currentUrl}</DefaultUrl>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <input
                      style={{ height: "100%", fontSize: "13px" }}
                      name="url입력"
                      value={urlInput}
                      onChange={e => {
                        setUrlInput(e.target.value);
                      }}
                    />
                  </div>
                </Input>
              </InputBox>
            </div>
            <div style={{ width: "100%", bottom: "24px" }}>
              <Button
                _onClick={handleAddUrl}
                _padding="18px"
                bgColor="#D2D6DA"
                _color="#383838"
                _fontSize="14px"
              >
                저장
              </Button>
            </div>
          </ProfileLink>
          {/* 추가된 링크 부분 */}
          <ProfileLink>
            <div style={{ height: "270" }}>
              <Text _fontSize="13px" _padding="0 0 16px 0">
                추가된 링크
              </Text>
              <InputBox>
                {addUrl &&
                  addUrl.map((url, idx) => {
                    return (
                      <div
                        id={idx}
                        key={idx}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "98px 60% 18px",
                          alignItems: "center",
                          borderRadius: "8px",
                          margin: "0 8px 8px 0",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <ProfileChannel htmlFor={url.img}>
                            <img
                              src={`/images/icon10${url.img}.webp`}
                              width={"12px"}
                              alt={`icon10${url.img}`}
                            />
                            <span
                              style={{ fontSize: "12px", marginLeft: "8px" }}
                            >
                              {url.channelName}
                            </span>
                          </ProfileChannel>
                        </div>
                        <UserUrlBox id={idx}>{url.url}</UserUrlBox>
                        <CloseBox id={idx} onClick={deleteUrl}>
                          x
                        </CloseBox>
                      </div>
                    );
                  })}
              </InputBox>
            </div>
          </ProfileLink>
        </ProfileLinkDiv>
      </SnsContainer>
      <Button
        _onClick={updateSnsUrl}
        _fontSize={({ theme }) => theme.fontSizes.font20}
        borderRadius="0px"
        _padding="18px 0px"
      >
        등록하기
      </Button>
    </InnerDiv>
  );
};

const InnerDiv = styled.div`
  position: relative;
  z-index: 1;
  background-color: white;
`;

const SnsContainer = styled.div`
  width: 100%;
  min-width: 390px;
  margin: auto;
  padding: 16px;
  ${({ isDeskTop }) =>
    isDeskTop
      ? `
  width:750px;
 `
      : `
 `}
`;

const ProfileLinkDiv = styled.div`
  ${({ isDeskTop }) =>
    isDeskTop
      ? `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
 `
      : `
 `}
`;

const ProfileLinkBox = styled.div`
  width: 100%;
  padding-top: 28px;
  margin: auto;
`;

const ProfileLink = styled.div`
  background-color: ${({ theme }) => theme.colors.gray01};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 28px;
  margin-bottom: 16px;
  position: relative;
`;

const DefaultUrl = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray05};
  padding: 0 4px 0 16px;
  font-size: ${({ theme }) => theme.fontSizes.font13};
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
  ${({ isSelected }) =>
    isSelected
      ? `
    background-color: #D2D6DA;
  `
      : `background-color: null;`}
`;

const ChannelName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.font12};
  margin-left: 8px;
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
  border: 1px solid #e5e8ec;
  border-radius: 5px;
`;

const UserUrlBox = styled.div`
  color: ${({ theme }) => theme.colors.fontColor05};
  white-space: nowrap;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.font12};
  text-overflow: ellipsis;
  height: 14px;
  padding: 0px 8px;
`;

const CloseBox = styled.div`
  color: ${({ theme }) => theme.colors.fontColor05};
`;
export default EditProfileLink;
