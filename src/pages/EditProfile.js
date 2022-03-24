import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Title } from "../elements";
import { EditProfileLink, EditNickname, Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import {
  editProfileImageAxios,
  editProfileUserDescAxios,
  getProfileAxios
} from "../redux/modules/Profile";



const EditProfile = (props) => {
  const userDescRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const fileRef = useRef();

  useEffect(() => {
    dispatch(getProfileAxios(location.state.memberId));
    if (initialUserDesc !== null) {
      userDescRef.current.value = initialUserDesc;
    }
  }, [dispatch])

  const myInfo = useSelector(state => state.user.myInfo);
  const initialUserImage = props.profileImageUrl;
  const initialUserName = props.nickName;
  const initialUserDesc = props.userDesc;

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
    dispatch(editProfileUserDescAxios({userDesc:userMessage}));
  }

  // 이미지 업로드
  const editImage = (e) => {
    e.preventDefault();
    const uploadFile = e.target.files[0]
    const formData = new FormData();
    formData.append('image',uploadFile);
    dispatch(editProfileImageAxios(formData));
  }



  return (
    <>
      {!isEdit ? (
        <>
          <Container>
            <Navbar {...props} />
            <AreaWrap>
              <ProfileBox>
                <div style={{overflow:"hidden"}}>
                  <label htmlFor="picture">
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
                    <img src={'./images/camera.png'}
                    style={{width:"100%", height:"100%", objectFit:"cover"}}
                    alt="" />
                  </CircleBox>

                  {/* 프로필 이미지 */}
                  <ProfileImage>
                    <img
                      src={initialUserImage}
                      alt="profile"
                      style={{ zIndex: "3" }}
                    />
                  </ProfileImage>
                  </label>
                </div>

                {/* 이름 부분 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Title _padding="23px 15px 30px 23px">
                      @{initialUserName}
                    </Title>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`/images/edit.png`}
                      width={"20px"}
                      height={"20px"}
                      onClick={toggleEdit}
                      alt=""
                    />
                  </div>
                </div>
              </ProfileBox>

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
          </Container>
          <EditProfileLink {...myInfo} />

        </>
      ) : (
        <EditNickname
          setIsEdit={setIsEdit}
          setNewNickname={setNewNickname}
        />
      )}
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
  width: 425px;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const AreaWrap = styled.div`
  width: 390px;
  height: 436px;
  margin: 0 auto 0 auto;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 278px;
  position: relative;
  padding: 51px 112px;
`;

const InputImage = styled.input`
  width: 160px;
  height: 160px;
  position: absolute;
  display: none;
  z-index: 3;
`

const ProfileImage = styled.div`
  display: inline-block;
  height: 150px;
  width: 156.34px;
  clip-path: url(#myClip);
  position: relative;
  background-color: #C4C4C4;
  z-index: 1;
  & img {
    position: absolute;
    width: 100%;
  }
`;

const CircleBox = styled.div`
  position: absolute;
  top: 172px;
  right: 112px;
  width: 30px;
  height: 30px;
  padding: 3px;
  border-radius: 15px;
  z-index: 2;
  overflow: hidden;
  background-color: white;
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