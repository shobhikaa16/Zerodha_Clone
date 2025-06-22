import React, { useState } from 'react';
import axios from '../../util/AxiosConfig'; // axios instance with baseURL + credentials
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/signup', formData);
      setMessage('✅ Signup successful! You can now log in.');
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      console.error(err);
      setMessage('❌ Signup failed. Email may already exist or server error.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h2 className="mb-4">Signup</h2>
      <form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>

      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
}

export default Signup;
