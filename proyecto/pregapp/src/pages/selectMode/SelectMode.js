
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

function SelectMode() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState('');
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(undefined); // or set it to an empty string or any other default value
      }
    },[]);

    const handleClickJugarModo1 = () => {
      navigate('/question?idPregunta=1');
      localStorage.setItem('puntosPartidaActual', 0);
    }
    const handleClickJugarModo2 = () => {
      navigate('/wordle');
      console.log("modo 2 seleccionado");
    }
    const handleClickJugarModo3 = () => {
      navigate('/memoryGame');
      localStorage.setItem('puntosPartidaActual', 0);
    }
    const handleClickJugarModo4 = () => {
      //navigate('/modo4');
      console.log("modo 4 seleccionado");
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
            <br/><br/>
          <ImageLogo className={"imgLogo"} src={Logo}/>
            <Title className={"title"} valueText={"SELECCIONA MODO DE JUEGO"}/>
            <DivLabelInput>
            <ButtonMenu idButton={'button1'} valueButton={'PREGUNTAS'} colorButton={'#C0C0C0'} onClick={handleClickJugarModo1}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button2'} valueButton={'WORDLE'} colorButton={'#1ABC9C'} onClick={handleClickJugarModo2}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button3'} valueButton={'MEMORIA'} colorButton={'#007BFF'} onClick={handleClickJugarModo3}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button4'} valueButton={'MODO ALEATORIO(...PROXIMAMENTE)'} colorButton={'#2ECC71'} onClick={handleClickJugarModo4}/>
              <br/><br/>
            </DivLabelInput>
            </DivGap4>
          
          <br/><br/>
          <div className="buttonContainer">
          <ButtonBack valueButton={'Volver'} onClick={handleExit}/>
          
          </div>
          <br/><br/>
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