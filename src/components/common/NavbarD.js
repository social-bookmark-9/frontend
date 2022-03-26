import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { Image, Text, Title } from "../elements";

const NavbarD = props => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <NavbarContainer>
        <DNavContainer>
          <DNavBox>
            <DLogoBox>
              <Title _fontSize="24px" _lineHeight="31px">
                bubbled
              </Title>
              <Image _src="/images/bubbled.png" _width="26px" _height="21px" />
            </DLogoBox>
            <DMenuBox>
              <Text
                _fontSize="18px"
                _color={({ theme }) => theme.colors.fontColor05}
                _onClick={() => {
                  navigate("/");
                }}
              >
                홈 피드
              </Text>
              <DLine />
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
                <Image _src="/images/iconMe.png" _width="30px" _height="30px" />
              </ImageBox>
            </DMenuBox>
          </DNavBox>
        </DNavContainer>
      </NavbarContainer>
    </React.Fragment>
  );
};

NavbarD.defaultProps = {};
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

const DLine = styled.hr`
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

const NavbarContainer = styled.div`
  width: 100%;
`;
export default NavbarD;
