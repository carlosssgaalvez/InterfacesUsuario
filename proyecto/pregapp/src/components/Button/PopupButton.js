import React, { useState } from 'react';
import ButtonBack from './ButtonBack';
import ButtonAdvance from './ButtonAdvance';
import '../../styles/buttons.css';

function PopupButton ({valueButton,textValue, onClick }) {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="popup">
            <ButtonBack valueButton={valueButton} onClick={openPopup}/>
            {/* Popup: se muestra si isPopupOpen es true */}
            {isPopupOpen && (
            <div className="ventana-popup">
                <div className="contenido-popup">
                    <h1 className="h1-popup">{textValue}</h1>
                    {/* Botón para cerrar el popup */}
                    <div className="buttonContainerPopup">
                        <ButtonAdvance valueButton={"No"} onClick={closePopup}/>
                        <ButtonBack valueButton={"Sí"} onClick={onClick}/>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default PopupButton;