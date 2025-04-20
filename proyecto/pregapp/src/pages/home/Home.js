import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/buttons.css';
import PopupButton from '../../components/Button/PopupButton';

function Home() {
  
  const location = useLocation();
  const navigate = useNavigate(); 
  const { user, password } = location.state ||{} ;
  const handleClickJugar = () => {
    navigate('/selectMode', {state: {user: user, password: password}});
  }
  const handleClickInstrucciones = () => {
    navigate('/instructions', {state: {user: user, password: password}});
  }
  const handleClickAjustes = () => {
    navigate('/settings', {state: {user: user, password: password}});
  }
  const handleClickPerfil = () => {
    navigate('/profile', {state: {user: user, password: password}});
  }
  const handleExit = () => {
    navigate('/login'); 
  }
  console.log("user:",user, "password",password);
  const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
  return isLoggedIn? (
   

    <div className='container'>
        <DivGap4>
          <br/><br/>
        <ImageLogo className={"imgLogo"} src={Logo}/>
          
          <DivLabelInput>
          <ButtonMenu idButton={'button1'} valueButton={'JUGAR'} colorButton={'#1ABC9C'} onClick={handleClickJugar}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button2'} valueButton={'INSTRUCCIONES'} colorButton={'#1ABC9C'} onClick={handleClickInstrucciones}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button3'} valueButton={'AJUSTES'} colorButton={'#1ABC9C'} onClick={handleClickAjustes}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button4'} valueButton={'PERFIL'} colorButton={'#1ABC9C'} onClick={handleClickPerfil}/>
            <br/><br/>
          </DivLabelInput>
          </DivGap4>
        
        <br/><br/>
        <div className="buttonContainer">
          <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la aplicación?'} onClick={handleExit}/>
        </div>
        <br/><br/>
    </div>
  ): (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack  valueButton={'Volver'} onClick={handleExit}/>
    </div>
    );
}

export default Home;