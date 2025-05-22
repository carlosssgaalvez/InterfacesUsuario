import React from 'react';
import { speakIfTabbing } from '../../utils/speech';

function Title({ className, valueText, speakOnFocus }) {
  return (
    <h1
      className={className}
      tabIndex={speakOnFocus ? 0 : undefined}
      onFocus={speakOnFocus ? () => speakIfTabbing(valueText) : undefined}
    >
      {valueText}
    </h1>
  );
}

export default Title;
