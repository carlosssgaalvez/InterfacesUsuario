import React from 'react';
import './Instructions.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import imgLogo from '../../images/logo.png';
import Label from '../../components/Text/Label';
import PlainText from '../../components/Text/PlainText';
import Image from '../../components/Image/Image';
import ButtonBack from '../../components/Button/ButtonBack';
import DivGap4 from '../../components/divs/divGap4';


function Instructions() {
    // Esto es un ejemplo para probar los componentes
    const navigate = useNavigate();
    const { user, password } = {user:'Usuario', password:'1234' }; 
    //usar location.state para obtener el usuario y contraseña(cuando este listo home);
    const handleClick = () => {
        navigate('/home', {state: {user, password}});
      }

  return (
     <div className="Instructions">
      <header className="instruction-header">   
          <Image className={"logo"} src={imgLogo}/>
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
  );
 
}
export default Instructions;