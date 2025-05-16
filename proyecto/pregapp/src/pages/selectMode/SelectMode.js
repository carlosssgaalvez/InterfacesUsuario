
import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Title from '../../components/Text/Title';
import { useEffect, useState } from 'react';
import MemoryGameImg from '../../images/memoryGameImg.png';
import QuestionsImg from '../../images/questionsImg.png';
import WordleImg from '../../images/wordleImg.png';
import CadenaImg from '../../images/cadenalmg.png';

function SelectMode() {
  const [questionInstructions, setQuestionInstructions] = useState(true);
  const [wordleInstructions, setWordleInstructions] = useState(true);
  const [memoryInstructions, setMemoryInstructions] = useState(true);
  const [chainInstructions, setChainInstructions] = useState(true);
  

    const navigate = useNavigate(); 
    const [user, setUser] = useState('');
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(undefined); // or set it to an empty string or any other default value
      }

      const mode1 = localStorage.getItem('checkedMode1');
      const mode2 = localStorage.getItem('checkedMode2');
      const mode3 = localStorage.getItem('checkedMode3');
      const mode4 = localStorage.getItem('checkedMode4');

      setQuestionInstructions(!(mode1 === 'true'));
      setWordleInstructions(!(mode2 === 'true'));
      setMemoryInstructions(!(mode3 === 'true'));
      setChainInstructions(!(mode4 === 'true'));
    },[]);

    const handleClickJugarModo1 = () => {
      if (questionInstructions) {
        navigate('/instructionsQuestions');
      }else {  
        navigate('/question?idPregunta=1');
        localStorage.setItem('puntosPartidaActual', 0);
      }
    }
    const handleClickJugarModo2 = () => {
      if (wordleInstructions) {
        navigate('/instructionsWordle');
      }else {
        navigate('/wordle');
        console.log("modo 2 seleccionado");
      }
    }
    const handleClickJugarModo3 = () => {
      if (memoryInstructions) {
        navigate('/instructionsMemoryGame');
      }else {
        navigate('/memoryGame');
        localStorage.setItem('puntosPartidaActual', 0);
      }
    }
    const handleClickJugarModo4 = () => {
      if (chainInstructions) {
        navigate('/instructionsChain');
      }else {
        navigate('/chain');
        localStorage.setItem('puntosPartidaActual', 0);
      }
    }
    const handleExit = () => {
      navigate('/home'); 
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };

    const isLoggedIn = user !== undefined && user !== "" ;
    return isLoggedIn? (
      <div className='container'>
          <DivGap4>
          <ImageLogo className={"imgLogo"} src={Logo}/>
            <Title className={"title"} valueText={"SELECCIONA MODO DE JUEGO"}/>
            <DivLabelInput>
            <ButtonMenu idButton={'button1'} valueButton={'PREGUNTAS'} colorButton={'#C0C0C0'} onClick={handleClickJugarModo1} imgButton={QuestionsImg}/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button2'} valueButton={'WORDLE'} colorButton={'#1ABC9C'} onClick={handleClickJugarModo2} imgButton={WordleImg}/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button3'} valueButton={'MEMORIA'} colorButton={'#007BFF'} onClick={handleClickJugarModo3} imgButton={MemoryGameImg}/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button4'} valueButton={'CADENA'} colorButton={'#2ECC71'} onClick={handleClickJugarModo4} imgButton={CadenaImg}/>
            </DivLabelInput>
            </DivGap4>
          
          <div className="buttonContainer">
          <ButtonBack valueButton={'Volver'} onClick={handleExit}/>
          
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

export default SelectMode;