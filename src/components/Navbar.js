import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Desktop, Tablet, Mobile } from "../styles/mediaquery";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import { Button, Image, Text, Title } from "../elements";

import NavProfile from "./NavProfile";
import { Logo } from "../elements/ImageObj";

const Navbar = props => {
  const { folderName } = props;

  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    if (isOpen === false) {
      setIsOpen(true);
      document.body.style.cssText = `overflow: hidden; touch-action: none;`;
    } else {
      setIsOpen(false);
      document.body.style.cssText = `overflow:auto;`;
    }
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <Desktop>
          <DNavContainer>
            <DNavBox>
              <DLogoBox>
                <Title _fontSize="24px" _lineHeight="31px">
                  bubbled
                </Title>
                <Image
                  _src="/images/bubbled.png"
                  _width="26px"
                  _height="21px"
                />
              </DLogoBox>
              <DMenuBox>
                <Text
                  _fontSize="18px"
                  _color={({ theme }) => theme.colors.fontColor05}
                >
                  홈 피드
                </Text>
                <Line />
                <ImageBox
                  onClick={() => {
                    navigate("/remind");
                  }}
                >
                  <Image _src="/images/memo.png" _width="24px" _height="24px" />
                </ImageBox>
                <ImageBox
                  onClick={() => {
                    navigate("/setting");
                  }}
                >
                  <Image
                    _src="/images/setting.png"
                    _width="24px"
                    _height="24px"
                  />
                </ImageBox>
                <ImageBox
                  onClick={() => {
                    navigate("/mypage");
                  }}
                >
                  <Image
                    _src="/images/iconMe.png"
                    _width="30px"
                    _height="30px"
                  />
                </ImageBox>
              </DMenuBox>
            </DNavBox>
          </DNavContainer>
        </Desktop>
        <Tablet>
          <NavBox>
            {folderName ? <Title>{folderName}</Title> : <Logo />}
            <NavMenu onClick={menuOpen}>
              <Image _src="/images/menu.png" _width="24px" _height="24px" />
            </NavMenu>
            <NavContainer className={isOpen ? "active" : ""}>
              <Nav className={isOpen ? "active" : ""} onClick={menuOpen}>
                <div>
                  <NavMenu onClick={menuOpen}>
                    <Image
                      _src="/images/close.png"
                      _width="24px"
                      _height="24px"
                    />
                  </NavMenu>
                  {/* ----- 네비게이션바 프로필 ----- */}
                  <NavProfile />
                  <Line />
                  <MenuBox>
                    <Link to="/">
                      <li>추천 아티클</li>
                    </Link>
                    <Link to={isLogin ? "/memos" : "/login"}>
                      <li>내가 작성한 메모</li>
                    </Link>
                  </MenuBox>
                </div>
                <Button
                  isBorder
                  _padding="15px 0px"
                  bgColor={({ theme }) => theme.colors.white}
                  _color={({ theme }) => theme.colors.fontColor02}
                  _onClick={() => {
                    isLogin ? navigate("/setting") : navigate("/login");
                  }}
                >
                  설정
                </Button>
              </Nav>
            </NavContainer>
          </NavBox>
        </Tablet>
        <Mobile>
          <NavBox>
            {folderName ? <Title>{folderName}</Title> : <Logo />}
            <NavMenu onClick={menuOpen}>
              <Image _src="/images/menu.png" _width="24px" _height="24px" />
            </NavMenu>
            <NavContainer className={isOpen ? "active" : ""}>
              <Nav className={isOpen ? "active" : ""} onClick={menuOpen}>
                <div>
                  <NavMenu onClick={menuOpen}>
                    <Image
                      _src="/images/close.png"
                      _width="24px"
                      _height="24px"
                    />
                  </NavMenu>
                  {/* ----- 네비게이션바 프로필 ----- */}
                  <NavProfile />
                  <Line />
                  <MenuBox>
                    <Link to="/">
                      <li>추천 아티클</li>
                    </Link>
                    <Link to={isLogin ? "/memos" : "/login"}>
                      <li>내가 작성한 메모</li>
                    </Link>
                  </MenuBox>
                </div>
                <Button
                  isBorder
                  _padding="15px 0px"
                  bgColor={({ theme }) => theme.colors.white}
                  _color={({ theme }) => theme.colors.fontColor02}
                  _onClick={() => {
                    isLogin ? navigate("/setting") : navigate("/login");
                  }}
                >
                  설정
                </Button>
              </Nav>
            </NavContainer>
          </NavBox>
        </Mobile>
      </NavbarContainer>
    </React.Fragment>
  );
};

Navbar.defaultProps = {};
const DNavContainer = styled.div`
  width: 100%;
`;

const DNavBox = styled.div`
  width: 1115px;
  margin: auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DLogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & h1 {
    padding-right: 8px;
  }
`;

const DMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & p {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    padding-right: 30px;
  }
`;

const ImageBox = styled.div`
  & img {
    margin-left: 30px;
  }
`;

const Line = styled.hr`
  width: 1px;
  height: 27px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grayColor04};
`;

const NavbarContainer = styled.div`
  width: 100%;
`;
const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
`;

const NavContainer = styled.div`
  display: none;
  &.active {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 350ms;
    z-index: 1;
  }
`;

const NavMenu = styled.div`
  float: right;
  display: flow-root;
`;

const Nav = styled.div`
  ${FlexboxColumn}
  justify-content: space-between;
  background-color: #ffffff;
  width: 314px;
  height: 100%;
  padding: 14px 24px;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 5;
  &.active {
    right: 0;
    transition: 350ms;
  }
`;

const MenuBox = styled.ul`
  & li {
    padding: 20px 36px;
  }
`;

export default Navbar;
