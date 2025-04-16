import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Water Drop Tracker</p>
      <p>Contact: moinraza313786@gmail.com</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  bottom: 0,
  width: '100%',
  
};

export default Footer;
