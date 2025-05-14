import React, { useState, useEffect } from 'react';
import './Wordle.css';
import '../../styles/globalStyles.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import DivGap4 from '../../components/divs/divGap4';
import { useNavigate } from 'react-router-dom';
import PopupButton from '../../components/Button/PopupButton';

const MAX_ATTEMPTS = 6;
const WORD_LIST = [
  'PRUEBA', 'GATO', 'PLANETA', 'CIELO', 'LIMON', 'AVION',
  'PERRO', 'CASA', 'ARBOL', 'NUBE', 'MAR', 'FUEGO', 'TIERRA', 'AGUA',
  'SOL', 'LUNA', 'FLOR', 'RANA', 'COCHE', 'TREN', 'BARCO', 'MONTAÑA',
  'LAGO', 'RIO', 'BOSQUE', 'DESIERTO', 'ISLA', 'VENTANA', 'PUERTA',
  'LIBRO', 'LAPIZ', 'MESA', 'SILLA', 'ORDENADOR', 'TELEFONO', 'RELOJ',
  'ZAPATO', 'CAMISA', 'PANTALON', 'SOMBRERO', 'CAMINO', 'CIUDAD',
  'PUEBLO', 'COMIDA', 'FRUTA', 'QUESO', 'CAFE', 'LECHE', 'HIELO', 'NARANJA'
];


function Wordle() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [secretWord, setSecretWord] = useState('');
  const [wordLength, setWordLength] = useState(0);
  const [guesses, setGuesses] = useState([]); // Lista de palabras intentadas
  const [currentGuess, setCurrentGuess] = useState(''); // Palabra actual
  const [message, setMessage] = useState('');

  // sesion
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    localStorage.setItem('puntosPartidaActual', 0);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }

    // Generar una palabra secreta aleatoria al cargar el componente
    const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase();
    setSecretWord(randomWord);
    setWordLength(randomWord.length);
  }, []);
  const handleExit = () => {
    navigate('/selectMode'); 
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

  // captar pulsaciones de teclas
  const handleKeyPress = (event) => {
    if (guesses.length >= MAX_ATTEMPTS) return;
    const key = event.key.toUpperCase();

    if (key === 'BACKSPACE') { // borrar
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (key === 'ENTER') { // enviar
      if (currentGuess.length === wordLength) {
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
        if (currentGuess === secretWord) { 
          setMessage('¡Correcto!');
          localStorage.setItem('puntosPartidaActual', 200);
          user.WordlePoints += 200;
          localStorage.setItem('user', JSON.stringify(user));
          const allUsers = localStorage.getItem('users');
          const allUsersParsed = JSON.parse(allUsers) || [];
          const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
          allUsersParsed[userIndex].WordlePoints += 200;
          localStorage.setItem('users', JSON.stringify(allUsersParsed));
          console.log(user);
          setTimeout(() => {
            navigate('/finalPoints?tipo=wordle&palabra=' + secretWord);
          }, 2000);
        } else if (guesses.length + 1 === MAX_ATTEMPTS) {
          localStorage.setItem('puntosPartidaActual', 0);
          console.log(user);
          navigate('/finalPoints?tipo=wordle&palabra=' + secretWord);
        }
      }
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < wordLength) {  //añadir letras
      setCurrentGuess(currentGuess + key);
    }
  };

  // captar lo que pulse en el teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  });

  // Pintamos el recuadro una vez que enviamos la palabra
  const renderSquare = (letter, index, guess,isCorrectGuess) => {
    const upperSecret = secretWord.toUpperCase();
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
              
              {Array.from({ length: wordLength }).map((_, i) => {
                 //<div key={i} className='square'>{currentGuess[i] || ''}</div>
                const letter = currentGuess[i] || '';
                const isFilled = i < currentGuess.length;
                return (
                  <div
                    key={i}
                    className={`square ${isFilled ? 'bounce' : ''}`}
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          )}

            {/* Para mostrar los intentos restantes */}
          {Array.from({ length: MAX_ATTEMPTS - guesses.length - 1 }).map((_, i) => (
            <div key={i} className="word-row">
              {Array.from({ length: wordLength }).map((_, j) => (
                <div key={j} className='square empty'></div>
              ))}
            </div>
          ))}
          <p>{message}</p>
          <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit} oneButton={false} buttonBack={true}/>
        </div>
        
      </DivGap4>
    </div>
  ) : (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
    
    </div>
  );
}

export default Wordle;
