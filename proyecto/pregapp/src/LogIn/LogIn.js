import React from 'react';
import './LogIn.css';
import Button from '../components/Button/Button';

function LogIn(){

  const handleClick = () => {
    console.log("Button clicked!");
  }

    return (
    <div className="LogIn">
      <header className="LogIn-header">   
        <h1>Pagina</h1>
        <Button className="buttonSalir" valueButton={'SALIR'} onClick={handleClick}/>
      </header>
    </div>
    );
}

export default LogIn;