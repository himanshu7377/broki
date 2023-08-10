import React, { useState } from 'react';
import '../styles/LoginPage.css';
import msgIcon from '../asset/envelope.svg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    //  login check with provided credentials
    if (email === '' && password === '') {
      setError('');
      navigate('/home'); // Navigate to the home page
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={msgIcon} alt="Message Icon" className="msg-icon" />
        <h2>Login</h2>
        <p>GET STARTED</p>
        <p>Fill the form to log in</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-links">
              <a href="/register">Register Now</a>
              <a href="/forgot-password">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
