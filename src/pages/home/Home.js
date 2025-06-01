import React, { useEffect, useState } from 'react';

import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/buttons.css';
import '../../pages/home/Home.css';
import PopupButton from '../../components/Button/PopupButton';
import Title from '../../components/Text/Title';
import AjustesImg from '../../images/ajustesImg.png';
import JugarImg from '../../images/jugarImg.png';
import PerfilImg from '../../images/perfilImg.png';
import instruccionesImg from '../../images/instruccionesImg.png';


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

    useEffect(() => {
      document.documentElement.classList.add('page-scrollable');
      document.body.classList.add('page-scrollable');
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.classList.add('page-scrollable');
      }
    
      return () => {
        document.documentElement.classList.remove('page-scrollable');
        document.body.classList.remove('page-scrollable');
          if (rootElement) {
            rootElement.classList.remove('page-scrollable');
          }
      };
    }, []);
  

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "" ;
  return isLoggedIn? (
   

    <div className='container'>
        <DivGap4 className="gapHome">
          <ImageLogo className={"imgLogo"} src={Logo}/>
          <Title className={"title"} valueText={"MENÚ"}/>
          <DivLabelInput>
          <ButtonMenu idButton={'button1'} valueButton={'JUGAR'} colorButton={'#1ABC9C'} onClick={handleClickJugar} imgButton={JugarImg}/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button2'} valueButton={'INSTRUCCIONES'} colorButton={'#1ABC9C'} onClick={handleClickInstrucciones} imgButton={instruccionesImg}/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button3'} valueButton={'AJUSTES'} colorButton={'#1ABC9C'} onClick={handleClickAjustes} imgButton={AjustesImg}/>
          </DivLabelInput>
          <DivLabelInput>
          <ButtonMenu idButton={'button4'} valueButton={'PERFIL'} colorButton={'#1ABC9C'} onClick={handleClickPerfil} imgButton={PerfilImg}/>
          </DivLabelInput>
        </DivGap4>
        
        <div className="buttonContainer">
          <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la aplicación?'} oneButton={false} buttonBack={true}/>
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

export default Home;