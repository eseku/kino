import React from "react";
import { Rate } from "antd";

const Rating = props => (
  <span>
    <Rate style={props.style} value={props.value / 2} />
    {props.value && props.show ? (
      <span className="ant-rate-text">{props.value / 2}</span>
    ) : (
      ""
    )}
  </span>
);
export default Rating;
