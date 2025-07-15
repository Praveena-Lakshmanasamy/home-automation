import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';  
import Dashboard from './components/Dashboard';  
import Settings from './components/Settings'; 
import Profile from './components/Profile';  
import Sidebar from './components/Sidebar';  
import './App.css';  

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}
        
        <div className="main-content">
          {isLoggedIn ? (
            <>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </>
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
