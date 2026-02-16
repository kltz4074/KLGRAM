import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <div className="app">
      
      {/* Background layer */}
      <div className="bg">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
      </div>

      {/* Foreground content */}
      <div className="content">
        
        <nav className="nav">
          <Link className="Link" to="/">Login</Link>
          <Link className="Link" to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
