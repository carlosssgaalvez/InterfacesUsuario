import React from 'react';
import './Register.css';
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import { useState } from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import DivLabelInput from '../../components/divs/divLabelInput';
import DivGap4 from '../../components/divs/divGap4';
import PopupButton from '../../components/Button/PopupButton';


function Register(){
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCorrectAccount, setIsCorrectAccount] = useState(false);
  const [popUpText, setPopUpText] = useState('Alguno de los campos está vacío');

  const handleExit = () => {
     navigate('/login'); 
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== '' && username !== '' && password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        setPopUpText('Las contraseñas no coinciden');
        setIsCorrectAccount(false);
      }else {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        const existingUser = storedUsers.find(user => user.username === username);
        if (existingUser) {
          setPopUpText('Ese nombre de usuario ya está registrado');
          setIsCorrectAccount(false);
        }else {
          setPopUpText('¡Registro exitoso!');
          setIsCorrectAccount(true);
        }
      }
    }else {
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  }

  const handleChangeUserName = (event) => {
    setUsername(event.target.value);
    if (email !== '' && event.target.value !== '' && password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        setPopUpText('Las contraseñas no coinciden');
        setIsCorrectAccount(false);
      }else {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        const existingUser = storedUsers.find(user => user.username === event.target.value);
        if (existingUser) {
          setPopUpText('Ese nombre de usuario ya está registrado');
          setIsCorrectAccount(false);
        }else {
          setPopUpText('¡Registro exitoso!');
          setIsCorrectAccount(true);
        }
      }
    }else {
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    if (email !== '' && username !== '' && event.target.value !== '' && confirmPassword !== '') {
      if (event.target.value !== confirmPassword) {
        setPopUpText('Las contraseñas no coinciden');
        setIsCorrectAccount(false);
      }else {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        const existingUser = storedUsers.find(user => user.username === username);
        if (existingUser) {
          setPopUpText('Ese nombre de usuario ya está registrado');
          setIsCorrectAccount(false);
        }else {
          setPopUpText('¡Registro exitoso!');
          setIsCorrectAccount(true);
        }
      }
    }else {
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  }
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    if (email !== '' && username !== '' && password !== '' && event.target.value !== '') {
      if (password !== event.target.value) {
        setPopUpText('Las contraseñas no coinciden');
        setIsCorrectAccount(false);
      }else {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
        const existingUser = storedUsers.find(user => user.username === username);
        if (existingUser) {
          setPopUpText('Ese nombre de usuario ya está registrado');
          setIsCorrectAccount(false);
        }else {
          setPopUpText('¡Registro exitoso!');
          setIsCorrectAccount(true);
        }
      }
    }else {
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  }

  const handleAdvance = () => {

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    

    const newUser = { email, username, password, QuestionPoints: 0, WordlePoints: 0, checkedMode1: false, checkedMode2: false, checkedMode3: false, checkedMode4: false, MemoryGameMoves:0, ChainPoints: 0, ChainLength: 0 };

    storedUsers.push(newUser);
   
    localStorage.setItem('users', JSON.stringify(storedUsers));

    navigate('/');
    // navigate('/home', { state: { user: username, password } });
  };
  
 
  return (
    <div className="Register">
      <header className="Register-header">   
    
        <div className="container">
        <DivGap4>
        <ImageLogo className={"imgLogo"} src={Logo}/>
        <Title className="title" valueText={'REGISTRATE'}/>
       
          <DivLabelInput>
            <Label className="labelText" forId={'correo'} textValue={'Email:'}/> 
            <InputText id={'correo'} value={email} onChange={handleChangeEmail} className={"inputText"} placeholder={""} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'usuario'} textValue={'Usuario:'}/> 
            <InputText id={'usuario'} value={username} onChange={handleChangeUserName} className={"inputText"} placeholder={""} type={"text"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia'} value={password} onChange={handleChangePassword} className={"inputText"} placeholder={""} type={"password"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia2'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia2'} value={confirmPassword} onChange={handleChangeConfirmPassword} className={"inputText"} placeholder={""} type={"password"}/><br/>
          </DivLabelInput>
        </DivGap4>
        <div className="buttonContainer">
        <Button className="buttonBack" valueButton={'Volver'} onClick={handleExit}/>
        {isCorrectAccount? (
          <PopupButton valueButton={'Confirmar'} textValue={popUpText} onClick={handleAdvance} oneButton={true}/>
        ):(
          <PopupButton valueButton={'Confirmar'} textValue={popUpText} oneButton={true}/>
        )}
        </div>
        </div>
        </header>
    </div>
    
    );
}

export default Register;