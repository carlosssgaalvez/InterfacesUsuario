## Prevención de errores
EJ : Si el usuario sale mientras está jugando decidle si seguro si quiere salir

## Navigate
import { useNavigate } from "react-router-dom";

function MiComponente() {
  const navigate = useNavigate(); // Hook para navegar

  const handleClick = () => {
    navigate("/about"); // Redirige a /about
  };

  return <button onClick={handleClick}>Ir a About</button>;
}

export default MiComponente;
## Saber donde se encuentra el usuario en todo momento