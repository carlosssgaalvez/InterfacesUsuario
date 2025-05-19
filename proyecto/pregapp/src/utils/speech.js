export const speak = (text) => {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.cancel(); // cancela la lectura anterior si hay una en curso
  speechSynthesis.speak(utterance);
};