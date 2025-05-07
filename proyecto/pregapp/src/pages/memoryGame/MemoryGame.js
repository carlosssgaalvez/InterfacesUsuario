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


const cardImages = [card1, card2, card3, card4, card5];
const cardIds = [1, 2, 3, 4, 5]; // IDs de las cartas

const initializeBoard = () => {
  // Asocia cada imagen con su cardId
  const originalCards = cardImages.map((image, index) => ({
    image,
    cardId: cardIds[index],
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
    <div className="memory-game-container">
      <Title className="title" valueText="JUEGO DE MEMORIA" />
      <p className="moves-counter">Movimientos: {moves}</p>

      {gameOver ? (
        <div className="game-over">
          <h2>¡Has ganado!</h2>
          <p>Completaste el juego en {moves} movimientos.</p>
          <ButtonAdvance  valueButton={'Reintentar'} onClick={handlePlayAgain}/>
        </div>
      ) : (
        <div className="card-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <Image className="card-front-image" src={card.image} />
                </div>
                <div className="card-back">
                  <Image className="card-back-image" src={CardBack} />
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="buttonContainer buttonContainerMemory">
         <PopupButton
            valueButton={'Salir'}
            textValue={'¿Está seguro/a que desea salir de la partida? Se perderá el progreso.'}
            onClick={handleExit} 
          />
      </div>
    </div>
  ) : (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack valueButton={'Volver'} onClick={handleAccessDenied} />
    </div>
  );
}

export default MemoryGame;