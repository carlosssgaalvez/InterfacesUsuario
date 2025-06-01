function Image({className, src, visivilityImg,alt}) {
    return (
        <img className={className} src={src} alt={alt} style={{ visibility: visivilityImg }} ></img>
    );
  }
  
  export default Image;