import React from 'react';
import './LogIn.css';
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import { useState} from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
function LogIn(){
  // Esto es un ejemplo para probar los componentes
  const navigate = useNavigate();

  const [userNameValue, setInputValueUserName] = useState('');
 
  const handleChangeUserName = (event) => {
    setInputValueUserName(event.target.value);
  }

  const [passwordValue, setInputValuePassword] = useState(''); 
  const handleChangePassword = (event) => {
    setInputValuePassword(event.target.value);
  };

  const handleClick = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if(storedUsers.length === 0){
      alert('No hay usuarios registrados, por favor registrate primero');
      return;
    }
    // Buscar el usuario con el nombre y contraseña correctos
    const matchedUser = storedUsers.find(
      user => user.username === userNameValue && user.password === passwordValue
    );
    localStorage.setItem('user', JSON.stringify(matchedUser));
    if (matchedUser) {
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  
  const handleClickTextLink = () => {
    navigate('/register');
  }

  return (
    <div className="LogIn">
      <header className="LogIn-header">   
        <div className="container">
        <DivGap4>
        <br/><br/>
          <ImageLogo className={"imgLogo"} src={Logo}/>
          
            <Title className="title" valueText={'INICIAR SESIÓN'}/>
          
          <DivLabelInput>
            <Label className="labelText" forId={'usuario'} textValue={'Usuario:'}/> 
            <InputText id={'usuario'} className={"inputText"} placeholder={"Escribe tu usuario"} value={userNameValue} onChange={handleChangeUserName}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia'} className={"inputText"} placeholder={"Escribe tu contraseña"} value={passwordValue} onChange={handleChangePassword} type={"password"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label idFor={'linkButton'} className="labelText" textValue={'¿No tienes cuenta?, '}/>
            <Button id={'linkButton'} className="textLink" valueButton={'registrate aquí'} onClick={handleClickTextLink}/>
          </DivLabelInput>
          </DivGap4>
        
        <br/>
        <div className="buttonContainer">
        <ButtonAdvance  valueButton={'Iniciar sesión'} onClick={handleClick}/>
        </div>
        </div>
        </header>
    </div>
    );
}

export default LogIn;