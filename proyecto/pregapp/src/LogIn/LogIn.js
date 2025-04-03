import React from 'react';
import './LogIn.css';
import Button from '../components/Button/Button';
import Image from '../components/Image/Image';
import Logo from '../images/logo.png';
import Title from '../components/Text/Title';
import PlainText from '../components/Text/PlainText';

function LogIn(){

  const handleClick = () => {
    console.log("Button clicked!");
  }

    return (
    <div className="LogIn">
      <header className="LogIn-header">   
        <Image className={"imgLogo"} src={Logo}/>
        <Title className="title" valueText={'Titulo'}/>
        <Button className="buttonSalir" valueButton={'SALIR'} onClick={handleClick}/>
        <PlainText className="text" textValue={'Texto de ejemplo'}/>
      </header>
    </div>
    );
}

export default LogIn;