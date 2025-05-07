import React, { useState, useEffect } from 'react';
import './Wordle.css';
import '../../styles/globalStyles.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import DivGap4 from '../../components/divs/divGap4';
import ButtonBack from '../../components/Button/ButtonBack';
import { useNavigate } from 'react-router-dom';

const WORD_LENGTH = 6;
const MAX_ATTEMPTS = 6;
const SECRET_WORD = 'PRUEBA';

function Wordle() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [guesses, setGuesses] = useState([]); // Lista de palabras intentadas
  const [currentGuess, setCurrentGuess] = useState(''); // Palabra actual
  const [message, setMessage] = useState('');

  // sesion
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }
  }, []);
  const handleExit = () => {
    navigate('/home'); 
  }

  // captar pulsaciones de teclas
  const handleKeyPress = (event) => {
    if (guesses.length >= MAX_ATTEMPTS) return;
    const key = event.key.toUpperCase();

    if (key === 'BACKSPACE') { // borrar
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (key === 'ENTER') { // enviar
      if (currentGuess.length === WORD_LENGTH) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
        if (currentGuess === SECRET_WORD) { 
          setMessage('¡Correcto!');
        } else if (guesses.length + 1 === MAX_ATTEMPTS) {
          setMessage(`La palabra era: ${SECRET_WORD}`);
        }
      }
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {  //añadir letras
      setCurrentGuess(currentGuess + key);
    }
  };

  // captar lo que pulse en el teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  // Pintamos el recuadro una vez que enviamos la palabra
  const renderSquare = (letter, index, guess) => {
    const upperSecret = SECRET_WORD.toUpperCase();
    const upperGuess = guess.toUpperCase();
    const secretArray = upperSecret.split('');
    const guessArray = upperGuess.split('');
  
    let className = 'square';
    // Letras correctas en su sitio en verde
    if (letter === secretArray[index]) {
      className += ' correct';

    } else if (secretArray.includes(letter)) { // Letras correctas pero en otro sitio en naranja
      // Algoritmo para evitar contar más letras de las que hay en la palabra secreta (duplicados)
      const correctLetters = guessArray
        .map((l, i) => (l === secretArray[i] ? l : null))
        .filter(Boolean);
      const countInSecret = secretArray.filter(l => l === letter).length;
      const countInCorrect = correctLetters.filter(l => l === letter).length;
      if (countInCorrect < countInSecret) {
        className += ' present';
      } else {
        className += ' absent';
      }

    } else { // Letras incorrectas en gris
      className += ' absent';
    }
  
    return <div key={index} className={className}>{letter}</div>;
  };

  const isLoggedIn = user !== undefined && user !== "";
  return isLoggedIn ? (
    <div className='container'>
      <DivGap4>
        <br /><br />
        <ImageLogo className={"imgLogo"} src={Logo} />
        <h1 className='title'>Wordle</h1>
        <div className="game-container">
            
            {/* Para renderizar los intentos hechos (colorearlos) */}
          {guesses.map((guess, i) => (
            <div key={i} className="word-row">
              {Array.from(guess).map((letter, j) => renderSquare(letter, j, guess))}
            </div>
          ))}

            {/* Para mostrar lo el intento actual y lo que se escribe */}
          {guesses.length < MAX_ATTEMPTS && (
            <div className="word-row">
              {Array.from({ length: WORD_LENGTH }).map((_, i) => (
                <div key={i} className='square'>{currentGuess[i] || ''}</div>
              ))}
            </div>
          )}

            {/* Para mostrar los intentos restantes */}
          {Array.from({ length: MAX_ATTEMPTS - guesses.length - 1 }).map((_, i) => (
            <div key={i} className="word-row">
              {Array.from({ length: WORD_LENGTH }).map((_, j) => (
                <div key={j} className='square empty'></div>
              ))}
            </div>
          ))}
          <p>{message}</p>
          <ButtonBack valueButton={'Volver'} onClick={handleExit}/>
        </div>
        
      </DivGap4>
    </div>
  ) : (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack valueButton={'Volver'} onClick={() => navigate('/logIn')} />
    </div>
  );
}

export default Wordle;
