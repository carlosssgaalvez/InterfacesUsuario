import React from 'react';
import './Question.css';
import Button from '../../components/Button/Button';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Title from '../../components/Text/Title';
import ButtonBack from '../../components/Button/ButtonBack';
import { useState, useEffect } from 'react';
import InputText from '../../components/Form/InputText';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Label from '../../components/Text/Label';
import { useNavigate } from 'react-router-dom';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import QuestionText from '../../components/Text/QuestionText';
import ButtonAnswer from '../../components/Button/ButtonAnswer';
import { useLocation } from 'react-router-dom';

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
  return (
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
        <Button className="buttonBack" valueButton={'Volver'} onClick={handleExit}/>    
        <ButtonAdvance  valueButton={'Siguiente'} onClick={handleExit}/>
        </div>
        </div>
        </header>
    </div>
    );
}

export default Question;