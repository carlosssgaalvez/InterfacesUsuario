function Image({className, src}) {
    return (
      <div>
        <img className={className} src={src} alt="imagen"></img>
      </div>
    );
  }
  
  export default Image;