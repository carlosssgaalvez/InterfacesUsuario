import React from 'react';
import './Question.css';
import ButtonBack from '../../components/Button/ButtonBack';
import { useState, useEffect } from 'react';

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
  const [user, setUser] = useState('');
  const rightAnswer =  questionsData[idPregunta-1].respuesta_correcta;
  const questionOptions = questionsData[idPregunta-1].opciones;
  const questionText = questionsData[idPregunta-1].pregunta;

  const [colorAnswer1, setColorAnswer1] = useState('buttonAnswer');
  const [colorAnswer2, setColorAnswer2] = useState('buttonAnswer');
  const [colorAnswer3, setColorAnswer3] = useState('buttonAnswer');
  const [colorAnswer4, setColorAnswer4] = useState('buttonAnswer');
  const [success, setSuccess] = useState(false);
  const [isDisabledAnswer, setIsDisabledAnswer] = useState(false);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined); // or set it to an empty string or any other default value
    }
  },[]);
  


  const handleExit = () => {
    const puntosPartidaActual = 0;
    localStorage.setItem('puntosPartidaActual', puntosPartidaActual);
    navigate('/selectMode'); 
  };

  const handleClickAnswer1  = (event) => {

    if(rightAnswer === event.target.id){
      setColorAnswer1('buttonAnswerRight');
      setSuccess(true);
    }else{
      setColorAnswer1('buttonAnswerWrong');
      
      if (rightAnswer === questionOptions[1]) setColorAnswer2('buttonAnswerRight');
      else if (rightAnswer === questionOptions[2]) setColorAnswer3('buttonAnswerRight');
      else if (rightAnswer === questionOptions[3]) setColorAnswer4('buttonAnswerRight');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer2  = (event) => {
    if(rightAnswer === event.target.id){
      setColorAnswer2('buttonAnswerRight');
      setSuccess(true);
    }else{
      setColorAnswer2('buttonAnswerWrong');
      if (rightAnswer === questionOptions[0]) setColorAnswer1('buttonAnswerRight');
      else if (rightAnswer === questionOptions[2]) setColorAnswer3('buttonAnswerRight');
      else if (rightAnswer === questionOptions[3]) setColorAnswer4('buttonAnswerRight');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer3  = (event) => {
    if(rightAnswer === event.target.id){
      setColorAnswer3('buttonAnswerRight');
      setSuccess(true);
    }else{
      setColorAnswer3('buttonAnswerWrong');
      if (rightAnswer === questionOptions[0]) setColorAnswer1('buttonAnswerRight');
      else if (rightAnswer === questionOptions[1]) setColorAnswer2('buttonAnswerRight');
      else if (rightAnswer === questionOptions[3]) setColorAnswer4('buttonAnswerRight');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickAnswer4  = (event) => {
    if(rightAnswer === event.target.id){
      setColorAnswer4('buttonAnswerRight');
      setSuccess(true);
    }else{
      setColorAnswer4('buttonAnswerWrong');
      if (rightAnswer === questionOptions[0]) setColorAnswer1('buttonAnswerRight');
      else if (rightAnswer === questionOptions[1]) setColorAnswer2('buttonAnswerRight');
      else if (rightAnswer === questionOptions[2]) setColorAnswer3('buttonAnswerRight');
    }
    setIsDisabledAnswer(true);
  };

  const handleClickNext = () => {
    if(success){
      const puntosPartidaActual = parseInt(localStorage.getItem('puntosPartidaActual')) + 20;
      localStorage.setItem('puntosPartidaActual', puntosPartidaActual);
      const currentUser = localStorage.getItem('user');
      const userData = JSON.parse(currentUser);
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === userData.username);
      allUsersParsed[userIndex].points += 20;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      userData.points += 20;
      localStorage.setItem('user', JSON.stringify(userData));
      alert('¡Respuesta correcta! Has ganado 20 puntos.');
    }else{
      alert('Respuesta incorrecta. 0 puntos.');
    }
    if(idPregunta < questionsData.length){
      navigate(`/question?idPregunta=${parseInt(idPregunta) + 1}`);
      setIsDisabledAnswer(false);
      setColorAnswer1('buttonAnswer');
      setColorAnswer2('buttonAnswer');
      setColorAnswer3('buttonAnswer');
      setColorAnswer4('buttonAnswer');
      setSuccess(false);
    }else{
      navigate('/finalPoints');
    }
 
  };

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "";
  return isLoggedIn? (
    <div>
      <header>   
        <div className="container">
        <DivGap4>
            <br/><br/><br/>
           
            <QuestionText className={"pregunta"} forId={`pregunta${idPregunta}`} titleValue={`Pregunta ${idPregunta}`} textValue={questionText}/>
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
        <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'}  onClick={handleExit}  />    
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