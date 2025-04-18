import React, { useState } from 'react';
import './Settings.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import Music from '../../images/music.png';
import Sound from '../../images/sound.png';
import DivGap4 from '../../components/divs/divGap4';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const [soundValue, setSoundValue] = useState(50);  // Estado para el volumen del sonido
  const [musicValue, setMusicValue] = useState(50);  // Estado para el volumen de la música

  // Funciones para manejar el cambio de volumen
  const handleSoundChange = (value) => {
    setSoundValue(value);
    // Provisional para mostrar el valor en la consola
    console.log(`Nuevo volumen de sonido: ${value}`);
  };

  const handleMusicChange = (value) => {
    setMusicValue(value);
    // Provisional para mostrar el valor en la consola
    console.log(`Nuevo volumen de música: ${value}`);
  };

  // Esto es un ejemplo para probar los componentes
  const navigate = useNavigate();
  const { user, password } = {user:'Usuario', password:'1234' }; 

  const handleClick = () => {
    navigate('/home', {state: {user, password}});
  }

  return (
    <div className="settings">
      <header className="Profile-header">
        {/* Aquí podrías agregar más contenido si lo necesitas */}
      </header>
      
      <DivGap4>
        <br/><br/>
      <ImageLogo className={"imgLogo"} src={Logo} />
        <div className="containerSettings">
        <div className="control-row">
          <img src={Sound} alt="Sound" className="logo" />
          <Slider
            min={0}
            max={100}
            value={soundValue}
            onChange={handleSoundChange}
          />
        </div>
        <div className="control-row">
          <img src={Music} alt="Music" className="logo" />
          <Slider
            min={0}
            max={100}
            value={musicValue}
            onChange={handleMusicChange}
          />
        </div>
        <div className="control-row">
          <Button className={"buttonAdvance2"} valueButton={'Guardar'} onClick={handleClick}/>
        </div>
        </div>
      </DivGap4>
    </div>
  );
}

export default Settings;
