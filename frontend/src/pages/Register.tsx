import { Link } from "react-router-dom";
import "./Register.css"

function Register() {
    return (
      <>
        <div className="title">KLGRAM</div>
        <div className="container">
          <input className="input" placeholder="Username" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" type="password" />
          <input className="input" placeholder="confirm Password" type="password" />
          
          <button className="Button">Register</button>
          <p className='miniText'>Already have an account? <Link to="/">Log in</Link></p>
        </div>
      </>
  );
}

export default Register;