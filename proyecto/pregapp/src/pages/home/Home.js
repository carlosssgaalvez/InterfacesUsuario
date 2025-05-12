import React, { useEffect, useState } from 'react';

import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/buttons.css';
import PopupButton from '../../components/Button/PopupButton';
import Title from '../../components/Text/Title';
import AjustesImg from '../../images/ajustesImg.png';
import JugarImg from '../../images/jugarImg.png';
import PerfilImg from '../../images/perfil_sin_marca.png';

function Home() {
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
  const handleClickJugar = () => {
    navigate('/selectMode');
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


  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "" ;
  return isLoggedIn? (
   

    <div className='container'>
        <DivGap4>
          <br/><br/>
        <ImageLogo className={"imgLogo"} src={Logo}/>
          <Title className={"title"} valueText={"MENÚ"}/>
          <DivLabelInput>
          <ButtonMenu idButton={'button1'} valueButton={'JUGAR'} colorButton={'#1ABC9C'} onClick={handleClickJugar} imgButton={JugarImg}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button2'} valueButton={'INSTRUCCIONES'} colorButton={'#1ABC9C'} onClick={handleClickInstrucciones}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button3'} valueButton={'AJUSTES'} colorButton={'#1ABC9C'} onClick={handleClickAjustes} imgButton={AjustesImg}/>
            <br/><br/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button4'} valueButton={'PERFIL'} colorButton={'#1ABC9C'} onClick={handleClickPerfil} imgButton={PerfilImg}/>
            <br/><br/>
          </DivLabelInput>
          </DivGap4>
        
        <br/><br/>
        <div className="buttonContainer">
          <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la aplicación?'} />
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

export default Home;