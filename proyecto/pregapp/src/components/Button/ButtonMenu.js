import React from 'react';

function ButtonMenu({ idButton, valueButton, colorButton, onClick, imgButton, ariaLabel }) {

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
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
            onFocus={() => speak(ariaLabel)} // Hablar al hacer foco
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
