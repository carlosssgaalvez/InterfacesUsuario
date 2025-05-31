import { useState, useEffect, useRef } from "react";
import './Chain.css';
import '../../styles/globalStyles.css';
import '../../styles/buttons.css'
import Button from '../../components/Button/Button';
import InputText from "../../components/Form/InputText";
import Title from "../../components/Text/Title";
import ImageLogo from "../../components/Image/ImageLogo";
import Logo from "../../images/logo.png";
import PopupButton from "../../components/Button/PopupButton";
import { useNavigate } from 'react-router-dom';
import ButtonBack from "../../components/Button/ButtonBack";
import InputTextChainMode from "../../components/Form/InputTextChainMode";
import { speakWithoutTabbing } from "../../utils/speech";

export default function WordChainGame() {
  const WORD_LIST = [
  'PRUEBA', 'GATO', 'PLANETA', 'CIELO', 'LIMON', 'AVION',
  'PERRO', 'CASA', 'ARBOL', 'NUBE', 'MAR', 'FUEGO', 'TIERRA', 'AGUA',
  'SOL', 'LUNA', 'FLOR', 'RANA', 'COCHE', 'TREN', 'BARCO', 'MONTAÑA',
  'LAGO', 'RIO', 'BOSQUE', 'DESIERTO', 'ISLA', 'VENTANA', 'PUERTA',
  'LIBRO', 'LAPIZ', 'MESA', 'SILLA', 'ORDENADOR', 'TELEFONO', 'RELOJ',
  'ZAPATO', 'CAMISA', 'PANTALON', 'SOMBRERO', 'CAMINO', 'CIUDAD',
  'PUEBLO', 'COMIDA', 'FRUTA', 'QUESO', 'CAFE', 'LECHE', 'HIELO', 'NARANJA', 'INICIO'
  ];
  const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)].toUpperCase();
  const navigate = useNavigate();
  const [words, setWords] = useState([randomWord]);
  const [currentInput, setCurrentInput] = useState("");
  const [user, setUser] = useState('');
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(8);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef(null);

  // Establece el componente en el que se enfoca la pagina nada mas iniciarse
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 50); // Espera breve para asegurar que el input esté montado

    return () => clearTimeout(timer); // Limpieza del timeout
  }, []);
  
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


  // Temporizador
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }

    if (gameOver) return;

    if (timeLeft === 0) {
      setGameOver(true);
      setError("¡Tiempo agotado!");
      const puntos = (words.length * 10)-10;
      console.log('Puntos obtenidos:', puntos);
      console.log('Palabras usadas:', words);
      const length = words.length-1;
      localStorage.setItem('puntosPartidaActual', puntos);
      user.ChainPoints += puntos;
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].ChainPoints += puntos;
        if(user.ChainLength < length){
        user.ChainLength = length;
        allUsersParsed[userIndex].ChainLength = length;
      }
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      console.log(user);
      setTimeout(() => {
        navigate('/finalPoints?tipo=chain');
      }, 2000);
          
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

    // Anuncio de la letra inicial al cargar la página
  const hasSpoken = useRef(false);

  useEffect(() => {
    if (!hasSpoken.current && words.length > 0) {
      const firstWord = words[0];
      const lastChar = firstWord.slice(-1).toUpperCase();
      speakWithoutTabbing("Palabra que empiece por la letra: " + lastChar);
      hasSpoken.current = true;
    }
  }, [words]);

  const handleSubmit = () => {
    if (gameOver) return;

    const lastWord = words[words.length - 1];
    const lastChar = lastWord.slice(-1).toLowerCase();
    const newWord = currentInput.trim().toLowerCase();

    if (!newWord) return;

    if (words.includes(newWord)) {
      setError("¡Palabra repetida!");
      speakWithoutTabbing("¡Palabra repetida! Pon otra con la letra:" + lastChar);
    } else if (!newWord.startsWith(lastChar)) {
      setError(`La palabra debe empezar con "${lastChar}"`);
      speakWithoutTabbing(`La palabra debe empezar con la letra: ${lastChar}`);
    } else {
      setWords([...words, newWord]);
      setError("");
      setTimeLeft(9); // Reinicia el temporizador
      const nextLetter = newWord.slice(-1).toUpperCase();
      speakWithoutTabbing("Palabra que empiece por la letra: " + nextLetter);
    }

    setCurrentInput("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  
  };
  const handleExit = () => {
    navigate('/selectMode'); 
  }
   const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const palabra = words[words.length - 1];
  const isLoggedIn = user !== undefined && user !== "";
  return isLoggedIn? (
    <nav className="navBar">
    <div className="container">
      <ImageLogo className={"imgLogo"} src={Logo}/>
      <Title valueText={"Cadena de Palabras"}></Title>
      <h2>Última palabra: <strong>{palabra.toUpperCase()}</strong></h2>
      <p>Tiempo restante: {timeLeft}s</p>
      <br/>
     <div className="inputContainer">
      <label htmlFor="wordChainInput">Escribe la siguiente palabra:</label> 
      <InputTextChainMode
        id="wordChainInput"
        type="text"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        disabled={gameOver}
        ref={inputRef}
      />
      <Button
        onClick={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const lastChar = currentInput.trim().slice(-1);
            if (lastChar) {
              speakWithoutTabbing("Palabra que empiece por la letra: " + lastChar);
            }
          }
        }}
        className={"buttonChain"}
        disabled={gameOver}
        valueButton={"Enviar"}
      >
        Enviar
      </Button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br/>
      <h2>Palabras usadas:</h2>
      <div className="wordList">
        {words.map((word, index) => (
          <span key={index}>{word.toUpperCase()}{index < words.length - 1 ? ', ' : ''}</span>
        ))}
      </div>
      <br/><br/><br/>
      <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'} onClick={handleExit} oneButton={false} buttonBack={true}/>
    </div>
    </nav>
  ): (
      <div>
        <h1>Acceso denegado</h1>
        <p>Por favor, inicie sesión para acceder a esta página.</p>
        <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
      </div>
    );

}