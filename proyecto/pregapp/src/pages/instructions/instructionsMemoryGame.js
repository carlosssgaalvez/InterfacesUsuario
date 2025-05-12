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

function InstructionsMemoryGame() {
  
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
        navigate('/memoryGame');
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

          <Title className="title" valueText={'MODO MEMORIA:'}/>
          <Title className="" valueText={'¿Cómo Jugar?'}/>
          <PlainText className="plainText2" textValue={'Pon a prueba tu memoria encontrando todas las parejas de cartas iguales.'}/>
          <PlainText className="plainText2" textValue={'Haz clic en una carta para verla.'}/>
          <PlainText className="plainText2" textValue={'Selecciona otra carta para ver si coincide.'}/>
          <PlainText className="plainText2" textValue={'Si son iguales, permanecerán boca arriba.'}/>
          <PlainText className="plainText2" textValue={'Si no lo son, se darán la vuelta de nuevo tras unos segundos.'}/>
          <PlainText className="plainText2" textValue={'Tu objetivo es encontrar todos los pares en el menor tiempo posible.'}/>
          <PlainText className="plainText2" textValue={'¡Concéntrate y trata de completar el juego con el numero de movimientos posibles!'}/>
          <br></br>

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
export default InstructionsMemoryGame;