import React from 'react';
import '../../styles/buttons.css';
import { speakIfTabbing } from '../../utils/speech';

function ButtonBack({ idButton, valueButton, onClick, onFocus, ariaLabel }) {
    return (
        <button
            id={idButton}
            className="buttonBack"
            onClick={onClick}
            onFocus={onFocus || (() => speakIfTabbing(valueButton))} // hablar al enfocar
            aria-label={ariaLabel || valueButton} // accesible para lectores de pantalla
        >
            {valueButton}
        </button>
    );
}

export default ButtonBack;