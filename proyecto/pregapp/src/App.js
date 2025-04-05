import './App.css';
import LogIn from "./pages/logIn/LogIn.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    
    <div className="App">
          <Router>
            <Routes>
              <Route path="/login" element={<LogIn />} />       {/* Página principal */}
            </Routes>
          </Router>
    </div>
  );
}

export default App;
