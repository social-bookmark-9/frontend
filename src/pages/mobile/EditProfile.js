import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Image, Title } from "../../elements";

import {
  editProfileImageAxios,
  editProfileUserDescAxios,
  getProfileAxios,
} from "../../redux/modules/Profile";

import EditProfileLink from "../../components/editprofile/EditProfileLink";
import EditNickname from "../../components/editprofile/EditNickname";
import { Flexbox, FlexboxColumn, FlexboxRow } from "../../styles/flexbox";

const EditProfile = props => {
  const userDescRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  // const navigate = useNavigate();
  const fileRef = useRef();

  const myInfo = useSelector(state => state.user.myInfo);
  const initialUserImage = props.profileImageUrl;
  const initialUserName = props.nickName;
  const initialUserDesc = props.userDesc;

  useEffect(() => {
    dispatch(getProfileAxios(location.state.memberId));
    if (initialUserDesc !== null) {
      userDescRef.current.value = initialUserDesc;
    }
  }, [dispatch, initialUserDesc, location.state.memberId]);

  const [newNickname, setNewNickname] = useState(initialUserName);

  const [words, setWords] = useState(0);

  const handleKeyUp = e => {
    if (e.target.value.length <= 34) {
      setWords(e.target.value.length);
    }
    if (e.target.value.length > 34) {
      e.target.value = e.target.value.slice(0, 34);
    }
  };
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const editUserDesc = () => {
    const userMessage = userDescRef.current.value;
    dispatch(editProfileUserDescAxios({ userDesc: userMessage }));
  };

  // 이미지 업로드
  const editImage = e => {
    e.preventDefault();
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", uploadFile);
    dispatch(editProfileImageAxios(formData));
  };

  return !isEdit ? (
    <Container>
      <AreaWrap>
        <ProfileBox>
          <ProfileLabel htmlFor="picture">
            <InputImage
              id="picture"
              type="file"
              ref={fileRef}
              name="file"
              onChange={editImage}
              accept="image/*"
            />

            {/* 프로필사진 옆 검은 동그라미 */}
            <CircleBox>
              <CameraImage src="/images/camera.png" alt="editImage" />
            </CircleBox>

            {/* 프로필 이미지 */}
            <ProfileImage>
              <img src={initialUserImage} alt="profile" />
            </ProfileImage>
          </ProfileLabel>
        </ProfileBox>
        {/* 이름 부분 */}
        <EditNicknameBox>
          <NicknameBox>
            <Title _padding="23px 15px 30px 23px">@{newNickname}</Title>
          </NicknameBox>
          <ImageBox onClick={toggleEdit}>
            <Image _src="/images/edit.png" _width="20px" _height="20px" />
          </ImageBox>
        </EditNicknameBox>

        {/* 자기소개 부분 */}
        <MemoBox>
          <TextAreaField
            ref={userDescRef}
            name="userDesc"
            placeholder="자기소개를 작성해 주세요."
            rows={5}
            maxLength={34}
            onKeyUp={handleKeyUp}
            onBlur={editUserDesc}
          />
          <InputCheck>{words}/34</InputCheck>
        </MemoBox>
      </AreaWrap>
      {/* 마법의 svg */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip">
            <ellipse cx="45" cy="106" rx="44.78" ry="44" />
            <ellipse cx="108" cy="106" rx="44.78" ry="44" />
            <ellipse cx="45" cy="44" rx="44.78" ry="44" />
            <ellipse cx="108" cy="44" rx="44.78" ry="44" />
          </clipPath>
        </defs>
      </svg>
      <EditProfileLink {...myInfo} />
    </Container>
  ) : (
    <EditNickname setIsEdit={setIsEdit} setNewNickname={setNewNickname} />
  );
};

const Container = styled.div`
  ${FlexboxColumn};
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const AreaWrap = styled.div`
  min-width: 390px;
  margin: auto;
  padding: 50px 0px;
`;

const ProfileBox = styled.div`
  ${Flexbox};
  align-items: center;
  margin: auto;
  width: 170px;
  height: 170px;
  position: relative;
`;

const ProfileLabel = styled.label`
  display: block;
`;

const InputImage = styled.input`
  width: 160px;
  height: 160px;
  position: absolute;
  display: none;
  z-index: 3;
`;

const ImageBox = styled.div`
  display: flex;
`;

const ProfileImage = styled.div`
  display: inline-block;
  height: 150px;
  width: 156.34px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #c4c4c4;
  z-index: 1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const CameraImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CircleBox = styled.div`
  position: absolute;
  top: 130px;
  right: 0px;
  width: 30px;
  height: 30px;
  padding: 3px;
  border-radius: 15px;
  z-index: 2;
  overflow: hidden;
  background-color: white;
`;

const EditNicknameBox = styled.div`
  ${FlexboxRow};
  align-items: center;
`;

const NicknameBox = styled.div`
  display: flex;
`;

const MemoBox = styled.div`
  width: 100%;
  padding: 0 17px 0 17px;
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
    letter-spacing: -0.0008em;
    line-height: 18px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.font13};
    letter-spacing: -0.0008em;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.fontColor02};
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
