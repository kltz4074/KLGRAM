
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {

    return (
      <>
        <div className="title">KLGRAM</div>
        <div className="container">
          <input className="input" placeholder="Username" />
          <input className="input" placeholder="Password" type="password" />
          <button className="Button">Login</button>
          <h3 className='miniText'>Don't have an account? <Link to="/register" className="link">Register</Link></h3>
          <div className='miniText invisible'></div>
        </div>
      </>
    );
}

export default Login;