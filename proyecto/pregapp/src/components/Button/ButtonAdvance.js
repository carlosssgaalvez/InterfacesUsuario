import React from 'react';
import '../../styles/buttons.css';
function ButtonBack({idButton,valueButton, onClick}) {
    return (
        <button id={idButton} className={"buttonAdvance"} onClick={onClick}>{valueButton}</button>
    );
}

export default ButtonBack;