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

            <Title className="title" valueText={'¿Cómo Jugar?'}/>

            <Title className="title" valueText={'· MODO PREGUNTAS:'}/>
            <PlainText className="plainText2" textValue={'En este modo se te presentarán preguntas de forma aleatoria.'}/>
            <PlainText className="plainText2" textValue={'Cada pregunta tiene cuatro posibles respuestas, pero solo una es la correcta.'}/>
            <PlainText className="plainText2" textValue={'Selecciona la opción que creas correcta para sumar 20 puntos.'}/>
            <PlainText className="plainText2" textValue={'Puedes terminar la partida en cualquier momento pulsando "Salir", y se contarán los puntos obtenidos hasta ese momento.'}/>

            <Title className="title" valueText={'· MODO WORDLE:'}/>
            <PlainText className="plainText2" textValue={'Intenta adivinar la palabra secreta en 6 intentos o menos.'}/>
            <PlainText className="plainText2" textValue={'Cada vez que escribas una palabra y pulses Enter, las letras cambiarán de color para darte pistas:'}/>
            <PlainText className="plainText2" textValue={'· Verde: la letra está en la palabra y en la posición correcta.'}/>
            <PlainText className="plainText2" textValue={'· Naranja: la letra está en la palabra pero en otra posición.'}/>
            <PlainText className="plainText2" textValue={'· Gris: la letra no está en la palabra.'}/>
            <PlainText className="plainText2" textValue={'Si adivinas la palabra, ganas 200 puntos.'}/>


            <Title className="title" valueText={'· MODO MEMORIA:'}/>
            <PlainText className="plainText2" textValue={'Pon a prueba tu memoria encontrando todas las parejas de cartas iguales.'}/>
            <PlainText className="plainText2" textValue={'Haz clic en una carta para verla.'}/>
            <PlainText className="plainText2" textValue={'Selecciona otra carta para ver si coincide.'}/>
            <PlainText className="plainText2" textValue={'Si son iguales, permanecerán boca arriba.'}/>
            <PlainText className="plainText2" textValue={'Si no lo son, se darán la vuelta de nuevo tras unos segundos.'}/>
            <PlainText className="plainText2" textValue={'Tu objetivo es encontrar todos los pares en el menor tiempo posible.'}/>
            <PlainText className="plainText2" textValue={'¡Concéntrate y trata de completar el juego con el numero de movimientos posibles!'}/>
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