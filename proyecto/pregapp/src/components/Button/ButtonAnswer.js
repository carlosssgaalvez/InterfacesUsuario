import React from "react";
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
function ButtonAnswer({ idButton, valueButton, onClick,className, isDisabled}) {
  return ( <button id={idButton} disabled={isDisabled} className={className} onClick={onClick}><div id={idButton} className="answerText">{valueButton}</div></button>
  );
}

export default ButtonAnswer;