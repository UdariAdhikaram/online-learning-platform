import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.data.token); // Store token
      navigate('/courses'); // Redirect to courses page
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <div className='body'>
    <div className="login_form_container">
  <h2 className="login">Login</h2>
  <form className="login_form" onSubmit={handleSubmit}>
    <input
      className="email_input"
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      className="password_input"
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button className="submit_btn" type="submit">
      Login
    </button>
  </form>
</div>
</div>
  );
};

export default Login;
