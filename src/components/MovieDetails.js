import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const MovieDetails = props => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <div
          style={{
            height: "100%",
            // border: "1px solid black",
            flexBasis: "35%"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <div>
              <BackButton
                icon={<ArrowLeftOutlined />}
                onClick={event => {
                  props.push("/");
                }}
              />
            </div>
            <div>
              <p style={{ margin: 0 }}>Back Home</p>
            </div>
          </div>

          <div style={{}}>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SY879_.jpg" />
          </div>
        </div>
        <div
          style={{
            height: "100%",
            flexBasis: "60%",
            border: "1px solid black"
          }}
        >
          <p style={{ margin: 0 }}>hello</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

const BackButton = styled(Button)`
  border: none;
`;

const Image = styled.img`
  width: 100%;
  height: 600px;
  margin: 50px 0;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.1)));
`;
