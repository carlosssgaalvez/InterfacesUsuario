import './App.css';
import Home from './pages/home/Home';
import LogIn from "./pages/logIn/LogIn.js";
import Register from './pages/register/Register.js';
import Profile from './pages/profile/Profile.js';
import Instructions from './pages/instructions/Instructions.js';
import Settings from './pages/settings/Settings.js';
import Question from './pages/question/Question.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<LogIn />} />       {/* Página principal */}
              <Route path="/register" element={<Register />} /> {/* Página de registro */}
              <Route path="/home" element={<Home />} />       {/* Página principal */}
              <Route path="/profile" element={<Profile />} />       {/* Página de perfil */}
              <Route path="/instructions" element={<Instructions />} />       {/* Página de instrucciones */}
              <Route path="/settings" element={<Settings />} />       {/* Página de configuración */}
              <Route path="/question" element={<Question />} />       {/* Página de preguntas */}
            </Routes>
          </Router>
    </div>
  );
}

export default App;
