
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/" onClick={() => localStorage.removeItem('user')}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
