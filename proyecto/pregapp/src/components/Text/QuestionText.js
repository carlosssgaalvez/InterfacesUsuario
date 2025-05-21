import { speakIfTabbing } from '../../utils/speech.js';

function QuestionText({ className, forId, textValue, titleValue, points }) {

  const handleFocus = () => {
    speakIfTabbing(textValue);
  };

  return (
    <label
      className="label-for-questionBox"
      htmlFor={forId}
      tabIndex={0}
      aria-label={`${titleValue}. ${textValue}. ${points !== null ? points + ' puntos.' : ''}`}
      onFocus={handleFocus}
    >
      <div className="questionBox">
        <h2 className={className}>{titleValue}</h2>
        <p className={className}>{textValue}</p>
        {points !== null && (
          <span className={`points ${points === 0 ? 'red' : 'green'}`}>
            {points} pts
          </span>
        )}
      </div>
    </label>
  );
}
export default QuestionText;
