import React, { useState } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <div className='body'>
    <div className="register_form_container">
  <h2 className='register'>Register</h2>
  <form className="register_form" onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Name"
      onChange={(e) => setName(e.target.value)}
      required
    />
    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Register</button>
  </form>
</div>
</div>
  );
};

export default Register;
