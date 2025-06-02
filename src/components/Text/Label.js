function Label({className, forId, textValue, isHidden}) {
    var opacityT = 1;
    var fontsizeT = '';
    if (isHidden) {
      opacityT = 0.65;
      fontsizeT = '0.5px';
    }
    return (
      <label className={className} htmlFor={forId} style={{opacity: opacityT, fontSize: fontsizeT}}>{textValue}</label>
    );
  }
export default Label;