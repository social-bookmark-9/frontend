import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { Flexbox } from "../styles/flexbox";

import { Navbar, ArticleFolder, RemindCard, ModalD } from "../components";
import { Label, Title, Image, Text } from "../elements";
import { useParams } from "react-router";
import { getProfileAxios } from "../redux/modules/Profile";
import UserProfile from "../components/UserProfile";

const MyPageD = props => {
  // const dispatch = useDispatch();
  // const params = useParams();
  // const memberId = params.id;
  // const isMe = useSelector(state => state.user.isMe);

  // useEffect(() => {
  //   dispatch(getProfileAxios(memberId));
  // }, [dispatch, memberId]);

  // // ----- 폴더 리스트 ----- //
  // const folderList = useSelector(state => state.folder.folderList);
  // const defaultFolder = folderList[0];
  // const userFolder = folderList.slice(1);

  // // ----- 유저 정보 ----- //
  // const userInfo = useSelector(state => state.folder.userInfo);

  // // ----- 전체구독률 ----- //
  // const completeRates = [100, 49, 29, 0, 35];
  // const completeRate = Math.round(
  //   completeRates.reduce((a, b) => a + b) / completeRates.length,
  // );

  return (
    <React.Fragment>
      <h1>웹</h1>
    </React.Fragment>
  );
};

const DContainer = styled.div`
  width: 1115px;
  margin: auto;
`;

const Qheader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelBox = styled.div`
  ${Flexbox};
  padding-right: 20px;
`;
const AlertBox = styled.div`
  padding: 16px;
`;

const RemindAlert = styled.div`
  display: flex;
  height: 82px;
  border: 1px solid #f2f3f4;
  border-radius: 16px;
  padding: 19px 22px;
`;

const TextPoint = styled.span`
  ${({ theme }) => {
    const { colors, fontWeight } = theme;
    return css`
      display: inline-block;
      color: ${colors.fontPurple};
      font-weight: ${fontWeight.semiBold};
    `;
  }}
`;

export default MyPageD;
