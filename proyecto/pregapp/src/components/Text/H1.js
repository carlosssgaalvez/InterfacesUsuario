import React from 'react';
import { speakIfTabbing } from '../../utils/speech';

function H1({ className, valueText, speakOnFocus }) {
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

export default H1;