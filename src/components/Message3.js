import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

function Message3() {
  const navigate = useNavigate();

  return (
    <div className="message-container theme3">
      {/* Floating butterflies */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="floating-butterfly" 
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          🦋
        </div>
      ))}

      <div className="message-content animate-fade-in">
        <div className="emoji-large animate-bounce">🌸</div>
        
        <h1 className="message-title animate-slide-down">
          Together We're Unstoppable
        </h1>
        
        <div className="message-text animate-fade-up">
          <p>
            When we're together, I feel like I can conquer the world! 🌍<br/>
            You give me strength when I'm weak,<br/>
            courage when I'm scared,<br/>
            and happiness when I'm down.<br/>
            <br/>
            We're not just a couple, we're a team! 💪<br/>
            And I know that no matter what challenges<br/>
            this new year brings, we'll face them together,<br/>
            hand in hand, heart to heart. 💕
          </p>
        </div>

        <button className="next-button animate-pulse" onClick={() => navigate('/message4')}>
          <span>More Love 💗</span>
        </button>
      </div>
    </div>
  );
}

export default Message3;
