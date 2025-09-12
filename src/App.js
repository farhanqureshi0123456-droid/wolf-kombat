import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [meat, setMeat] = useState(0);
  const [showDaily, setShowDaily] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  // Daily reward system
  useEffect(() => {
    const lastClaim = localStorage.getItem("lastClaim");
    const today = new Date().toDateString();

    if (lastClaim !== today) {
      setMeat((prev) => prev + 100);
      localStorage.setItem("lastClaim", today);
    }
  }, []);

  const handleWolfClick = () => {
    setMeat((prev) => prev + 1);
  };

  return (
    <div className="game-container">
      <h1 className="title">🐺 Wolf Kombat 🐺</h1>

      <p className="counter">
        🥩 <span>{meat}</span>
      </p>

      <div className="wolf-container">
        <div className="tap-button" onClick={handleWolfClick}>
          <img src="/wolf.png" alt="Wolf" className="wolf" />
        </div>
        <p className="tap-text">Tap the Wolf!</p>
      </div>

      <div className="button-container">
        <button
          className="section-button daily"
          onClick={() => setShowDaily(true)}
        >
          📅 Daily Tasks
        </button>
        <button
          className="section-button social"
          onClick={() => setShowSocial(true)}
        >
          🌐 Social Tasks
        </button>
      </div>

      {/* Daily Tasks Panel */}
      {showDaily && (
        <div className="panel">
          <h2>📅 Daily Tasks</h2>
          <ul>
            <li>✅ Login Bonus (+100 🥩)</li>
            <li>🎥 Watch Ad</li>
            <li>🔄 Share Game</li>
          </ul>
          <button className="close-btn" onClick={() => setShowDaily(false)}>
            Close
          </button>
        </div>
      )}

      {/* Social Tasks Panel */}
      {showSocial && (
        <div className="panel">
          <h2>🌐 Social Tasks</h2>
          <ul>
            <li>👥 Invite a Friend</li>
            <li>📢 Join Telegram</li>
            <li>🐦 Follow Twitter</li>
          </ul>
          <button className="close-btn" onClick={() => setShowSocial(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;