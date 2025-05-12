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

function InstructionsWordle() {
  
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
        navigate('/wordle');
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };

    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>

          <Title className="title" valueText={'MODO WORDLE:'}/>
          <Title className="" valueText={'¿Cómo Jugar?'}/>
          <PlainText className="plainText2" textValue={'Intenta adivinar la palabra secreta en 6 intentos o menos.'}/>
          <PlainText className="plainText2" textValue={'Cada vez que escribas una palabra y pulses Enter, las letras cambiarán de color para darte pistas:'}/>
          <PlainText className="plainText2" textValue={'· Verde: la letra está en la palabra y en la posición correcta.'}/>
          <PlainText className="plainText2" textValue={'· Naranja: la letra está en la palabra pero en otra posición.'}/>
          <PlainText className="plainText2" textValue={'· Gris: la letra no está en la palabra.'}/>
          <PlainText className="plainText2" textValue={'Si adivinas la palabra, ganas 200 puntos.'}/>
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
export default InstructionsWordle;