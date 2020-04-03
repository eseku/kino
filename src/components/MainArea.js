import React from "react";
import MainAreaHeader from "./MainAreaHeader";

const MainArea = props => {
  // console.log(props);
  return (
    <>
      <MainAreaHeader />
      <div>{props.childrenFromMain}</div>
    </>
  );
};

export default MainArea;
