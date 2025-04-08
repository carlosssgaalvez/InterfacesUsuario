function QuestionText({className, forId, textValue, titleValue}) {
    return (
     
        <label className={className} htmlFor={forId}>
        <div className="questionBox">
          <h1 className= {className}>{titleValue}</h1>
          <p className={className}>{textValue}</p>
        </div>
        </label>
    );
  }
export default QuestionText;