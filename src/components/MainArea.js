import React from "react";
import MainAreaHeader from "./MainAreaHeader";

const MainArea = ({children}) => {
  return (
    <div style={{width: "100%"}}>
      <MainAreaHeader />
      {children}
    </div>
  );
};

export default MainArea;
