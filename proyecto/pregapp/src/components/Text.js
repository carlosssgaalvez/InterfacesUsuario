function Text({ children, tamaño = "text-base", color = "text-gray-900" }) {
    return <p className={`${tamaño} ${color}`}>{children}</p>;
  }
  
export default Text;