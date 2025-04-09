function QuestionText({className, forId, textValue, titleValue}) {
    return (
     
        <label className={className} htmlFor={forId}>
        <div className="questionBox">
          <h2 className= {className}>{titleValue}</h2>
          <p className={className}>{textValue}</p>
        </div>
        </label>
    );
  }
export default QuestionText;