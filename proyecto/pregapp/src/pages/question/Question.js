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
import questionsData from '../../resources/questions.json';
function Question(){
  const location = useLocation();
  const navigate = useNavigate(); 
  const idPregunta = new URLSearchParams(location.search).get('idPregunta');
  console.log("idPregunta", idPregunta);

  const { user, password } = location.state ||{} ;
  
  const rightAnswer =  questionsData[idPregunta-1].respuesta_correcta;
  const questionOptions = questionsData[idPregunta-1].opciones;
  const questionText = questionsData[idPregunta-1].pregunta;

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

  const handleClickNext = () => {
    if(idPregunta < questionsData.length){
      navigate(`/question?idPregunta=${parseInt(idPregunta) + 1}`, {state: {user, password}});
      setIsDisabledAnswer(false);
      setColorAnswer1('buttonAnswer');
      setColorAnswer2('buttonAnswer');
      setColorAnswer3('buttonAnswer');
      setColorAnswer4('buttonAnswer');
    }
 
  };

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
  return isLoggedIn? (
    <div>
      <header>   
        <div className="container">
        <DivGap4>
            <br/><br/><br/>
            <QuestionText className={"pregunta"} forId={"pregunta1"} titleValue={"Pregunta 1"} textValue={questionText}/>
            <br/>
          <DivLabelInput>
            <ButtonAnswer idButton={questionOptions[0]} className={colorAnswer1} valueButton={questionOptions[0]} onClick={handleClickAnswer1} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={questionOptions[1]} className={colorAnswer2} valueButton={questionOptions[1]} onClick={handleClickAnswer2} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={questionOptions[2]} className={colorAnswer3} valueButton={questionOptions[2]} onClick={handleClickAnswer3} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer idButton={questionOptions[3]} className={colorAnswer4} valueButton={questionOptions[3]} onClick={handleClickAnswer4} isDisabled={isDisabledAnswer}/>
            <br/><br/>
          </DivLabelInput>
          </DivGap4>
        
        <br/><br/>
        <div className="buttonContainer2">
        <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit}/>    
        <ButtonAdvance  valueButton={'Siguiente'} onClick={handleClickNext}/>
        </div>
        </div>
        </header>
    </div>
    ): (
      <div>
        <h1>Acceso denegado</h1>
        <p>Por favor, inicie sesión para acceder a esta página.</p>
        <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
      </div>
    );
}

export default Question;