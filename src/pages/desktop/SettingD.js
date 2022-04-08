import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { kakaoLogoutAxios } from "../../redux/modules/User";
import { KAKAO_AUTH_LOGOUT_URL } from "../../shared/OAuth";

import styled, { css } from "styled-components";
import { Button, Image, Title } from "../../elements";

import NavbarD from "../../components/common/NavbarD";
import EditFavoritesD from "../../components/setting/EditFavoritesD";
import Swal from "sweetalert2";

const SettingD = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isLogin = useSelector(state => state.user.isLogin);

  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleLogout = () => {
    Swal.fire({
      text: "로그아웃 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then(result => {
      if (result.isConfirmed) {
        navigate(KAKAO_AUTH_LOGOUT_URL);
        dispatch(kakaoLogoutAxios(navigate));
      }
    });
  };

  return (
    <React.Fragment>
      <NavbarD {...props} />
      {!isEdit ? (
        <Container>
          <UlTop>
            <Ul>
              <Title _padding="20px 0 57px 0">설정</Title>

              <Li
                onClick={() => {
                  navigate("/setting/remindEmail");
                }}
              >
                <Image _src="/images/email.png" _width="22px" _height="22px" />
                리마인드 메일 변경
              </Li>
              <Li onClick={toggleEdit}>
                <Image
                  _src="/images/favorite.png"
                  _width="22px"
                  _height="22px"
                />
                관심 카테고리 변경
              </Li>
            </Ul>
          </UlTop>
          <UlBottom>
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
                <Image
                  _src="/images/request.png"
                  _width="22px"
                  _height="22px"
                />
                문의하기
              </Li>
            </Ul>
            <ButtonBox onClick={handleLogout}>
              <Button
                bgColor={({ theme }) => theme.colors.gray03}
                _color={({ theme }) => theme.colors.fontColor04}
                _padding="15px"
              >
                로그아웃
              </Button>
            </ButtonBox>
          </UlBottom>
        </Container>
      ) : (
        <EditFavoritesD setIsEdit={setIsEdit} />
      )}
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray01};
`;

const UlTop = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.white};
      height: 35vh;
    `;
  }}
`;

const UlBottom = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Ul = styled.ul`
  width: 1119px;
  padding-top: 42px;
  margin: 0 auto;
`;

const Li = styled.li`
  display: flex;
  align-items: start;
  padding-bottom: 35px;
  font-size: ${({ theme }) => theme.fontSizes.font16};
  color: ${({ theme }) => theme.colors.gray06};
  cursor: pointer;
`;

const ButtonBox = styled.div`
  width: 1119px;
  margin: 0 auto;
  padding: 60px 0px;
`;
export default SettingD;
