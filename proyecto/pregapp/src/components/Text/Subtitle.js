import React from 'react';
import { speakIfTabbing } from '../../utils/speech';

function Subtitle({className, valueText, speakOnFocus}) {
    return (
      <h2 
        className={className}
        tabIndex={speakOnFocus ? 0 : undefined}
        onFocus={speakOnFocus ? () => speakIfTabbing(valueText) : undefined}
      >
      {valueText}
      </h2>
    );
  }
  
  export default Subtitle;