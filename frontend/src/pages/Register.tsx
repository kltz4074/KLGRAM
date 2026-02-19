import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");

    if (!username.trim()) {
      setError("Enter Username");
      return;
    }

    if (!email.trim()) {
      setError("Enter Email");
      return;
    }

    if (!password.trim()) {
      setError("Enter Password");
      return;
    }

    if (!confirmPassword.trim()) {
      setError("Confirm Password");
      return;
    }

    if (password !== confirmPassword) {
      setError("passwords do not match");
      return;
    }

    console.log("Registration successful");

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email
        })
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className="title">KLGRAM</div>

      <div className="container">
        <input
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="input"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="Button" onClick={handleRegister}>
          Register
        </button>
        {error && <p className="errorText">{error}</p>}

        <p className="miniText">
          Already have an account? <Link to="/" className="link">Log in</Link>
        </p>
        <div className='miniText invisible'></div>
      </div>
    </>
  );
}

export default Register;
