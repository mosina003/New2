import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

function Message4() {
  const navigate = useNavigate();

  return (
    <div className="message-container theme4">
      {/* Floating clouds */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="floating-cloud" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          ☁️
        </div>
      ))}

      <div className="message-content animate-fade-in">
        <div className="emoji-large animate-bounce">☀️</div>
        
        <h1 className="message-title animate-slide-down">
          You're My Happy Place
        </h1>
        
        <div className="message-text animate-fade-up">
          <p>
            In a world full of chaos and stress,<br/>
            you are my calm, my peace, my happy place. 🏡<br/>
            <br/>
            Just thinking about you makes me smile! 😊<br/>
            Your presence is like sunshine on a cloudy day,<br/>
            warming my heart and brightening my soul.<br/>
            <br/>
            I'm so grateful that I get to call you mine,<br/>
            and I promise to always be your safe haven too. 🤗💕
          </p>
        </div>

        <button className="next-button animate-pulse" onClick={() => navigate('/message5')}>
          <span>One More 🎁</span>
        </button>
      </div>
    </div>
  );
}

export default Message4;
