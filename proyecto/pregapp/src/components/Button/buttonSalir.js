import React from 'react';
import Button from './Button'; 

const ButtonSalir = ({ onClick, ...props }) => {
    const handleExit = () => {
        window.close(); 
    };

    return (
        <Button
            onClick={handleExit}
            className="buttonSalir"
            valueButton="Salir"
            {...props}
        >
            Salir
        </Button>
    );
};

export default ButtonSalir;