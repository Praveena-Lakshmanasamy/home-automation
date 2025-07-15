import React, { useState } from 'react';

const SecurityControl = () => {
  const [isArmed, setIsArmed] = useState(false);

  const toggleSecurity = () => {
    setIsArmed(!isArmed);
  };

  return (
    <div className="security-control">
      <h2>Security Control</h2>
      <button onClick={toggleSecurity}>
        {isArmed ? 'Disarm' : 'Arm'} Security
      </button>
    </div>
  );
};

export default SecurityControl;
