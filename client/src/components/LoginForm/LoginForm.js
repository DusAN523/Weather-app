import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseFetchForm from "./UseFetchForm";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await UseFetchForm(
      `${backendUrl}/api/auth`,
      email,
      password
    );
    setEmail("");
    setPassword("");

    if (!token) {
      setErrorMessage("Invalid email or password");
      setTimeout(() => {
        setErrorMessage("");
      }, 3500);
    } else {
      localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error-message">{errorMessage}</p>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>

      <Link to="/register" className="link">
        Do not have an account yet?
      </Link>
      <Link to="#">Forgot password?</Link>
    </div>
  );
};

export default LoginForm;
