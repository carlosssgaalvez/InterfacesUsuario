import React from "react";
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
function ButtonAnswer({ idButton, valueButton, onClick,className }) {
  return ( <button id={idButton} className={className} onClick={onClick}><div className="answerText">{valueButton}</div></button>
  );
}

export default ButtonAnswer;