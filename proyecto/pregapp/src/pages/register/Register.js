import React from 'react';
import './Register.css';
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import PlainText from '../../components/Text/PlainText';
import { useState, useEffect } from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import DivLabelInput from '../../components/divs/divLabelInput';
import DivGap4 from '../../components/divs/divGap4';
import { useLocation } from 'react-router-dom';


function Register(){
  // Esto es un ejemplo para probar los componentes
  const handleClick = () => {
    console.log("Button clicked!");
  }

  const navigate = useNavigate(); 
  const location = useLocation();
  const { user, password } = {user:'Usuario', password:'1234' }; 

  const handleExit = () => {
     navigate('/login'); 
  };

  const handleAdvance = () => {
    navigate('/home', {state: {user, password}}); 
  }
    
  const [inputValue, setInputValue] = useState(''); 
  
 
  return (
    <div className="Register">
      <header className="Register-header">   
    
        <div className="container">
        <DivGap4>
          <br/><br/>
        <ImageLogo className={"imgLogo"} src={Logo}/>
        <Title className="title" valueText={'REGISTRATE'}/>
       
          <DivLabelInput>
            <Label className="labelText" forId={'correo'} textValue={'Email:'}/> 
            <InputText id={'correo'} className={"inputText"} placeholder={"Escribe tu correo electrónico"} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'usuario'} textValue={'Usuario:'}/> 
            <InputText id={'usuario'} className={"inputText"} placeholder={"Escribe tu usuario"} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia'} className={"inputText"} placeholder={"Escribe tu contraseña"} type={"password"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia2'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia2'} className={"inputText"} placeholder={"Repite tu contraseña"} type={"password"}/><br/>
          </DivLabelInput>
        </DivGap4>
        <br/><br/>
        <div className="buttonContainer">
        <Button className="buttonBack" valueButton={'Volver'} onClick={handleExit}/>
        <Button className={"buttonAdvance"} valueButton={'Confirmar'} onClick={handleAdvance}/>
        
        </div>
        </div>
        </header>
    </div>
    
    );
}

export default Register;