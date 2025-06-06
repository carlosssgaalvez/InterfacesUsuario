import React from 'react';
import './LogIn.css';
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import { useState, useEffect} from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import PopupButton from '../../components/Button/PopupButton';
import PlainText from '../../components/Text/PlainText';

function LogIn(){
  // Esto es un ejemplo para probar los componentes
  const navigate = useNavigate();

  const [isCorrectAccount, setIsCorrectAccount] = useState(false);
  const [popUpText, setPopUpText] = useState('Alguno de los campos está vacío');

  const [userNameValue, setInputValueUserName] = useState('');
  const [passwordValue, setInputValuePassword] = useState(''); 
  
  const handleChangePassword = (event) => {
    setInputValuePassword(event.target.value);
    
    if(userNameValue !== '' && event.target.value !== ''){
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      if(storedUsers.length === 0){
        setPopUpText('No hay usuarios registrados, por favor registrate primero');
        setIsCorrectAccount(false);
      }
      
      // Buscar el usuario con el nombre y contraseña correctos
      const matchedUser = storedUsers.find(
        user => user.username === userNameValue && user.password === event.target.value
      );
      localStorage.setItem('user', JSON.stringify(matchedUser));
      if (matchedUser) {
        setPopUpText('');
        setIsCorrectAccount(true);
      }else{
        setPopUpText('Usuario o contraseña incorrectos');
        setIsCorrectAccount(false);
      }
    }else{
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  };
    useEffect(() => {
      document.documentElement.classList.add('page-scrollable');
      document.body.classList.add('page-scrollable');
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.classList.add('page-scrollable');
      }
    
      return () => {
        document.documentElement.classList.remove('page-scrollable');
        document.body.classList.remove('page-scrollable');
          if (rootElement) {
            rootElement.classList.remove('page-scrollable');
          }
      };
    }, []);
  
  const handleChangeUserName = (event) => {
    setInputValueUserName(event.target.value);

    if(passwordValue !== '' && event.target.value !== ''){
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      if(storedUsers.length === 0){
        setPopUpText('No hay usuarios registrados, por favor registrate primero');
        setIsCorrectAccount(false);
      }
      
      // Buscar el usuario con el nombre y contraseña correctos
      const matchedUser = storedUsers.find(
        user => user.username === event.target.value && user.password === passwordValue
      );
      localStorage.setItem('user', JSON.stringify(matchedUser));
      if (matchedUser) {
        setPopUpText('');
        setIsCorrectAccount(true);
      }else{
        setPopUpText('Usuario o contraseña incorrectos');
        setIsCorrectAccount(false);
      }
    }else{
      setPopUpText('Alguno de los campos está vacío');
      setIsCorrectAccount(false);
    }
  }


  const handleClick = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if(storedUsers.length === 0){
      setPopUpText('No hay usuarios registrados, por favor registrate primero');
      setIsCorrectAccount(false);
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
      setPopUpText('Usuario o contraseña incorrectos');
      setIsCorrectAccount(false);
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
            <InputText id={'usuario'} className={"inputText"} placeholder={""} value={userNameValue} onChange={handleChangeUserName}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <Label className="labelText" forId={'contrasenia'} textValue={'Contraseña:'}/>
            <InputText id={'contrasenia'} className={"inputText"} placeholder={""} value={passwordValue} onChange={handleChangePassword} type={"password"}/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <PlainText className={'plaintext'} textValue={'¿No tienes cuenta?, '}/>
            <Button idButton={'linkButton'} className="textLink" valueButton={'regístrate aquí'} onClick={handleClickTextLink}/>
          </DivLabelInput>
          </DivGap4>
        
        <br/>
        <div className="buttonContainer">
        {isCorrectAccount? (
          <ButtonAdvance   valueButton={'Iniciar sesión'} onClick={handleClick} classLogin={true}/>
        ):(
          <PopupButton valueButton={'Iniciar sesión'} textValue={popUpText} oneButton={true} classLogin={true}/>
        )}
        </div>
        </div>
        </header>
    </div>
    );
}

export default LogIn;