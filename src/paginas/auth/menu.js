import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: '0', margin: '0 0 0 auto' }}>
        <li style={{ marginRight: '10px' }}><Link to="/">Home</Link></li>
        <li style={{ marginRight: '10px' }}><Link to="/login">Login</Link></li>
        <li style={{ marginRight: '10px' }}><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
