import React from 'react';
import './LogIn.css';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import ButtonBack from '../../components/Button/ButtonBack';
import { useState, useEffect } from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
function LogIn(){
  // Esto es un ejemplo para probar los componentes
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Button clicked!");
  }

  const handleExit = () => {
    window.close(); 
  };

  const handleClickTextLink = () => {
    navigate('/register');
  }
    
  const [inputValue, setInputValue] = useState(''); 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
  return  (
    
    <div className="LogIn">
      <header className="LogIn-header">   
        <div className="container">
        <Image className={"imgLogo"} src={Logo}/>
          <Title className="title" valueText={'INICIAR SESIÓN'}/>
          <br/>

          <Label className="estiloTexto" forId={'usuario'} textValue={'Usuario'}/> 
          <InputText id={'usuario'} className={"inputText"} placeholder={"Escribe tu usuario"}/><br/>
          <br/>
          
          <Label className="estiloTexto" forId={'contrasenia'} textValue={'Contraseña'}/>
          <InputText id={'contrasenia'} className={"inputText"} placeholder={"Escribe tu contraseña"}/><br/>
          <br/>

          <Label idFor={'linkButton'} className="estiloTexto" textValue={'¿No tienes cuenta?, '}/>
          <Button id={'linkButton'} className="textLink" valueButton={'registrate aquí'} onClick={handleClickTextLink}/>
          <br/>
          
        </div>
      </header>
        <div className="buttonContainer">
        <ButtonBack valueButton={'Regresar'} onClick={handleExit}/> 
        <ButtonAdvance  valueButton={'Iniciar sesión'} onClick={handleClick}/>
        </div>
    </div>
    );
}

export default LogIn;