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

function Instructions() {
  
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
    const handleClick = () => {
      navigate('/home');
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };

    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>
            <Title className={"title"} valueText={" kNowCat "}/>
            <PlainText className="plainText2" textValue={'¡Pon a prueba tu mente con nuestra colección de juegos de preguntas! Ejercita tu cerebro, amplía tus conocimientos y diviértete cada día.'}/>
            <Title className="title" valueText={'Como Jugar (Modo preguntas)'}/>
            <PlainText className="plainText2" textValue={'En el menu selecciona jugar'}/>
            <PlainText className="plainText2" textValue={'Selecciona el modo preguntas'}/>
            <PlainText className="plainText2" textValue={'Selecciona la respuesta correcta y sumarás 20 puntos'}/>
            <PlainText className="plainText2" textValue={'En caso de que tengas que terminar la partida no es necesario responder todas las preguntas, puedes pulsar salir y se contarán los puntos ganados hasta entonces'}/>
            <Title className="title" valueText={'Como Jugar (WORDLE)'}/>
            <PlainText className="plainText2" textValue={'Proximamente será posible jugar a este modo de juego'}/>
            <Title className="title" valueText={'Como Jugar (MEMORIA)'}/>
            <PlainText className="plainText2" textValue={'Proximamente será posible jugar a este modo de juego'}/>
      </header>
        <div className="buttonContainer">
        <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
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
export default Instructions;