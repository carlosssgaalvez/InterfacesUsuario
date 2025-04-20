import React from 'react';
import './Question.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import ButtonBack from '../../components/Button/ButtonBack';
import { useState, useEffect } from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import { useNavigate } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import QuestionText from '../../components/Text/QuestionText';
import ButtonAnswer from '../../components/Button/ButtonAnswer';
import { useLocation } from 'react-router-dom';
import PopupButton from '../../components/Button/PopupButton';

function Question(){
  const location = useLocation();
  const navigate = useNavigate(); 
  const { user, password } = location.state ||{} ;
  
  const rightAnswer = '1';

  const handleExit = () => {
    navigate('/selectMode', {state: {user, password}}); 
  };

  const [colorAnswer1, setColorAnswer1] = useState('buttonAnswer');
  const [colorAnswer2, setColorAnswer2] = useState('buttonAnswer');
  const [colorAnswer3, setColorAnswer3] = useState('buttonAnswer');
  const [colorAnswer4, setColorAnswer4] = useState('buttonAnswer');

  const [isDisabledAnswer, setIsDisabledAnswer] = useState(false);

  const handleClickAnswer1  = (event) => {
    console.log(event.target.id);
    console.log(rightAnswer);
    if(rightAnswer === event.target.id){
      setColorAnswer1('buttonAnswerRight');
    }else{
      setColorAnswer1('buttonAnswerWrong');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer2  = (event) => {
    console.log(event.target.id);
    console.log(rightAnswer);
    if(rightAnswer === event.target.id){
      setColorAnswer2('buttonAnswerRight');
    }else{
      setColorAnswer2('buttonAnswerWrong');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer3  = (event) => {
    console.log(event.target.id);
    console.log(rightAnswer);
    if(rightAnswer === event.target.id){
      setColorAnswer3('buttonAnswerRight');
    }else{
      setColorAnswer3('buttonAnswerWrong');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer4  = (event) => {
    console.log(event.target.id);
    console.log(rightAnswer);
    if(rightAnswer === event.target.id){
      setColorAnswer4('buttonAnswerRight');
    }else{
      setColorAnswer4('buttonAnswerWrong');
    }
    setIsDisabledAnswer(true);
  };

  const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
  return isLoggedIn? (
    <div>
      <header>   
        <div className="container">
        <DivGap4>
            <br/><br/><br/>
            <QuestionText className={"pregunta"} forId={"pregunta1"} titleValue={"Pregunta 1"} textValue={"Cuál es el mejor de estas opciones"}/>
            <br/>
          <DivLabelInput>
            <ButtonAnswer idButton={"1"} className={colorAnswer1} valueButton={"Opción 1"} onClick={handleClickAnswer1} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={"2"} className={colorAnswer2} valueButton={"Opción 2"} onClick={handleClickAnswer2} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={"3"} className={colorAnswer3} valueButton={"Opción 3"} onClick={handleClickAnswer3} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={"4"} className={colorAnswer4} valueButton={"Opción 4"} onClick={handleClickAnswer4} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          </DivGap4>
        
        <br/><br/>
        <div className="buttonContainer2">
        <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit}/>    
        <ButtonAdvance  valueButton={'Siguiente'} onClick={handleExit}/>
        </div>
        </div>
        </header>
    </div>
    ): (
      <div>
        <h1>Acceso denegado</h1>
        <p>Por favor, inicie sesión para acceder a esta página.</p>
        <ButtonBack  valueButton={'Volver'} onClick={handleExit}/>
      </div>
    );
}

export default Question;