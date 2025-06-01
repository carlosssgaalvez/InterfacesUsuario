import React from 'react';
import '../../styles/buttons.css';
import { speakIfTabbing } from '../../utils/speech';

function ButtonAdvance({idButton, valueButton, onClick, classLogin}) {
    const handleFocus = () => {
        speakIfTabbing(valueButton);
    };

    console.log(classLogin);
    console.log(idButton);
    console.log(valueButton);
    return (
        <button id={idButton} className={(classLogin ? "buttonAdvanceLogin" : "buttonAdvance")} onClick={onClick} onFocus={handleFocus}>{valueButton}</button>
    );
}

export default ButtonAdvance;