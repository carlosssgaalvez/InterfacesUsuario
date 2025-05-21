import React from "react";
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import { speakIfTabbing } from "../../utils/speech";

function ButtonAnswer({ idButton, valueButton, onClick,className, isDisabled}) {
  const handleFocus = () => {
    speakIfTabbing(valueButton);
  };

  return ( <button id={idButton} disabled={isDisabled} className={className} onClick={onClick} onFocus={handleFocus}><div id={idButton} className="answerText">{valueButton}</div></button>
  );
}

export default ButtonAnswer;