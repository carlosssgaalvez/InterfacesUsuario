import React from 'react';
import { speakIfTabbing } from '../../utils/speech';

function Button({idButton, className, valueButton, onClick}) {
    const handleFocus = () => {
            speakIfTabbing(valueButton);
    };

    return (
        <button id={idButton} className={className} onClick={onClick} onFocus={handleFocus}>{valueButton}</button>
    );
}

export default Button;