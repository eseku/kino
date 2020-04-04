import React from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import MainArea from "./MainArea";

const MainPage = ({ children }) => {
  return (
    <>
      <MainContainer>
        <SideNavArea>
          <SideNav />
        </SideNavArea>

        <MainAreaContainer>
          <MainArea>{children}</MainArea>
        </MainAreaContainer>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
`;

const SideNavArea = styled.section`
  flex: 0.2;
  background-color: #141b25;
  padding: 50px 0;
  color: white;
  height: 100%;
  // outline: 1px solid red;
  margin-right: auto;
`;

const MainAreaContainer = styled.section`
  background-color: #0d181e;
  color: white;
  height: 100%;
  flex: 0.8;
  padding: 50px;
  width: 100%;
  // outline: 1px solid red;
  overflow: hidden;
  overflow-y: auto;
`;
