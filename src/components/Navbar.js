import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import Image from "../elements/Image";
import { FlexboxColumn } from "../styles/flexbox";

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    if (isOpen === false) {
      setIsOpen(true);
      console.log(isOpen);
    } else {
      setIsOpen(false);
      console.log(isOpen);
    }
  };

  return (
    <React.Fragment>
      <Link to="#" onClick={menuOpen}>
        <Image _src="/images/menu.png" _width="24px" _height="24px" />
      </Link>
      <Nav className={isOpen ? "active" : ""} onClick={menuOpen}>
        <div>
          <Link to="#" onClick={menuOpen} style={{ float: "right" }}>
            <Image _src="/images/menu.png" _width="24px" _height="24px" />
          </Link>
          <MenuBox>
            <li>홈</li>
            <li>마이페이지</li>
            <li>내가 쓴 리뷰 전체보기</li>
          </MenuBox>
        </div>
        <Button
          isBorder
          _padding="15px 0px"
          bgColor={({ theme }) => theme.colors.white}
          _color={({ theme }) => theme.colors.fontColor02}
        >
          설정
        </Button>
      </Nav>
    </React.Fragment>
  );
};

Navbar.defaultProps = {};

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
  z-index: 1;
  &.active {
    right: 0;
    transition: 350ms;
  }
`;

const MenuBox = styled.ul`
  padding: 84px 0px;
`;

export default Navbar;
