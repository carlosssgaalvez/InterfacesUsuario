import React from 'react';
import './LogIn.css';
import Button from '../../components/Button/Button';
import ButtonSalir from '../../components/Button/buttonSalir';  
import Image from '../../components/Image/Image';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import PlainText from '../../components/Text/PlainText';
import { useState, useEffect } from 'react';
import InputText from '../../components/Form/InputText';

function LogIn(){
  // Esto es un ejemplo para probar los componentes
  const handleClick = () => {
    console.log("Button clicked!");
  }

  const handleClickTextLink = () => {
    console.log("TextLink clicked!");
  }
    
  const [inputValue, setInputValue] = useState(''); 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
  return (
    <div className="LogIn">
      <header className="LogIn-header">   
        <Image className={"imgLogo"} src={Logo}/>
        <Title className="title" valueText={'Titulo'}/>
        <Button className="buttonStandard" valueButton={'button'} onClick={handleClick}/>
        <PlainText className="text" textValue={'Texto de ejemplo'}/>
        <Button className="textLink" valueButton={'Texto enlace de ejemplo'} onClick={handleClickTextLink}/>
        <br/>
        
        <PlainText className="text" textValue={inputValue}  />
      </header>

        <InputText className={"inputText"} placeholder={"Escribe algo"} value={inputValue} onChange={handleChange}/><br/>
        <br/>
        <ButtonSalir className="buttonSalir" valueButton={'Salir'}/>
    </div>
    );
}

export default LogIn;