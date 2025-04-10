import React from 'react';
import Title from '../../components/Text/Title';
import { useLocation } from 'react-router-dom';
import PlainText from '../../components/Text/PlainText';
import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Button from '../../components/Button/Button';
import '../../styles/buttons.css';

function Home() {
  
  const location = useLocation();
  const navigate = useNavigate(); 
  const { user, password } = location.state ||{} ;
  const handleClickJugar = () => {
    navigate('/question');
  }
  const handleClickInstrucciones = () => {
    navigate('/instructions');
  }
  const handleClickAjustes = () => {
    navigate('/settings');
  }
  const handleClickPerfil = () => {
    navigate('/profile');
  }
  const handleExit = () => {
    navigate('/login'); 
  }
  console.log("user:",user, "password",password);
  return user !== undefined? (
   

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
        <Button className="buttonBack" valueButton={'Volver'} onClick={handleExit}/>
        
        </div>
        <br/><br/>
    </div>
  ):<h1>acceso denegado</h1>;
}

export default Home;