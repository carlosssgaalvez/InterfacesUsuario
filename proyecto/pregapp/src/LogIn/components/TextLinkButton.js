import React from 'react';

function TextLinkButton({ className, textValue, onClick}) {
    return (<button className={className} onClick={onClick}>{textValue}</button>);
  }
  
export default TextLinkButton;