import React from 'react';

function Button({className,valueButton, onClick}) {
    return (
        <button className={className} onClick={onClick}>{valueButton}</button>
    );
}

export default Button;