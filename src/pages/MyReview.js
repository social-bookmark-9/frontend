import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import { Title } from "../elements";


const MyReview = () => {
  const mymemo = [
    {title:"UXUI 방법론", content:"UXUI시작할 때 도움이 많이 되었던 글입니다. 처음 시작하고자 하는 마음을 가지신 분들이 읽으면 좋을 것 같습니다"},
    {title:"아티클 제목제목", content:"UXUI시작할 때 도움이 많이 되었던 "},
    {title:"제목제목제목", content:"UXUI시작할 때 도움이 많이 되었던 "},
    {title:"제제목목", content:"UXUI시작할 때 도움이 많이 되었던 "},
  ]
  return (
    <React.Fragment>
      <Navbar title="내가 작성한 메모" />
      {mymemo.map((memo) => (
        <>
        <Container>
          <div style={{display:"flex", margin:"0 10px 16px 5px", alignItems:"center"}}>
            <div style={{display:"flex", width:"70%", justifyContent:"start"}}>
              <Title
                _fontSize={({ theme }) => theme.fontSizes.font18}
                _lineHeight="24px"
              >
                {memo.title}
              </Title>
            </div>
            <div style={{ display: "flex", width: "30%", justifyContent: "end" }}>
              <img src="./images/show.png" alt="" style={{float:"right", width:"25px"}} />
            </div>
          </div>
          <Content>
            <div style={{width:"100%", textAlign:"center", fontSize:"13px"}}>
              {memo.content}
            </div>
          </Content>
        </Container>
        <Hr />
        </>
      ))}
    </React.Fragment>
  )
}
const Container = styled.div`
  width: 100%;
  padding: 20px 15px 20px 15px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 26.5px 0 26.5px;
  border-radius: 8px;
  background-color: #F2F4F6;
`
const Hr = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  color: #F2F4F6;
  background-color: #F2F4F6;
`;
export default MyReview;