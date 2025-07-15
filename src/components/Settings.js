import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [emailPreferences, setEmailPreferences] = useState(true);
  const [color, setColor] = useState("#4CAF50");
  const [avatar, setAvatar] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotifications(!notifications);
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleEmailPreferences = () => setEmailPreferences(!emailPreferences);

  const handleColorChange = (event) => setColor(event.target.value);
  const handleAvatarChange = (event) => setAvatar(URL.createObjectURL(event.target.files[0]));

  const handleSaveSettings = () => {
    setSaveMessage("Settings saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleResetSettings = () => {
    setDarkMode(false);
    setNotifications(true);
    setLanguage("English");
    setEmailPreferences(true);
    setColor("#4CAF50");
    setAvatar(null);
    setSaveMessage("Settings reset to default!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <div className={`settings-container ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="settings-title">Settings</h2>

      <div className="setting-option">
        <label>Dark Mode</label>
        <button
          className={`toggle-btn ${darkMode ? "on" : "off"}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "ON" : "OFF"}
        </button>
      </div>

      <div className="setting-option">
        <label>Notifications</label>
        <button
          className={`toggle-btn ${notifications ? "on" : "off"}`}
          onClick={toggleNotifications}
        >
          {notifications ? "ON" : "OFF"}
        </button>
      </div>

      <div className="setting-option">
        <label>Language</label>
        <select
          className="dropdown"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      <div className="setting-option">
        <label>Email Preferences</label>
        <button
          className={`toggle-btn ${emailPreferences ? "on" : "off"}`}
          onClick={handleEmailPreferences}
        >
          {emailPreferences ? "ON" : "OFF"}
        </button>
      </div>

      <div className="setting-option">
        <label>Profile Avatar</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="file-input"
        />
        {avatar && <img src={avatar} alt="Profile Avatar" className="avatar-preview" />}
      </div>

      <div className="setting-option">
        <label>Primary Theme Color</label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-picker"
        />
      </div>

      <p className="selected-language">Selected Language: {language}</p>

      <div className="buttons-container">
        <button className="save-btn" onClick={handleSaveSettings}>
          Save Settings
        </button>
        <button className="reset-btn" onClick={handleResetSettings}>
          Reset to Default
        </button>
      </div>

      {saveMessage && <p className="save-message">{saveMessage}</p>}
    </div>
  );
};

export default Settings;
