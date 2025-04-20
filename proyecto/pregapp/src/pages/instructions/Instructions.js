import React from 'react';
import './Instructions.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import imgLogo from '../../images/logo.png';
import PlainText from '../../components/Text/PlainText';
import ButtonBack from '../../components/Button/ButtonBack';
import ImageLogo from '../../components/Image/ImageLogo';


function Instructions() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { user, password } = location.state ||{} ;
    const handleClick = () => {
        navigate('/home', {state: {user, password}});
      }

    const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
    return isLoggedIn? (
      <div className="Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>
            <PlainText className="plainText1" textValue={'Como Jugar'}/>
            <PlainText className="plainText2" textValue={'Explicación 1 acerca del juego y su funcionamiento'}/>
            <PlainText className="plainText1" textValue={'Como Jugar 2'}/>
            <PlainText className="plainText2" textValue={'Explicación 2 acerca del juego y su funcionamiento'}/>
            <PlainText className="plainText1" textValue={'Como Jugar 3'}/>
            <PlainText className="plainText2" textValue={'Explicación 3 acerca del juego y su funcionamiento'}/>
      </header>
        <div className="buttonContainer">
        <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
        </div>
    </div>
  ): (
    <div>
      <h1>acceso denegado</h1>
      <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
    </div>
    );
 
}
export default Instructions;