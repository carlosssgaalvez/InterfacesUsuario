import React, { createContext, useEffect, useRef, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const audioRef = useRef(null);
    const [musicVolume, setMusicVolume] = useState(0.5); // tiene que estar entre 0 y 1
    const [isPlaying, setIsPlaying] = useState(false);
  
  const startMusic = () => {
    const audio = new Audio('/thinking-music.mp3');
    audio.loop = true;
    audio.volume = musicVolume;
    audioRef.current = audio;
  
    audio.play().catch(() => {
      console.warn('La música no pudo reproducirse automáticamente.');
    });

    setIsPlaying(true);
  };

  // Esperamos iteracción del usuario para iniciar la música, porque sino los navegadores lo bloquean
  useEffect(() => {
    if (isPlaying) return;

    // Esperar la interacción del usuario (un clic en la página)
    const handleUserInteraction = () => {
      startMusic();
      window.removeEventListener('click', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [isPlaying]);

  // Actualizar si se cambia desde settings
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = musicVolume;
    }
  }, [musicVolume]);

  return (
    <AudioContext.Provider value={{ musicVolume, setMusicVolume }}>
      {children}
    </AudioContext.Provider>
  );
};
