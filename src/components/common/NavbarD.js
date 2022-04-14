import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import Swal from "sweetalert2";
import { Image, Text, Title } from "../../elements";

const NavbarD = props => {
  const { isLogin, bgColor, profileImageUrl, isRemindEmail, memberId } = props;
  console.log(props);
  const navigate = useNavigate();

  const handleMemoPage = () => {
    if (isLogin) {
      navigate("/myreview");
    } else {
      Swal.fire({
        title: "잠깐!",
        text: "로그인이 필요한 서비스에요",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: `${({ theme }) => theme.colors.error}`,
        confirmButtonText: "로그인 하기",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleSettingPage = () => {
    if (isLogin) {
      navigate("/setting");
    } else {
      Swal.fire({
        title: "잠깐!",
        text: "로그인이 필요한 서비스에요",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: `${({ theme }) => theme.colors.error}`,
        confirmButtonText: "로그인 하기",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const handleMyPage = () => {
    if (isLogin) {
      navigate(`/mypage/${memberId}`);
    } else {
      Swal.fire({
        title: "잠깐!",
        text: "로그인이 필요한 서비스에요",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: `${({ theme }) => theme.colors.error}`,
        confirmButtonText: "로그인 하기",
        cancelButtonText: "취소",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <NavbarContainer bgColor={bgColor}>
        <NavContainer>
          <NavBox>
            <LogoBox
              onClick={() => {
                navigate("/");
              }}
            >
              <Title
                _fontSize="24px"
                _lineHeight="31px"
                _color={isRemindEmail ? "white" : ""}
              >
                bubbled
              </Title>
              <Image
                _src={`/images/${
                  isRemindEmail ? "bubbledWhite" : "bubbled"
                }.webp`}
                _width="26px"
                _height="21px"
              />
            </LogoBox>
            <MenuBox>
              <Text
                _fontSize={({ theme }) => theme.fontSizes.font18}
                _color={
                  isRemindEmail
                    ? ({ theme }) => theme.colors.white
                    : ({ theme }) => theme.colors.fontColor05
                }
                _onClick={() => {
                  navigate("/");
                }}
              >
                홈 피드
              </Text>
              <Line />
              <ImageBox onClick={handleMemoPage}>
                <Image
                  _src={`/images/${isRemindEmail ? "memoWhite" : "memo"}.webp`}
                  _width="24px"
                  _height="24px"
                />
              </ImageBox>
              <ImageBox onClick={handleSettingPage}>
                <Image
                  _src={`/images/${
                    isRemindEmail ? "settingWhite" : "setting"
                  }.webp`}
                  _width="24px"
                  _height="24px"
                />
              </ImageBox>
              <ImageBox onClick={handleMyPage}>
                <Image
                  _src={isLogin ? profileImageUrl : "/images/user.webp"}
                  _width="30px"
                  _height="30px"
                />
              </ImageBox>
            </MenuBox>
          </NavBox>
        </NavContainer>
      </NavbarContainer>
    </React.Fragment>
  );
};

NavbarD.defaultProps = {
  bgColor: "white",
  fontColor: "",
};

const NavbarContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor || "white"};
`;

const NavContainer = styled.div`
  width: 100%;
`;

const NavBox = styled.div`
  width: 1115px;
  margin: auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  & h1 {
    padding-right: 8px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & p {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding-right: 30px;
    cursor: pointer;
  }
  & img {
    cursor: pointer;
  }
`;

const Line = styled.hr`
  width: 1px;
  height: 27px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const ImageBox = styled.div`
  & img {
    border-radius: 5px;
    margin-left: 30px;
  }
`;

export default NavbarD;
