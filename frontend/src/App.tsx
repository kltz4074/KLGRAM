import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';
import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/login">Login</Link>
        <Link className="Link" to="/register">Register</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
