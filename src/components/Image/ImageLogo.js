function ImageLogo({className, src}) {
    return (
        <div className="circulo">
        <img className={className} src={src} alt="imagen"></img>
        </div>
    );
  }
  
  export default ImageLogo;