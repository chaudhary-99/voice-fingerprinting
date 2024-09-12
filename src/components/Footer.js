import React from 'react';
import './Footer.css'; // We will style the footer using this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} VoicePrint. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
