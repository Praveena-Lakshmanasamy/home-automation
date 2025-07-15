import React, { useState } from 'react';

const ThermostatControl = () => {
  const [temperature, setTemperature] = useState(72);

  const increaseTemp = () => setTemperature(temperature + 1);
  const decreaseTemp = () => setTemperature(temperature - 1);

  return (
    <div className="thermostat-control">
      <h2>Thermostat Control</h2>
      <p>Current Temperature: {temperature}°F</p>
      <button onClick={increaseTemp}>Increase Temperature</button>
      <button onClick={decreaseTemp}>Decrease Temperature</button>
    </div>
  );
};

export default ThermostatControl;