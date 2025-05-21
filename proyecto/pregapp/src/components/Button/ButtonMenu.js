import React from 'react';
import { speakIfTabbing } from '../../utils/speech';


function ButtonMenu({ idButton, valueButton, colorButton, onClick, imgButton, ariaLabel }) {

    const handleFocus = () => {
        speakIfTabbing(ariaLabel || valueButton);
    };

    return (
        <button
            id={idButton}
            style={{
                backgroundColor: colorButton,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
            }}
            className="buttonMenu"
            onClick={onClick}
            aria-label={ariaLabel}
            onFocus={handleFocus} // Hablar al hacer foco con el tab
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
