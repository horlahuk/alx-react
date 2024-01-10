import logo from '../logo.jpg';
import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className='App-header'>
      <img src={logo} alt='logo'/>
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;