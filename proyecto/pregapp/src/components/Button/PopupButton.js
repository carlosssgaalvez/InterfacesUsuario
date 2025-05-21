import React, { useState } from 'react';
import ButtonBack from './ButtonBack';
import ButtonAdvance from './ButtonAdvance';
import '../../styles/buttons.css';
import { useNavigate } from 'react-router-dom';
import { speakIfTabbing } from '../../utils/speech';

function PopupButton({ valueButton, textValue, onClick, buttonBack, oneButton }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

    const openPopup = () => {
        setPopupOpen(true);
    };

    const handleExit = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="popup">
            {/* Botón para abrir el popup */}
            {valueButton === 'Salir' || buttonBack ? (
                <ButtonBack
                    valueButton={valueButton}
                    onClick={openPopup}
                    aria-label={valueButton}
                    onFocus={() => speakIfTabbing(valueButton)}
                />
            ) : (
                <ButtonAdvance
                    valueButton={valueButton}
                    onClick={openPopup}
                    aria-label={valueButton}
                    onFocus={() => speakIfTabbing(valueButton)}
                />
            )}

            {/* Popup: se muestra si isPopupOpen es true */}
            {isPopupOpen && (
                <div className="ventana-popup" role="dialog" aria-modal="true">
                    <div className="contenido-popup">
                        <h1
                            className="h1-popup"
                            tabIndex="0"
                            aria-label={textValue}
                            onFocus={() => speakIfTabbing(textValue)}
                        >
                            {textValue}
                        </h1>

                        {/* Botones del popup */}
                        {oneButton ? (
                            <div className="buttonContainerPopup">
                                <ButtonAdvance
                                    valueButton={"Aceptar"}
                                    onClick={onClick ? onClick : closePopup}
                                    aria-label="Aceptar"
                                    onFocus={() => speakIfTabbing("Aceptar")}
                                />
                            </div>
                        ) : (
                            <div className="buttonContainerPopup">
                                <ButtonAdvance
                                    valueButton={"No"}
                                    onClick={closePopup}
                                    aria-label="No"
                                    onFocus={() => speakIfTabbing("No")}
                                />
                                <ButtonBack
                                    valueButton={"Sí"}
                                    onClick={onClick ? onClick : handleExit}
                                    aria-label="Sí"
                                    onFocus={() => speakIfTabbing("Sí")}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupButton;
