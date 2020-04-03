import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import MainArea from "./MainArea";

const MainPage = props => {
  console.log(props);
  return (
    <>
      <MainContainer>
        <SideNavArea>
          <SideNav />
        </SideNavArea>

        <MainAreaContainer>
          <MainArea childrenFromMain={props.children} />
        </MainAreaContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  // background-color: #f4f6fa;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

const SideNavArea = styled.div`
  background-color: #141b25;
  padding: 50px 0;
  color: white;
  flex-basis: 23.333%;
  height: 100%;
`;

const MainAreaContainer = styled.div`
  background-color: #0d181e;
  // flex-basis: 66.667%;
  color: white;
  padding: 50px 50px;
  height: 100%;
  width: 100%;
`;
