import React, { useState, useEffect, useContext } from 'react';
import './Settings.css';
import '../../styles/globalStyles.css';
import '../../styles/sliders.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Music from '../../images/music.png';
import Sound from '../../images/sound.png';
import DivGap4 from '../../components/divs/divGap4';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import ButtonBack from '../../components/Button/ButtonBack';
import { useNavigate } from 'react-router-dom';
import { AudioContext } from '../../components/AudioProvider/AudioContext';
import PopupButton from '../../components/Button/PopupButton';
import Subtitle from '../../components/Text/Subtitle';
import CheckBox from '../../components/CheckBox/CheckBox';
import Label from '../../components/Text/Label';
import DivLabelInput from '../../components/divs/divLabelInput';
import Title from '../../components/Text/Title';

function Settings() {
  const [soundValue, setSoundValue] = useState(50);  // Estado para el volumen del sonido
  const {musicVolume, setMusicVolume} = useContext(AudioContext);
  const [initialMusicVolume] = useState(musicVolume); // Guardo el volumen por si el usuario no guarda las modificaciones
  const [checkedMode1, setCheckedMode1] = useState(false);
  const [checkedMode2, setCheckedMode2] = useState(false);
  const [checkedMode3, setCheckedMode3] = useState(false);
  const [checkedMode4, setCheckedMode4] = useState(false);

  // Funciones para manejar el cambio de volumen (Provisional)
  const handleSoundChange = (value) => {
    setSoundValue(value);
    console.log(`Nuevo volumen de sonido: ${value}`);
  };

  const handleMusicChange = (value) => {
    setMusicVolume(value / 100);
    console.log(`Nuevo volumen de música: ${value}`);
  };

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }

    const storedMode1 = localStorage.getItem('checkedMode1');
    const storedMode2 = localStorage.getItem('checkedMode2');
    const storedMode3 = localStorage.getItem('checkedMode3');
    const storedMode4 = localStorage.getItem('checkedMode4');

    if (storedMode1 !== null) setCheckedMode1(storedMode1 === 'true');
    if (storedMode2 !== null) setCheckedMode2(storedMode2 === 'true');
    if (storedMode3 !== null) setCheckedMode3(storedMode3 === 'true');
    if (storedMode4 !== null) setCheckedMode4(storedMode4 === 'true');


  },[]);

  useEffect(() => {
    if (user) {
      setCheckedMode1(user.checkedMode1);
      setCheckedMode2(user.checkedMode2);
      setCheckedMode3(user.checkedMode3);
      setCheckedMode4(user.checkedMode4);
    }
  }, [user]);

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

  // Posiblles funciones

  const handleCheckBoxChange1 = () => {
    setCheckedMode1(!checkedMode1);
  };
  const handleCheckBoxChange2 = () => {
    setCheckedMode2(!checkedMode2);
  };
  const handleCheckBoxChange3 = () => {
    setCheckedMode3(!checkedMode3);
  };
  const handleCheckBoxChange4 = () => {
    setCheckedMode4(!checkedMode4);
  };

  const handleAdvance = () => {

    user.checkedMode1 = checkedMode1;
    user.checkedMode2 = checkedMode2;
    user.checkedMode3 = checkedMode3;
    user.checkedMode4 = checkedMode4;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('user', JSON.stringify(user));
    const allUsers = localStorage.getItem('users');
    const allUsersParsed = JSON.parse(allUsers) || [];
    const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
    allUsersParsed[userIndex].checkedMode1 = checkedMode1;
    allUsersParsed[userIndex].checkedMode2 = checkedMode2;
    allUsersParsed[userIndex].checkedMode3 = checkedMode3;
    allUsersParsed[userIndex].checkedMode4 = checkedMode4;
    localStorage.setItem('users', JSON.stringify(allUsersParsed));
    // localStorage.setItem('checkedMode1', checkedMode1);
    // localStorage.setItem('checkedMode2', checkedMode2);
    // localStorage.setItem('checkedMode3', checkedMode3);
    navigate('/home');
  }

  const handleExit = () => {
    setMusicVolume(initialMusicVolume);
    navigate('/home'); 
  }

  const handleAccessDenied = () => {
    navigate('/logIn');
  };



  const isLoggedIn = user !== undefined && user !== "";
  return isLoggedIn? (
    <div className='container'>
        <DivGap4>
          <ImageLogo className={"imgLogo"} src={Logo}/>
          <Title className="title" valueText={'Configuración'}/>
          <div className="settings-container">
              <Subtitle className={"textSettings"} valueText={"Selecciona las instrucciones que desea saltar:"}/>
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"PREGUNTAS"} checked={checkedMode1} onChange={handleCheckBoxChange1}/>
                <Label className="textSettings" forId={'PREGUNTAS'} textValue={'PREGUNTAS'}/>
              </DivLabelInput>
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"WORDLE"} checked={checkedMode2} onChange={handleCheckBoxChange2}/>
                <Label className="textSettings" forId={'WORDLE'} textValue={'WORDLE'}/>
              </DivLabelInput>
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"MEMORY GAME"} checked={checkedMode3} onChange={handleCheckBoxChange3}/>
                <Label className="textSettings" forId={'MEMORY GAME'} textValue={'MEMORIA'}/>
              </DivLabelInput>
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"CADENA"} checked={checkedMode4} onChange={handleCheckBoxChange4}/>
                <Label className="textSettings" forId={'CADENA'} textValue={'CADENA'}/>
              </DivLabelInput>
            </div>
          <div className="music-settings-container">
            <div className="settings-row">
              <div className='slider-container'>
                <img src={Music} alt="Music" className="icon" />
                <Slider 
                  id={"MUSICA"}
                  min={0}
                  max={100}
                  value={musicVolume * 100}
                  onChange={handleMusicChange}
                  
                />
              </div>
              <div className='slider-container'>
                <img src={Sound} alt="Sound" className="icon" />
                <Slider className={"slider"}
                  id={"SONIDO"}
                  min={0}
                  max={100}
                  value={soundValue}
                  onChange={handleSoundChange}
                />
              </div>
            </div>
            
          </div>
          <div className="buttonContainer2">
            <PopupButton buttonBack={true} valueButton={'No Guardar'} textValue={'¿Está seguro/a que NO quiere guardar la configuración?'} onClick={handleExit} />
            <Button className={"buttonAdvance"} valueButton={'Guardar'} onClick={handleAdvance}/>
          </div>
        </DivGap4>
    </div>
  ): (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
    </div>
    );
}

export default Settings;
