function Logo({ src, alt = "Logo", tamaño = "w-20 h-20" }) {
    return (
      <div className={`rounded-full overflow-hidden ${tamaño} border-2 border-gray-300`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }
  
  export default Logo;