import React from 'react';
import { speakIfTabbing } from '../../utils/speech';

function PlainText({ className, textValue, speakOnFocus }) {
  return (
    <p
      className={className}
      tabIndex={speakOnFocus ? 0 : undefined}
      onFocus={speakOnFocus ? () => speakIfTabbing(textValue) : undefined}
    >
      {textValue.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}

export default PlainText;
