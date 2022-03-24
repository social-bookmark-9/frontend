import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import EditFavorites from "../components/EditFavorites";
import Navbar from "../components/Navbar";
import { Button, Image } from "../elements";
import { FlexboxColumn } from "../styles/flexbox";

const Setting = props => {
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);

  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <React.Fragment>
      {!isEdit ? (
        <>
        <Navbar title="설정" />
        <div>
          <Ul>
            <Li
              onClick={() => {
                navigate("/reminder");
              }}
            >
              <Image _src="/images/email.png" _width="22px" _height="22px" />
              리마인드 메일 변경
            </Li>
            <Li
              onClick={toggleEdit}
            >
              <Image _src="/images/favorite.png" _width="22px" _height="22px" />
              관심 카테고리 변경
            </Li>
          </Ul>
          <UlBackground>
            <Ul>
              <Li>
                <Image _src="/images/team.png" _width="22px" _height="22px" />
                버블드 팀 소개
              </Li>
              <Li>
                <Image _src="/images/notice.png" _width="22px" _height="22px" />
                공지사항
              </Li>
              <Li>
                <Image _src="/images/request.png" _width="22px" _height="22px" />
                문의하기
              </Li>
            </Ul>
            <ButtonBox>
              <Button
                bgColor={({ theme }) => theme.colors.gray03}
                _color={({ theme }) => theme.colors.fontColor04}
                _padding="15px"
              >
                로그아웃
              </Button>
            </ButtonBox>
          </UlBackground>
        </div>
        </>
      ) : (
        <EditFavorites
          setIsEdit={setIsEdit}
        />
      )}
    </React.Fragment>
  );
};

const UlBackground = styled.div`
  ${FlexboxColumn}
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.gray01};
      height: 550px;
      justify-content: space-between;
    `;
  }}
`;

const Ul = styled.ul`
  padding: 0px 28px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 22px 0px;
`;

const ButtonBox = styled.div`
  padding: 70px 16px;
`;
export default Setting;