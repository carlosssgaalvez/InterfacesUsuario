function Title({ texto, tamaño = "text-2xl", color = "text-gray-900" }) {
    return <h1 className={`font-bold ${tamaño} ${color}`}>{texto}</h1>;
  }
  
  export default Title;