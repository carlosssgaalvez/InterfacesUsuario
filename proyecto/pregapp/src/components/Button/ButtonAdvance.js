import React from 'react';
import '../../styles/buttons.css';
import { speakIfTabbing } from '../../utils/speech';

function ButtonAdvance({idButton,valueButton, onClick}) {
    const handleFocus = () => {
        speakIfTabbing(valueButton);
    };

    return (
        <button id={idButton} className={"buttonAdvance"} onClick={onClick} onFocus={handleFocus}>{valueButton}</button>
    );
}

export default ButtonAdvance;