import React from "react";
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import { speakIfTabbing } from "../../utils/speech";

function ButtonAnswer({ idButton, valueButton, onClick,className, isDisabled, isCorrect}) {
  const handleFocus = () => {
    speakIfTabbing(valueButton);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isDisabled) {
      onClick();

      const mensaje = isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta';
      speakIfTabbing(mensaje);
    }
  };


  return ( <button id={idButton} disabled={isDisabled} className={className} onClick={onClick} onFocus={handleFocus} onKeyDown={handleKeyDown}><div id={idButton} className="answerText">{valueButton}</div></button>
  );
}

export default ButtonAnswer;