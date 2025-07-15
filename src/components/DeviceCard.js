import React from 'react';
import './DeviceCard.css';

const DeviceCard = ({ device, onToggle }) => {
  return (
    <div className="device-card">
      <h3>{device.name}</h3>
      <p>Category: {device.category}</p>
      <p>Status: {device.status ? 'active' : 'inactive'}</p>
      <button
        className={device.status ? 'on' : 'off'}
        onClick={() => onToggle(device.id)}
      >
        {device.status ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default DeviceCard;
