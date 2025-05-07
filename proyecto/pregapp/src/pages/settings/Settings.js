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

function Settings() {
  const [soundValue, setSoundValue] = useState(50);  // Estado para el volumen del sonido
  const {musicVolume, setMusicVolume} = useContext(AudioContext);
  const [initialMusicVolume] = useState(musicVolume); // Guardo el volumen por si el usuario no guarda las modificaciones

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
  },[]);


  // Posiblles funciones
  const handleAdvance = () => {
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
        <br/><br/>
        <ImageLogo className={"imgLogo"} src={Logo}/>
        <div className="containerSettings">
          <div className="settings-row">
            <img src={Sound} alt="Sound" className="icon" />
            <Slider className={"slider"}
              min={0}
              max={100}
              value={soundValue}
              onChange={handleSoundChange}
            />
          </div>
          <div className="settings-row">
            <img src={Music} alt="Music" className="icon" />
            <Slider
              min={0}
              max={100}
              value={musicVolume * 100}
              onChange={handleMusicChange}
            />
          </div>
        </div>
        <div className="buttonContainer2">
          <PopupButton valueButton={'No Guardar'} textValue={'¿Está seguro/a que NO quiere guardar la configuración?'} onClick={handleExit} />
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
