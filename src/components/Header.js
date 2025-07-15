import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Smart Home Dashboard</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
