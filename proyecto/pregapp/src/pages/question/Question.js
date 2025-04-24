import React, { useState, useEffect } from 'react';
import './Question.css';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import QuestionText from '../../components/Text/QuestionText';
import ButtonAnswer from '../../components/Button/ButtonAnswer';
import PopupButton from '../../components/Button/PopupButton';
import questionsData from '../../resources/questions.json';

function Question() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const idPregunta = new URLSearchParams(location.search).get('idPregunta');
  const questionIndex = parseInt(idPregunta) - 1;
  const question = questionsData[questionIndex];
  const rightAnswer = question.respuesta_correcta;
  const questionOptions = question.opciones;
  const questionText = question.pregunta;
  const [showFeedback, setShowFeedback] = useState(false);

  const [user, setUser] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [colorAnswer1, setColorAnswer1] = useState('buttonAnswer');
  const [colorAnswer2, setColorAnswer2] = useState('buttonAnswer');
  const [colorAnswer3, setColorAnswer3] = useState('buttonAnswer');
  const [colorAnswer4, setColorAnswer4] = useState('buttonAnswer');
  const [isDisabledAnswer, setIsDisabledAnswer] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }
  }, []);

  useEffect(() => {
    if (showFeedback) {
      
      setTimeout(() => {
        if (success) {
          const puntos = parseInt(localStorage.getItem('puntosPartidaActual') || '0') + 20;
          localStorage.setItem('puntosPartidaActual', puntos);
  
          const currentUser = JSON.parse(localStorage.getItem('user'));
          const allUsersParsed = JSON.parse(localStorage.getItem('users')) || [];
          const userIndex = allUsersParsed.findIndex(u => u.username === currentUser.username);
          if (userIndex !== -1) {
            allUsersParsed[userIndex].points += 20;
            localStorage.setItem('users', JSON.stringify(allUsersParsed));
          }
          currentUser.points += 20;
          localStorage.setItem('user', JSON.stringify(currentUser));
  
          alert('¡Respuesta correcta! Has ganado 20 puntos.');
        } else {
          alert('Respuesta incorrecta. 0 puntos.');
        }
  
       
        if (parseInt(idPregunta) < questionsData.length) {
          navigate(`/question?idPregunta=${parseInt(idPregunta) + 1}`);
        } else {
          navigate('/finalPoints');
        }
  
        setShowFeedback(false);
      }, 0); 
    }
  }, [showFeedback]);
  useEffect(() => {
    setSelectedAnswer(null);
    setColorAnswer1('buttonAnswer');
    setColorAnswer2('buttonAnswer');
    setColorAnswer3('buttonAnswer');
    setColorAnswer4('buttonAnswer');
    setIsDisabledAnswer(false);
    setSuccess(false);
    setShowFeedback(false); 
  }, [idPregunta]);

  const handleExit = () => {
    localStorage.setItem('puntosPartidaActual', 0);
    navigate('/selectMode'); 
  };

  const handleClickAnswer = (index) => {
    if (isDisabledAnswer) return;
    setSelectedAnswer(index);
    setColorAnswer1(index === 0 ? 'buttonAnswerSelected' : 'buttonAnswer');
    setColorAnswer2(index === 1 ? 'buttonAnswerSelected' : 'buttonAnswer');
    setColorAnswer3(index === 2 ? 'buttonAnswerSelected' : 'buttonAnswer');
    setColorAnswer4(index === 3 ? 'buttonAnswerSelected' : 'buttonAnswer');
  };

  const handleClickNext = () => {
    if (selectedAnswer === null) {
      alert('Selecciona una respuesta antes de continuar.');
      return;
    }
  
    const selectedText = questionOptions[selectedAnswer];
    const isCorrect = selectedText === rightAnswer;
  
    const newColors = ['buttonAnswer', 'buttonAnswer', 'buttonAnswer', 'buttonAnswer'];
    if (isCorrect) {
      newColors[selectedAnswer] = 'buttonAnswerRight';
    } else {
      newColors[selectedAnswer] = 'buttonAnswerWrong';
      const correctIndex = questionOptions.findIndex(opt => opt === rightAnswer);
      newColors[correctIndex] = 'buttonAnswerRight';
    }
  
    setColorAnswer1(newColors[0]);
    setColorAnswer2(newColors[1]);
    setColorAnswer3(newColors[2]);
    setColorAnswer4(newColors[3]);
    setIsDisabledAnswer(true);
  
    
    setSuccess(isCorrect);
    setShowFeedback(true);
  };

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "";

  return isLoggedIn ? (
    <div>
      <header>   
        <div className="container">
          <DivGap4>
            <br /><br /><br />
            <QuestionText className={"pregunta"} forId={`pregunta${idPregunta}`} titleValue={`Pregunta ${idPregunta}`} textValue={questionText}/>
            <br/>
            <DivLabelInput>
              <ButtonAnswer idButton={questionOptions[0]} className={colorAnswer1} valueButton={questionOptions[0]} onClick={() => handleClickAnswer(0)} isDisabled={isDisabledAnswer}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
              <ButtonAnswer idButton={questionOptions[1]} className={colorAnswer2} valueButton={questionOptions[1]} onClick={() => handleClickAnswer(1)} isDisabled={isDisabledAnswer}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
              <ButtonAnswer idButton={questionOptions[2]} className={colorAnswer3} valueButton={questionOptions[2]} onClick={() => handleClickAnswer(2)} isDisabled={isDisabledAnswer}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
              <ButtonAnswer idButton={questionOptions[3]} className={colorAnswer4} valueButton={questionOptions[3]} onClick={() => handleClickAnswer(3)} isDisabled={isDisabledAnswer}/>
              <br/><br/>
            </DivLabelInput>
          </DivGap4>
          <br/><br/>
          <div className="buttonContainer2">
            <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit} />
            <ButtonAdvance valueButton={'Siguiente'} onClick={handleClickNext}/>
          </div>
        </div>
      </header>
    </div>
  ) : (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack valueButton={'Volver'} onClick={handleAccessDenied}/>
    </div>
  );
}

export default Question;
