function Image({className, src, visivilityImg}) {
    return (
        <img className={className} src={src} alt="imagen" style={{ visibility: visivilityImg }} ></img>
    );
  }
  
  export default Image;