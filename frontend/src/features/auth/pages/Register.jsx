// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link} from 'react-router'

const Register = () => {

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="enter username" />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="email" id="email" name="email" placeholder="enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="enter password" />
          </div>
          <button className="button primary-button">Register</button>
        </form>
        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
