import './App.css';
import LogIn from "./pages/logIn/LogIn.js";
import Register from './pages/register/Register.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<LogIn />} />       {/* Página principal */}
              <Route path="/register" element={<Register />} /> {/* Página de registro */}
            </Routes>
          </Router>
    </div>
  );
}

export default App;
