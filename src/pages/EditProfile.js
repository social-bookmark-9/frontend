import { useState } from "react";
import styled from "styled-components";

import Title from "../elements/Title";

import { FlexboxColumn } from "../styles/flexbox";
import { Circle } from "../elements/ImageObj";
import EditProfileLink from "../components/EditProfileLink";


const EditProfile = () => {
  const [words, setWords] = useState(0);

  const handleKeyUp = e => {
    if (e.target.value.length <= 34) {
      setWords(e.target.value.length);
    }
    if (e.target.value.length > 34) {
      e.target.value = e.target.value.slice(0, 34);
    }
  };

  return (
    <>
      <Container>
        <ProfileBox>
          {/*  그거... 동그라미 */}
          <CircleBox>
            <Circle _width="28px" _height="28px" bgColor="black" />
          </CircleBox>
          <ProfileImage>
            <img
              src="https://bennettfeely.com/clippy/pics/pittsburgh.jpg"
              alt="profile"
              style={{zIndex:"3"}}
            />
          </ProfileImage>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{display:"flex", justifyContent:"start"}}>
              <Title _padding="23px 15px 30px 0">@김철수</Title>
            </div>
            <div style={{display:"flex", justifyContent:"end"}}>
              <img
                src={`/images/edit.png`}
                width={"20px"}
                height={"20px"}
              />
            </div>
          </div>
        </ProfileBox>

        <MemoBox>
          <TextAreaField
            placeholder="자기소개를 작성해 주세요."
            rows={5}
            maxLength={34}
            onKeyUp={handleKeyUp}
          />
          <InputCheck>{words}/34</InputCheck>
        </MemoBox>      
      </Container>
      <EditProfileLink />
      
      {/* 마법의 svg */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <ellipse cx="44" cy="106" rx="44.78" ry="44" />
            <ellipse cx="108" cy="106" rx="44.78" ry="44" />
            <ellipse cx="44" cy="44" rx="44.78" ry="44" />
            <ellipse cx="108" cy="44" rx="44.78" ry="44" />
          </clipPath>
        </defs>
      </svg>

    </>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.grayColor01};
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  padding: 51px 200px;
`;

const ProfileImage = styled.div`
  display: inline-block;
  height: 150px;
  width: 156.34px;
  left: -19px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #c4c4c4;
  z-index: -1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const CircleBox = styled.div`
  position: absolute;
  bottom: -52px;
  left: 316px;
`;

const MemoBox = styled.div`
  width: 100%;
  padding: 36px;
  margin-top: 100px;
  margin-bottom: 42px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  height: 90px;
  padding: 28px 65px 28px 65px;
  border-radius: 8px;
  background-color: white;
  color: ${({ theme }) => theme.colors.fontColor05};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.font13};
  letter-spacing: -0.0008em;
  line-height: 18px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor02};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.font13};
    letter-spacing: -0.0008em;
    line-height: 18px;
  }
`;

const InputCheck = styled.p`
  text-align: right;
  padding: 4px 0px;
  font-size: ${({ theme }) => theme.fontSizes.font14};
  color: ${({ theme }) => theme.colors.fontColor04};
  line-height: 18px;
  letter-spacing: -0.0008em;
`;

export default EditProfile;
