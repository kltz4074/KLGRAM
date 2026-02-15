import './Login.css';

function Login() {
    return (
        <div className="wrapper">
          <div className="page">
            <div className="title">KLGRAM</div>

            <div className="container">
              <input className="input" placeholder="Username" />
              <input className="input" placeholder="Password" type="password" />
              <button className="Button">Login</button>
              <p className='miniText'>Don't have account? <a href="register">Register</a></p>
            </div>
          </div>
        </div>
    );
}

export default Login;