import React from 'react';
import ButtonBack from '../../components/Button/ButtonBack';
import { useEffect, useState } from 'react';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import DivGap4 from '../../components/divs/divGap4';
import { useNavigate, useLocation } from 'react-router-dom';
import PopupButton from '../../components/Button/PopupButton';
import questionsData from '../../resources/questions.json';
function FinalPoints(){
  const navigate = useNavigate();
  const location = useLocation();
  const tipo =  new URLSearchParams(location.search).get('tipo');
  const palabra = new URLSearchParams(location.search).get('palabra');
  const puntosTotales = questionsData.length * 20;
  const [puntosPartidaActual, setPuntosPartidaActual] = useState(0);
  const [user, setUser] = useState('');
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined); 
    }

    const storedPuntosPartidaActual = localStorage.getItem('puntosPartidaActual');
    if (storedPuntosPartidaActual) {
      setPuntosPartidaActual(storedPuntosPartidaActual);
      console.log('Puntos Partida Actual:', storedPuntosPartidaActual);
    } else {
      setPuntosPartidaActual(0); // or set it to an empty string or any other default value
    }    
  },[]);

  const handleExit = () => {
    localStorage.setItem('puntosPartidaActual', 0);
    navigate('/selectMode'); 
  };

  const handleReintentar = () => {
    localStorage.setItem('puntosPartidaActual', 0);
    if(tipo === 'wordle'){
      navigate('/wordle');
    }else if(tipo === 'chain'){
      navigate('/chain');
    }else{
      navigate('/question?idPregunta=1');
    }
  }

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== "";
  return isLoggedIn? (
    <div>
      <header>   
        <div className="container">
          <br/> <br/> <br/> <br/> <br/>
        <DivGap4>
            <div className="divWithBorder" style={{ textAlign: 'center' }}>

              {puntosPartidaActual == 0? 
                <h1 style={{ color: 'red' }}>¡PERDISTE!</h1> 
              :
                <h1>¡FELICIDADES!</h1>}

                <p>Has ganado los siguientes puntos:</p>
            </div>
            <div className="divWithBorder" style={{ backgroundColor: 'black', textAlign: 'center', fontSize: '2em', width: '120px' }}>
                {tipo == 'pregunta'?
                  <p className='puntuacion'>{puntosPartidaActual}/{puntosTotales}</p>
                :
                  <p className='puntuacion'>{puntosPartidaActual}</p>}
            </div>
            <div className="divWithBorder" style={{ textAlign: 'center' }}>
               
               
                  {tipo ===  'wordle'? 
                      puntosPartidaActual == 0? 
                        <p> La palabra era {palabra}  </p>
                        :<p>"Has acertado la palabra"  </p> 
                  :tipo === 'pregunta'?
                    <p className='percentage'>Has acertado el <span>{puntosPartidaActual/puntosTotales*100}%</span> de las preguntas</p>
                  :tipo === 'chain'?
                    <p>Has conseguido encadenar <span>{puntosPartidaActual/10 +1}</span> palabras</p>
                  :<p>prueba</p>} 
              
            </div>
        </DivGap4>
        
        <br/><br/>
        <div className="buttonContainer2">
        <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'}  onClick={handleExit}  />    
        <ButtonAdvance  valueButton={'Reintentar'} onClick={handleReintentar}/>
        </div>
        </div>
        </header>
    </div>
    ): (
      <div>
        <h1>Acceso denegado</h1>
        <p>Por favor, inicie sesión para acceder a esta página.</p>
        <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
      </div>
    );
}

export default FinalPoints;