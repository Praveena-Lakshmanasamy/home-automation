import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  
  const [user, setUser] = useState(
    storedUser || {
      name: "Praveena L",
      email: "praveena.l2023eee@sece.ac.in",
      avatar: null,
      bio: "This is a bio about Praveena. Love coding and exploring new technologies.",
      location: "Coimbatore, India",
    }
  );

  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newBio, setNewBio] = useState(user.bio);

  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleEdit = () => {
    setEditMode(!editMode);
    if (editMode) {
      setUser({
        ...user,
        name: newName,
        bio: newBio,
      });
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setUser({
        ...user,
        avatar: avatarUrl,
      });
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-section">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt="Avatar"
            className="avatar"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="avatar-upload"
          />
        </div>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>{user.location}</p>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="bio-section">
        <h2>About Me</h2>
        {editMode ? (
          <textarea
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
            className="bio-input"
          />
        ) : (
          <p>{user.bio}</p>
        )}
      </div>

      <div className="buttons-container">
        <button className="edit-btn" onClick={handleEdit}>
          {editMode ? "Save" : "Edit Profile"}
        </button>
      </div>

      <div className="activity-log">
        <h3>Recent Activity</h3>
        <ul>
          <li>Joined a new group: Web Developers</li>
          <li>Posted a new blog: "Why React is the Future"</li>
          <li>Completed a course on "Advanced JavaScript"</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
