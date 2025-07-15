import React, { useState, useEffect } from "react";
import DeviceCard from "./DeviceCard";
import "./Dashboard.css";

const initialDevices = [
  { id: 1, name: "Fan", category: "Lights", status: false },
  { id: 2, name: "Light 1", category: "Lights", status: false },
  { id: 3, name: "Thermostat", category: "Climate", status: false },
  { id: 4, name: "Air Purifier", category: "Climate", status: false },
  { id: 5, name: "Security Camera", category: "Security", status: false },
  { id: 6, name: "Smart Lock", category: "Security", status: false },
  { id: 7, name: "Smart TV", category: "Entertainment", status: false },
  { id: 8, name: "Speaker", category: "Entertainment", status: false },
  { id: 9, name: "Blender", category: "Kitchen", status: false },
  { id: 10, name: "Washing Machine", category: "Appliances", status: false },
];

const Dashboard = () => {
  const [devices, setDevices] = useState(() => {
    const storedDevices = localStorage.getItem("devices");
    return storedDevices ? JSON.parse(storedDevices) : initialDevices;
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDevice = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, status: !device.status } : device
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const categories = [...new Set(devices.map((device) => device.category))];

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      <header className="dashboard-header">
        <h1>Smart Home Dashboard</h1>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="device-grid">
            {devices
              .filter((device) => device.category === category)
              .map((device) => (
                <DeviceCard
                  key={device.id}
                  device={device}
                  onToggle={toggleDevice}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
