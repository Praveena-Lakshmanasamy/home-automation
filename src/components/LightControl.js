import React, { useState } from 'react';

const LightControl = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="light-control">
      <h2>Light Control</h2>
      <button onClick={toggleLight}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default LightControl;
