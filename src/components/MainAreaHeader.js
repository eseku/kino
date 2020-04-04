import React from "react";
import { Avatar } from "antd";
import styled from "styled-components";
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined
} from "@ant-design/icons";

const MainAreaHeader = () => {
  return (
    <>
      <Wrapper>
        <div>
          <LeftOutlined style={{ fontSize: "20px" }} />
          <RightOutlined style={{ fontSize: "20px" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexBasis: "20%",
            alignItems: "center"
          }}
        >
          <div>
            <SearchOutlined style={{ fontSize: "20px" }} />
          </div>
          <div>
            <BellOutlined style={{ fontSize: "20px" }} />
          </div>
          <Profile>
            <div>
              <Avatar
                size={"large"}
                src={
                  "https://pixdrive.com/wp-content/uploads/edd/2015/11/woman-avatar-3.png"
                }
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div>
                <p style={{ margin: 0, display: "inline", fontWeight: "bold" }}>
                  Lucinda Mccarthy
                </p>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "10px" }}>Manage Account</p>
              </div>
            </div>
          </Profile>
        </div>
      </Wrapper>
    </>
  );
};

export default MainAreaHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // outline: 1px solid red;
  margin-bottom: 50px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 70%;
`;
