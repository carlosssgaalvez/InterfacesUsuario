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

  const handleExit = () => {
    navigate('/selectMode', {state: {user, password}}); 
  };
  
  const handleClickRight = () => {
    
  };
  const handleClickWrong = () => {
    
        
  };
  const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
  return isLoggedIn? (
    <div className="LogIn">
      <header className="LogIn-header">   
        <div className="container">
        <DivGap4>
            <br/><br/><br/>
            <QuestionText className={"pregunta"} forId={"pregunta1"} titleValue={"Pregunta 1"} textValue={"Cuál es el mejor de estas opciones"}/>
            <br/>
          <DivLabelInput>
            <ButtonAnswer className={"buttonAnswer"} valueButton={"Opción 1"} onClick={handleClickRight}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer className={"buttonAnswer"} valueButton={"Opción 2"} onClick={handleClickWrong}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer className={"buttonAnswer"} valueButton={"Opción 3"} onClick={handleClickWrong}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
            <ButtonAnswer className={"buttonAnswer"} valueButton={"Opción 4"} onClick={handleClickWrong}/>
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