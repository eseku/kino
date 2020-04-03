import React from "react";
import {Avatar} from "antd";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          outline: "1px solid red",
          marginBottom: "50px"
        }}
      >
        <div>
          <LeftOutlined style={{fontSize: "20px"}} />
          <RightOutlined style={{fontSize: "20px"}} />
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
            <SearchOutlined style={{fontSize: "20px"}} />
          </div>
          <div>
            <BellOutlined style={{fontSize: "20px"}} />
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              flexBasis: "70%"
            }}
          >
            <div>
              <Avatar
                size={"large"}
                src={"https://pixdrive.com/wp-content/uploads/edd/2015/11/woman-avatar-3.png"}
              />
            </div>
            <div style={{marginLeft: "10px"}}>
              <div>
                <p style={{margin: 0, display: "inline", fontWeight: "bold"}}>Lucinda Mccarthy</p>
              </div>
              <div>
                <p style={{margin: 0, fontSize: "10px"}}>Manage Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAreaHeader;
