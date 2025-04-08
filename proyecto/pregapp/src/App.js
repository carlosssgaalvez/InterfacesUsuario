import './App.css';
import Home from './pages/home/Home';
import LogIn from "./pages/logIn/LogIn.js";
import Register from './pages/register/Register.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<LogIn />} />       {/* Página principal */}
<<<<<<< Updated upstream
              <Route path="/register" element={<Register />} /> {/* Página de registro */}
=======
              <Route path="/home" element={<Home />} />       {/* Página principal */}
>>>>>>> Stashed changes
            </Routes>
          </Router>
    </div>
  );
}

export default App;
