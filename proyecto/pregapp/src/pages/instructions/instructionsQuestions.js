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

function InstructionsQuestions() {
  
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
      navigate('/selectMode');
    }

    const handleClickNext = () => {
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
            <Title className="title" valueText={'Como Jugar (Modo preguntas)'}/>
            <PlainText className="plainText2" textValue={'En el menu selecciona jugar'}/>
            <PlainText className="plainText2" textValue={'Selecciona el modo preguntas'}/>
            <PlainText className="plainText2" textValue={'Selecciona la respuesta correcta y sumarás 20 puntos'}/>
            <PlainText className="plainText2" textValue={'En caso de que tengas que terminar la partida no es necesario responder todas las preguntas, puedes pulsar salir y se contarán los puntos ganados hasta entonces'}/>
      </header>
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