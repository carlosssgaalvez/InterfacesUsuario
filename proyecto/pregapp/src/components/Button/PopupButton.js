import React, { useState } from 'react';
import ButtonBack from './ButtonBack';
import ButtonAdvance from './ButtonAdvance';
import '../../styles/buttons.css';
import { useNavigate } from 'react-router-dom';
function PopupButton ({valueButton,textValue,onClick}) {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const navigate = useNavigate(); 
    const openPopup = () => {
        setPopupOpen(true);
    };
    const handleExit = () => {
        localStorage.removeItem('user');
        navigate('/login'); 
      }

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
                        <ButtonBack valueButton={"Sí"} onClick={onClick?onClick: handleExit}/>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default PopupButton;