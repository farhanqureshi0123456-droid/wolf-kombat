// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [meat, setMeat] = useState(0);
  const [showDailyTasks, setShowDailyTasks] = useState(false);
  const [showSocialTasks, setShowSocialTasks] = useState(false);

  // 🔥 Daily login reward system
  useEffect(() => {
    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem("lastLogin");

    if (lastLogin !== today) {
      setMeat((prev) => prev + 100); // reward +100 meat
      localStorage.setItem("lastLogin", today);
    }
  }, []);

  const handleWolfClick = () => {
    setMeat(meat + 1);
  };

  return (
    <div className="App">
      {/* Meat Counter */}
      <div className="counter">
        <span className="meat-icon">🥩</span>
        <span className="meat-count">{meat}</span>
      </div>

      {/* Wolf Tapping Button */}
      <div className="wolf-container">
        <div className="tap-button" onClick={handleWolfClick}>
          <img src="/wolf.png" alt="Wolf" className="wolf" />
        </div>
      </div>
      <p className="tap-text">Tap the Wolf!</p>

      {/* Section Buttons */}
      <div className="button-container">
        <button
          className="section-button daily"
          onClick={() => setShowDailyTasks(true)}
        >
          📅 Daily Tasks
        </button>
        <button
          className="section-button social"
          onClick={() => setShowSocialTasks(true)}
        >
          🌐 Social Tasks
        </button>
      </div>

      {/* Daily Tasks Panel */}
      {showDailyTasks && (
        <div className="popup">
          <div className="popup-content">
            <h2>📅 Daily Tasks</h2>
            <ul>
              <li>✅ Login Bonus (+100 🥩)</li>
              <li>▶️ Watch Ad (+50 🥩)</li>
              <li>📤 Share Game (+30 🥩)</li>
            </ul>
            <button
              className="close-btn"
              onClick={() => setShowDailyTasks(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Social Tasks Panel */}
      {showSocialTasks && (
        <div className="popup">
          <div className="popup-content">
            <h2>🌐 Social Tasks</h2>
            <ul>
              <li>👥 Invite Friend (+100 🥩)</li>
              <li>📱 Join Telegram (+50 🥩)</li>
              <li>🐦 Follow Twitter (+30 🥩)</li>
            </ul>
            <button
              className="close-btn"
              onClick={() => setShowSocialTasks(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;