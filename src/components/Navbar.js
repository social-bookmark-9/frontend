import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import { Button, Image, Title } from "../elements";

import NavProfile from "./NavProfile";
import { Logo } from "../elements/ImageObj";

const Navbar = props => {
  const { title, bgColor } = props;

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
      <NavbarContainer bgColor={bgColor} onClick={menuOpen}>
        <NavBox>
          {title ? <Title>{title}</Title> : <Logo />}
          {props.inDetail ? (
            <EditBox>
              <Image _src="/images/edit.png" _width="30px" _height="30px" />
            </EditBox>
          ) : null}
          <NavMenu onClick={menuOpen}>
            <Image
              _src="/images/menu.png"
              _width="24px"
              _height="24px"
              _marginR="0px"
            />
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
                <NavProfile {...props} />
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
      </NavbarContainer>
    </React.Fragment>
  );
};

Navbar.defaultProps = {};

const Line = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const NavbarContainer = styled.div`
  width: 100%;
  ${props => (props.bgColor ? `background-color: ${props.bgColor}` : null)}
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
    z-index: 4;
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

const EditBox = styled.div`
  width: 30%;
  position: absolute;
  top: 16px;
  left: 50%;
`;

export default Navbar;
