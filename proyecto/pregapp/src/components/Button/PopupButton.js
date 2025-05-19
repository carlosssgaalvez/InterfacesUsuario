import React, { useState } from 'react';
import ButtonBack from './ButtonBack';
import ButtonAdvance from './ButtonAdvance';
import '../../styles/buttons.css';
import { useNavigate } from 'react-router-dom';

function PopupButton({ valueButton, textValue, onClick, buttonBack, oneButton }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate();

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.cancel(); // Cancelar cualquier lectura anterior
        window.speechSynthesis.speak(utterance);
    };

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
                    onFocus={() => speak(valueButton)}
                />
            ) : (
                <ButtonAdvance
                    valueButton={valueButton}
                    onClick={openPopup}
                    aria-label={valueButton}
                    onFocus={() => speak(valueButton)}
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
                            onFocus={() => speak(textValue)}
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
                                    onFocus={() => speak("Aceptar")}
                                />
                            </div>
                        ) : (
                            <div className="buttonContainerPopup">
                                <ButtonAdvance
                                    valueButton={"No"}
                                    onClick={closePopup}
                                    aria-label="No"
                                    onFocus={() => speak("No")}
                                />
                                <ButtonBack
                                    valueButton={"Sí"}
                                    onClick={onClick ? onClick : handleExit}
                                    aria-label="Sí"
                                    onFocus={() => speak("Sí")}
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
