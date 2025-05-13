function QuestionText({className, forId, textValue, titleValue, points}) {
    return (
     
        <label className="label-for-questionBox" htmlFor={forId}>
        <div className="questionBox">
          <h2 className= {className}>{titleValue}</h2>
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