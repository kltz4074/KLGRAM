import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnimatedPage from "./components/AnimatedPage";
import "./App.css";

function App() {
  return (
    <div className="app">

      <div className="bg">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
      </div>

      <div className="content">

        <nav className="nav">
          <Link className="Link" to="/">Login</Link>
          <Link className="Link" to="/register">Register</Link>
        </nav>

        <div className="page-wrapper">
          <AnimatedPage>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AnimatedPage>
        </div>

      </div>
    </div>
  );
}

export default App;
