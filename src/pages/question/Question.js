import React, { useState, useEffect } from 'react';
import './Question.css';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import { useNavigate, useLocation } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import QuestionText from '../../components/Text/QuestionText';
import ButtonAnswer from '../../components/Button/ButtonAnswer';
import PopupButton from '../../components/Button/PopupButton';
import questionsData from '../../resources/questions.json';
import '../../styles/text.css';
import Title from '../../components/Text/Title';
import { announceAnswerResult } from '../../utils/speech';

function Question() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const idPregunta = new URLSearchParams(location.search).get('idPregunta');
  const questionIndex = parseInt(idPregunta) - 1;
  const question = questionsData[questionIndex];
  const rightAnswer = question.respuesta_correcta;
  const questionOptions = question.opciones;
  const questionText = question.pregunta;
  const [puntos, setPuntos] = useState(null);
  const [user, setUser] = useState('');
  const [colorAnswer1, setColorAnswer1] = useState('buttonAnswer');
  const [colorAnswer2, setColorAnswer2] = useState('buttonAnswer');
  const [colorAnswer3, setColorAnswer3] = useState('buttonAnswer');
  const [colorAnswer4, setColorAnswer4] = useState('buttonAnswer');
  const [isDisabledAnswer, setIsDisabledAnswer] = useState(false);
  const [success, setSuccess] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }
  }, []);

  const handleExit = () => {
    localStorage.setItem('puntosPartidaActual', 0);
    navigate('/selectMode'); 
  };

  const handleClickAnswer = (index) => {
    if (isDisabledAnswer) return;

    const isCorrect = questionOptions[index] === rightAnswer;

    if (isCorrect) {
      setSuccess(true);
      setPuntos(20);
    }else{
      setPuntos(0);
    }
    setQuestionAnswered(true);

    setColorAnswer1(index === 0? (questionOptions[index] === rightAnswer ? 'buttonAnswerRight' : 'buttonAnswerWrong') : 'buttonAnswerNotHover');
    setColorAnswer2(index === 1? (questionOptions[index] === rightAnswer ? 'buttonAnswerRight' : 'buttonAnswerWrong') : 'buttonAnswerNotHover');
    setColorAnswer3(index === 2? (questionOptions[index] === rightAnswer ? 'buttonAnswerRight' : 'buttonAnswerWrong') : 'buttonAnswerNotHover');
    setColorAnswer4(index === 3? (questionOptions[index] === rightAnswer ? 'buttonAnswerRight' : 'buttonAnswerWrong') : 'buttonAnswerNotHover');
 
    setIsDisabledAnswer(true);

    return isCorrect;
  };

  const handleClickNext = () => {

    if (!questionAnswered) {
      return;
    }

    if (success) {

      const puntos = parseInt(localStorage.getItem('puntosPartidaActual') || '0') + 20;
      localStorage.setItem('puntosPartidaActual', puntos);
      user.QuestionPoints += 20;
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].QuestionPoints += 20;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
    }
    
    setQuestionAnswered(false);

    setColorAnswer1('buttonAnswer');
    setColorAnswer2('buttonAnswer');
    setColorAnswer3('buttonAnswer');
    setColorAnswer4('buttonAnswer');
    setIsDisabledAnswer(false);
    setSuccess(false);
    setPuntos(null);
    if (parseInt(idPregunta) < questionsData.length) {
      navigate(`/question?idPregunta=${parseInt(idPregunta) + 1}`);
    } else {
      navigate('/finalPoints?tipo=pregunta');
    }
    
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
            <Title className={"title"} valueText={"JUEGO DE PREGUNTAS"}/>
            <QuestionText forId={'puntos'} titleValue={`Pregunta ${idPregunta}`} textValue={questionText} points={puntos}/>
            <br/>
            <input type='hidden' id='puntos' value={puntos} />
            <ButtonAnswer
              idButton={questionOptions[0]}
              className={colorAnswer1}
              valueButton={questionOptions[0]}
              onClick={() => {
                const isCorrect = handleClickAnswer(0);
                if (isCorrect !== null) announceAnswerResult(isCorrect);
              }}
              isDisabled={isDisabledAnswer}
              isCorrect={questionOptions[0] === rightAnswer}
            />

            <ButtonAnswer
              idButton={questionOptions[1]}
              className={colorAnswer2}
              valueButton={questionOptions[1]}
              onClick={() => {
                const isCorrect = handleClickAnswer(1);
                if (isCorrect !== null) announceAnswerResult(isCorrect);
              }}
              isDisabled={isDisabledAnswer}
              isCorrect={questionOptions[1] === rightAnswer}
            />

            <ButtonAnswer
              idButton={questionOptions[2]}
              className={colorAnswer3}
              valueButton={questionOptions[2]}
              onClick={() => {
                const isCorrect = handleClickAnswer(2);
                if (isCorrect !== null) announceAnswerResult(isCorrect);
              }}
              isDisabled={isDisabledAnswer}
              isCorrect={questionOptions[2] === rightAnswer}
            />

            <ButtonAnswer
              idButton={questionOptions[3]}
              className={colorAnswer4}
              valueButton={questionOptions[3]}
              onClick={() => {
                const isCorrect = handleClickAnswer(3);
                if (isCorrect !== null) announceAnswerResult(isCorrect);
              }}
              isDisabled={isDisabledAnswer}
              isCorrect={questionOptions[3] === rightAnswer}
            />
          </DivGap4>
          <br/><br/>
          <div className="buttonContainer2">
            <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit} oneButton={false} buttonBack={true}/>
            {questionAnswered? (
              <ButtonAdvance idButton={'pregunta'} valueButton={'Siguiente'} onClick={handleClickNext}/>
            ):(
              <PopupButton valueButton={'Siguiente'} textValue={'Selecciona una respuesta antes de continuar.'} oneButton={true} buttonBack={false}/>
            )}
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
