import React from 'react';

function Button({idButton, className, valueButton, onClick}) {
    return (
        <button id={idButton} className={className} onClick={onClick}>{valueButton}</button>
    );
}

export default Button;