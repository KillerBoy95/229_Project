import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate(); 

  const handleSubmit = () => {
    navigate('/myProfile'); 
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">
            Sign In
            <div className="underline"></div>
          </div>
          <div className="name">
            <div className="label">
              Email:
              <input type="text" className="txtBox" placeholder="Enter your email" />
            </div>
          </div>
          <div className="name">
            <div className="label">
              Password:
              <input type="password" className="txtBox" placeholder="Enter your password" />
            </div>
          </div>
          <div className="buttonsOne">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
