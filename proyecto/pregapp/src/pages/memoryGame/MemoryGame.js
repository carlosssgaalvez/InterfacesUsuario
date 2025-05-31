import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryGame.css'; 
import Title from '../../components/Text/Title';
import ButtonBack from '../../components/Button/ButtonBack';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import PopupButton from '../../components/Button/PopupButton'; 
import Image from '../../components/Image/Image';
import CardBack from '../../images/cartaBack.png'; 
import card1 from '../../images/pajaro.png';
import card2 from '../../images/elefante.png';
import card3 from '../../images/tortuga.png';
import card4 from '../../images/pez.png';
import card5 from '../../images/camaleon.png';
import { speakIfTabbing } from '../../utils/speech';
import Subtitle from '../../components/Text/Subtitle';
import PlainText from '../../components/Text/PlainText';


const cardData = [
  { id: 1, name: 'pájaro', image: card1 },
  { id: 2, name: 'elefante', image: card2 },
  { id: 3, name: 'tortuga', image: card3 },
  { id: 4, name: 'pez', image: card4 },
  { id: 5, name: 'camaleón', image: card5 },
];
const COLUMNS = 5;

const initializeBoard = () => {
  // Asocia cada imagen con su cardId
  const originalCards = cardData.map(card => ({
    image: card.image,
    name: card.name,
    cardId: card.id,
  }));

  // Duplica las cartas (para hacer las parejas)
  const duplicatedCards = [...originalCards, ...originalCards];

  // Baraja las cartas
  for (let i = duplicatedCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [duplicatedCards[i], duplicatedCards[j]] = [duplicatedCards[j], duplicatedCards[i]];
  }

  // Añade un ID único y las propiedades necesarias
  return duplicatedCards.map((card, index) => ({
    id: index,
    image: card.image,
    name: card.name,
    cardId: card.cardId, // ID de pareja
    isFlipped: false,
    isMatched: false,
  }));
};

function MemoryGame() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState(initializeBoard());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [canFlip, setCanFlip] = useState(true); 

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(undefined);
    }
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setCanFlip(false); 
      const [index1, index2] = flippedIndices;
      const card1 = cards[index1];
      const card2 = cards[index2];
      if (card1.cardId === card2.cardId) {
        speakIfTabbing(`¡Pareja encontrada! ${card1.name}`);
        setCards(prevCards =>
          prevCards.map(card =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, isMatched: true }
              : card
          )
        );
        setFlippedIndices([]);
        setCanFlip(true); 
      } else {
        speakIfTabbing(`No es una pareja. ${card1.name} y ${card2.name}`);
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === card1.id || card.id === card2.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedIndices([]); 
          setCanFlip(true); 
        }, 1000); 
      }
      setMoves(prevMoves => prevMoves + 1); 
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    const allMatched = cards.every(card => card.isMatched);
    if (allMatched && cards.length > 0) {
      setGameOver(true);
      // Aquí podrías guardar la puntuación si quieres
      // Por ejemplo, menos movimientos = más puntos
      // const score = calculateScore(moves); // Necesitarías definir calculateScore
      // updateUserScore(score); // Necesitarías definir updateUserScore para actualizar localStorage
      console.log(`Juego terminado en ${moves} movimientos!`);
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
       if(user.MemoryGameMoves < moves){
            user.MemoryGameMoves = moves;
            allUsersParsed[userIndex].MemoryGameMoves = moves;
            localStorage.setItem('user', JSON.stringify(user));
          }
    }
  }, [cards, moves]);


  const handleCardClick = (index) => {
    if (!canFlip || cards[index].isFlipped || cards[index].isMatched || flippedIndices.length === 2) {
      return;
    }

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === index ? { ...card, isFlipped: true } : card
      )
    );  
    speakIfTabbing(`Carta descubierta: ${cards[index].name}`);
    setFlippedIndices(prevIndices => [...prevIndices, index]);
  };

  const handlePlayAgain = () => {
    setCards(initializeBoard());
    setFlippedIndices([]);
    setMoves(0);
    setGameOver(false);
    setCanFlip(true);
  };

  const handleExit = () => {
    navigate('/selectMode');
  };

  const handleAccessDenied = () => {
    navigate('/logIn');
  };

  const isLoggedIn = user !== undefined && user !== null;

  return isLoggedIn ? (
    <nav className="nav">
    <div className="container">
    <div className="memory-game-container">
      <Title className="title" valueText="JUEGO DE MEMORIA" />
      <h2 className="moves-counter">Movimientos: {moves}</h2>

      {gameOver ? (
        <div className="game-over">
          <Subtitle className="MemoryGameText2" valueText='¡Felicidades, has ganado!' speakOnFocus/>
          <PlainText 
            speakOnFocus
            className="plainText2" 
            textValue={'Completaste el juego en ' + moves + ' movimientos.'}
          />
          <br></br>
          <div className="buttonContainer2">
            <PopupButton valueButton={'Salir'} textValue={'¿Está seguro/a que desea salir de la partida?'}  onClick={handleExit}  />    
            <ButtonAdvance  valueButton={'Reintentar'} onClick={handlePlayAgain}/>
          </div>
        </div>
      ) : (
        <div>
        <div className="card-grid">
          {cards.map((card, index) => {
          const row = Math.floor(index / COLUMNS) + 1;
          const col = (index % COLUMNS) + 1;

          return (
            <div
              key={card.id}
              className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
              onClick={() => handleCardClick(card.id)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(card.id);
                }
              }}
              onFocus={() => {
                const status = card.isFlipped || card.isMatched ? 'Carta descubierta' : 'Carta cubierta';
                let message = `${status}. Fila ${row}, columna ${col}`;
                if (card.isFlipped || card.isMatched) {
                  message += `. Animal: ${card.name}`;
                }
                speakIfTabbing(message);
              }}
              aria-label={`Carta en fila ${row}, columna ${col}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <Image className="card-front-image"  alt={`front${card.id}`} src={card.image} />
                </div>
                <div className="card-back">
                  <Image className="card-back-image" alt={`back${card.id}`} src={CardBack} />
                  
                </div>
              </div>
            </div>
          );
          })}
          
        </div>
          <div className="buttonContainer">
            <PopupButton 
              valueButton={'Salir'} 
              textValue={'¿Está seguro/a que desea salir de la partida?'} 
              onClick={handleExit} 
              oneButton={false} 
              buttonBack={true}
            />
          </div>
        </div>
      )}
    </div>
    </div>
    </nav>
  ) : (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack valueButton={'Volver'} onClick={handleAccessDenied} />
    </div>
  );
}

export default MemoryGame;