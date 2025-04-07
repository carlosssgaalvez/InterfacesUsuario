function Label({className, forId, textValue}) {
    return (
      <label className={className} htmlFor={forId}>{textValue}</label>
    );
  }
export default Label;