import React from 'react';

function ButtonMenu({idButton, valueButton, colorButton, onClick, imgButton}) {
    return (
        <button
            id={idButton}
            style={{
                backgroundColor: colorButton,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'  // Espacio entre texto e imagen
            }}
            className="buttonMenu"
            onClick={onClick}
        >
            <span>{valueButton}</span>
            {imgButton && (
                <img
                    src={imgButton}
                    alt=""
                    style={{ width: '30px', height: '30px' }}
                />
            )}
        </button>
    );
}

export default ButtonMenu;