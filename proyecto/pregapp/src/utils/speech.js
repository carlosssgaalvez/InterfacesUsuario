export const speak = (text) => {
  const isTabbing = document.body.classList.contains('user-is-tabbing');
  if (!window.speechSynthesis || !isTabbing) return;

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
};

export const speakIfTabbing = (text) => {
  if (document.body.classList.contains('user-is-tabbing')) {
    speak(text);
  }
};

export const announceAnswerResult = (isCorrect) => {
  const text = isCorrect ? 'Correcto' : 'Incorrecto';
  speakIfTabbing(text);
};