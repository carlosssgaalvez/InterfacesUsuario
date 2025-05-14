import React from "react";

function DivGap4({ children }) {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  };

  return <div style={style}>{children}</div>;
}

export default DivGap4;