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

function InstructionsQuestions() {
    const [checkedMode1, setCheckedMode1] = useState(false);
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
      user.checkedMode1 = checkedMode1;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].checkedMode1 = checkedMode1;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/selectMode');
    }

    useEffect(() => {
          if (user) {
            setCheckedMode1(user.checkedMode1);
          }
    }, [user]);
    
    const handleCheckBoxChange1 = () => {
      setCheckedMode1(!checkedMode1);
    };

    const handleClickNext = () => {
      user.checkedMode1 = checkedMode1;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].checkedMode1 = checkedMode1;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/question?idPregunta=1');
      localStorage.setItem('puntosPartidaActual', 0);
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };

    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>
          <Title className="title" valueText={'MODO PREGUNTAS:'}/>
          <Title className="title" valueText={'¿Cómo Jugar?'}/>
          <PlainText className="plainText2" textValue={'En este modo se te presentarán preguntas de forma aleatoria.'}/>
          <PlainText className="plainText2" textValue={'Cada pregunta tiene cuatro posibles respuestas, pero solo una es la correcta.'}/>
          <PlainText className="plainText2" textValue={'Selecciona la opción que creas correcta para sumar 20 puntos.'}/>
          <PlainText className="plainText2" textValue={'Puedes terminar la partida en cualquier momento pulsando "Salir", y se contarán los puntos obtenidos hasta ese momento.'}/>
          <br></br>
      </header>
        <div className="checkbox-container">
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"QUESTION GAME"} checked={checkedMode1} onChange={handleCheckBoxChange1}/>
                <Label className="textSettings" forId={'QUESTION GAME'} textValue={'No volver a mostrar instrucciones'}/>
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
export default InstructionsQuestions;