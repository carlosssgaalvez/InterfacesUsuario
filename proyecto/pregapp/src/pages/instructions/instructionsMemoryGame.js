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

function InstructionsMemoryGame() {
  
    const [checkedMode3, setCheckedMode3] = useState(false);
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

    const handleClickBack = () => {
        user.checkedMode3 = checkedMode3;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
        const allUsers = localStorage.getItem('users');
        const allUsersParsed = JSON.parse(allUsers) || [];
        const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
        allUsersParsed[userIndex].checkedMode3 = checkedMode3;
        localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/selectMode');
    }

    useEffect(() => {
      if (user) {
        setCheckedMode3(user.checkedMode3);
      }
    }, [user]);

    const handleCheckBoxChange3 = () => {
      setCheckedMode3(!checkedMode3);
    };
    
    const handleClickNext = () => {
        user.checkedMode3 = checkedMode3;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
        const allUsers = localStorage.getItem('users');
        const allUsersParsed = JSON.parse(allUsers) || [];
        const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
        allUsersParsed[userIndex].checkedMode3 = checkedMode3;
        localStorage.setItem('users', JSON.stringify(allUsersParsed));
        navigate('/memoryGame');
        localStorage.setItem('puntosPartidaActual', 0);
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
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
    

    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>

          <Title className="title" valueText={'MODO MEMORIA:'}/>
          <Title className="title" valueText={'¿Cómo Jugar?'} speakOnFocus/>
          <PlainText 
            speakOnFocus
            className="plainText2" 
            textValue={
              'Pon a prueba tu memoria encontrando todas las parejas de cartas iguales.\n' +
              'Haz clic en una carta para verla.\n' +
              'Selecciona otra carta para ver si coinciden.\n' +
              'Si son iguales, permanecerán boca arriba.\n' +
              'Si no lo son, se darán la vuelta de nuevo tras unos segundos.\n' +
              'Tu objetivo es encontrar todos los pares en el menor tiempo posible.\n' +
              '¡Concéntrate y trata de completar el juego con el menor número de movimientos posibles!'
              }/>
          <br></br>
      </header>
        <div className="checkbox-container">
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"MEMORY GAME"} checked={checkedMode3} onChange={handleCheckBoxChange3} labelText="No volver a mostrar instrucciones"/>
                <Label className="textSettings" forId={'MEMORY GAME'} textValue={'No volver a mostrar instrucciones'}/>
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
export default InstructionsMemoryGame;