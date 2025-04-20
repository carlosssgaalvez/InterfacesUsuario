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

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleExit = () => {
     navigate('/login'); 
  };

  const handleAdvance = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    const existingUser = storedUsers.find(user => user.username === username);
    if (existingUser) {
      alert('Ese nombre de usuario ya está registrado');
      return;
    }
  

    const newUser = { email, username, password, points: 0 };
    storedUsers.push(newUser);
   
    localStorage.setItem('users', JSON.stringify(storedUsers));
  
    alert('¡Registro exitoso!');
    navigate('/login');
  };
  
 
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
            <InputText id={'correo'} value={email} onChange={e => setEmail(e.target.value)} className={"inputText"} placeholder={"Escribe tu correo electrónico"} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'usuario'} textValue={'Usuario:'}/> 
            <InputText id={'usuario'} value={username} onChange={e => setUsername(e.target.value)} className={"inputText"} placeholder={"Escribe tu usuario"} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia'} value={password} onChange={e => setPassword(e.target.value)} className={"inputText"} placeholder={"Escribe tu contraseña"} type={"password"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia2'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia2'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className={"inputText"} placeholder={"Repite tu contraseña"} type={"password"}/><br/>
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