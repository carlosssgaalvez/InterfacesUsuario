import React from 'react';

function TextLink({onClick, valueText}) {
    return (<div onClick={onClick}>{valueText}</div>);
  }
  
export default TextLink;