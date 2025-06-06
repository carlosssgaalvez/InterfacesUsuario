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

            <Title className={"title"} valueText={" kNowCat "}/>
            <PlainText className="plainText2" textValue={'¡Pon a prueba tu mente con nuestra colección de juegos de preguntas! Ejercita tu cerebro, amplía tus conocimientos y diviértete cada día.'} speakOnFocus/>

            <Title className="title" valueText={'¿Cómo Jugar?'} speakOnFocus/>
            <br/>
            
            <Title className="title" valueText={'· MODO PREGUNTAS:'} speakOnFocus/>
            <PlainText
              speakOnFocus
              className="plainText2"
              textValue={
                'En este modo se te presentarán preguntas de forma aleatoria.\n' +
                'Cada pregunta tiene cuatro posibles respuestas, pero solo una es la correcta.\n' +
                'Selecciona la opción que creas correcta para sumar 20 puntos.\n' +
                'Puedes terminar la partida en cualquier momento pulsando "Salir", y se contarán los puntos obtenidos hasta ese momento.'
              }
/>

            <br/>

            <Title className="title" valueText={'· MODO WORDLE:'} speakOnFocus/>
            <PlainText 
              speakOnFocus
              className="plainText2" 
              textValue={
                'Intenta adivinar la palabra secreta en 6 intentos o menos.\n' +
                'Cada vez que escribas una palabra y pulses Enter, las letras cambiarán de color para darte pistas:\n' +
                '· Verde: la letra está en la palabra y en la posición correcta.\n' +
                '· Naranja: la letra está en la palabra pero en otra posición.\n' +
                '· Gris: la letra no está en la palabra.\n' +
                'Si adivinas la palabra, ganas 200 puntos.'
                }/>
            <br/>

            <Title className="title" valueText={'· MODO MEMORIA:'} speakOnFocus/>
            <PlainText 
              speakOnFocus
              className="plainText2" 
              textValue={
                'Pon a prueba tu memoria encontrando todas las parejas de cartas iguales.\n' +
                'Haz clic en una carta para verla.\n' +
                'Selecciona otra carta para ver si coincide.\n' +
                'Si son iguales, permanecerán boca arriba.\n' +
                'Si no lo son, se darán la vuelta de nuevo tras unos segundos.\n' +
                'Tu objetivo es encontrar todos los pares en el menor tiempo posible.\n' +
                '¡Concéntrate y trata de completar el juego con el menor numero de movimientos posibles!'
                }/>
            <br/>

            <Title className="title" valueText={'MODO CADENA:'} speakOnFocus/>
            <PlainText 
              speakOnFocus  
              className="plainText2" 
              textValue={
                'Al principio se te da una palabra aleatoria.\n' +
                'Tienes 8 segundos para escribir otra palabra que empiece por la misma letra.\n' +
                'Por cada palabra que escribas se te darán puntos y se reiniciará el tiempo.\n' +
                'Puedes terminar la partida en cualquier momento pulsando "Salir", y se contarán los puntos obtenidos hasta ese momento.'
                }/>
            <br/>
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