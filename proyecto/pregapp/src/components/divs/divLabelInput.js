import React from "react";
import "../../styles/divs.css";
function DivLabelInput({ children }) {
  const style = {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return <div style={style}>{children}</div>;
}

export default DivLabelInput;