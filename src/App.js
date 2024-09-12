import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import RegisterUser from './components/RegisterUser';
import AlreadyRegistered from './components/AlreadyRegistered';
import UserDetails from './components/UserDetails';  // Import new component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/already-registered" element={<AlreadyRegistered />} />
          <Route path="/user-details" element={<UserDetails />} />  {/* Add new route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
