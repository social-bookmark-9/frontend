import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import Swal from "sweetalert2";
import { Image, Text, Title } from "../../elements";

const NavbarD = props => {
  const { isLogin, memberId, bgColor } = props;
  console.log(bgColor);

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
            <LogoBox>
              <Title _fontSize="24px" _lineHeight="31px">
                bubbled
              </Title>
              <Image _src="/images/bubbled.png" _width="26px" _height="21px" />
            </LogoBox>
            <MenuBox>
              <Text
                _fontSize={({ theme }) => theme.fontSizes.font18}
                _color={({ theme }) => theme.colors.fontColor05}
                _onClick={() => {
                  navigate("/");
                }}
              >
                홈 피드
              </Text>
              <Line />
              <ImageBox onClick={handleMemoPage}>
                <Image _src="/images/memo.png" _width="24px" _height="24px" />
              </ImageBox>
              <ImageBox onClick={handleSettingPage}>
                <Image
                  _src="/images/setting.png"
                  _width="24px"
                  _height="24px"
                />
              </ImageBox>
              <ImageBox onClick={handleMyPage}>
                <Image _src="/images/iconMe.png" _width="30px" _height="30px" />
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
`;

const Line = styled.hr`
  width: 1px;
  height: 27px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const ImageBox = styled.div`
  & img {
    margin-left: 30px;
  }
`;

export default NavbarD;
