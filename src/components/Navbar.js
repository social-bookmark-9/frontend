import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { FlexboxColumn } from "../styles/flexbox";
import { Button, Image } from "../elements";

import NavProfile from "./NavProfile";
import { Logo } from "../elements/ImageObj";

const Navbar = props => {
  const { isLogin } = props;
  const navigate = useNavigate();
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
      <NavBox>
        <Logo />
        <Link to="#" onClick={menuOpen}>
          <Image _src="/images/menu.png" _width="24px" _height="24px" />
        </Link>
      </NavBox>
      <NavContainer className={isOpen ? "active" : ""}>
        <Nav className={isOpen ? "active" : ""} onClick={menuOpen}>
          <div>
            <div style={{ display: "flow-root" }}>
              <Link to="#" onClick={menuOpen} style={{ float: "right" }}>
                <Image _src="/images/close.png" _width="24px" _height="24px" />
              </Link>
            </div>
            <NavProfile isLogin={isLogin} />
            <Line />
            <MenuBox>
              <Link to="/">
                <li>추천 아티클</li>
              </Link>
              <Link to="/reviews">
                <li>내가 쓴 리뷰 전체보기</li>
              </Link>
            </MenuBox>
          </div>
          <Button
            isBorder
            _padding="15px 0px"
            bgColor={({ theme }) => theme.colors.white}
            _color={({ theme }) => theme.colors.fontColor02}
            _onClick={() => {
              navigate("/setting");
            }}
          >
            설정
          </Button>
        </Nav>
      </NavContainer>
    </React.Fragment>
  );
};

Navbar.defaultProps = {};
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

const Line = styled.hr`
  border: 1px solid #f2f3f4;
  margin: 40px 0px 16px 0px;
`;

export default Navbar;
