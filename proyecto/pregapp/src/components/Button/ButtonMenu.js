import React from 'react';

function ButtonMenu({idButton, valueButton, colorButton, onClick}) {
    return (
        <button id={idButton} style={{backgroundColor: colorButton}} className={"buttonMenu"}  onClick={onClick}>{valueButton}</button>
    );
}

export default ButtonMenu;