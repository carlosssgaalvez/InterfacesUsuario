import './App.css';
import Home from './pages/home/Home';
import LogIn from "./pages/logIn/LogIn.js";
import Register from './pages/register/Register.js';
import Profile from './pages/profile/Profile.js';
import Instructions from './pages/instructions/Instructions.js';
import Settings from './pages/settings/Settings.js';
import Question from './pages/question/Question.js';
import SelectMode from './pages/selectMode/SelectMode.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalPoints from './pages/puntuacionFinal/FinalPoints';
import MemoryGame from './pages/memoryGame/MemoryGame.js';
import Wordle from './pages/wordle/Wordle.js';

function App() {

  return (
    
    <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<LogIn />} />       {/* Página principal */}
              <Route path="/logIn" element={<LogIn />} />       {/* Página principal */}
              <Route path="/login" element={<LogIn />} />       {/* Página principal */}
              <Route path="/register" element={<Register />} /> {/* Página de registro */}
              <Route path="/home" element={<Home />} />       {/* Página principal */}
              <Route path="/profile" element={<Profile />} />       {/* Página de perfil */}
              <Route path="/instructions" element={<Instructions />} />       {/* Página de instrucciones */}
              <Route path="/settings" element={<Settings />} />       {/* Página de configuración */}
              <Route path="/question" element={<Question />} />       {/* Página de preguntas */}
              <Route path="/selectMode" element={<SelectMode />} />  {/* Página de selección de modo */}
              <Route path="/finalPoints" element={<FinalPoints />} />       {/* Página de puntuación final */}
              <Route path="/memoryGame" element={<MemoryGame />} />       {/* Página de juego de memoria */}
              <Route path="/wordle" element={<Wordle />} />       {/* Página de juego wordle */}
            </Routes>
          </Router>
    </div>
  );
}

export default App;
