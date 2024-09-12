import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className='heading'>VOICE-FINGER-PRINTING</h1>
      <div><button className="btn1" onClick={() => navigate('/register')}>Register User</button></div>
      <div><button className="btn2" onClick={() => navigate('/already-registered')}>Already Registered</button></div>
    </div>
  );
};

export default HomePage;

