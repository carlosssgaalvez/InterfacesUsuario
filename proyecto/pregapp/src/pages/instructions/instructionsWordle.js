import React, {useEffect,useState} from 'react';
import './Instructions.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import imgLogo from '../../images/logo.png';
import PlainText from '../../components/Text/PlainText';
import ButtonBack from '../../components/Button/ButtonBack';
import ImageLogo from '../../components/Image/ImageLogo';
import Title from '../../components/Text/Title';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import CheckBox from '../../components/CheckBox/CheckBox';
import Label from '../../components/Text/Label';
import DivLabelInput from '../../components/divs/divLabelInput';

function InstructionsWordle() {
    const [checkedMode2, setCheckedMode2] = useState(false);
    const navigate = useNavigate(); 
    const [user, setUser] = useState('');
     useEffect(() => {
       const storedUser = localStorage.getItem('user');
       if (storedUser) {
         setUser(JSON.parse(storedUser));
       } else {
         setUser(undefined); // or set it to an empty string or any other default value
       }
     },[]);

    useEffect(() => {
      if (user) {
        setCheckedMode2(user.checkedMode2);
      }
    }, [user]);
    
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

    const handleClickBack = () => {
      user.checkedMode2 = checkedMode2;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].checkedMode2 = checkedMode2;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/selectMode');
    }

    const handleClickNext = () => {
        user.checkedMode2 = checkedMode2;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
        const allUsers = localStorage.getItem('users');
        const allUsersParsed = JSON.parse(allUsers) || [];
        const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
        allUsersParsed[userIndex].checkedMode2 = checkedMode2;
        localStorage.setItem('users', JSON.stringify(allUsersParsed));
        navigate('/wordle');
    }

    const handleCheckBoxChange2 = () => {
      setCheckedMode2(!checkedMode2);
    };

    const handleAccessDenied = () => {
      navigate('/logIn');
    };
    
    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>

          <Title className="title" valueText={'MODO WORDLE:'}/>
          <Title className="title" valueText={'¿Cómo Jugar?'}/>
          <PlainText className="plainText2" textValue={'Intenta adivinar la palabra secreta en 6 intentos o menos.'}/>
          <PlainText className="plainText2" textValue={'Cada vez que escribas una palabra y pulses Enter, las letras cambiarán de color para darte pistas:'}/>
          <PlainText className="plainText2" textValue={'· Verde: la letra está en la palabra y en la posición correcta.'}/>
          <PlainText className="plainText2" textValue={'· Naranja: la letra está en la palabra pero en otra posición.'}/>
          <PlainText className="plainText2" textValue={'· Gris: la letra no está en la palabra.'}/>
          <PlainText className="plainText2" textValue={'Si adivinas la palabra, ganas 200 puntos.'}/>
          <br></br>

      </header>
        <div className="checkbox-container">
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"WORDLE GAME"} checked={checkedMode2} onChange={handleCheckBoxChange2}/>
                <Label className="textSettings" forId={'WORLDE GAME'} textValue={'No volver a mostrar instrucciones'}/>
              </DivLabelInput>
        </div>
        <div className="buttonContainer2">
            <ButtonBack  valueButton={'Volver'} onClick={handleClickBack}/>
            <ButtonAdvance valueButton={'Siguiente'} onClick={handleClickNext}/>
        </div>
     </div>
  ): (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
    </div>
    );
 
}
export default InstructionsWordle;