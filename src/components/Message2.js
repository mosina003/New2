import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

function Message2() {
  const navigate = useNavigate();

  return (
    <div className="message-container theme2">
      {/* Floating stars */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="floating-star" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${1 + Math.random() * 1.5}rem`
          }}
        >
          ⭐
        </div>
      ))}

      <div className="message-content animate-fade-in">
        <div className="emoji-large animate-bounce">💫</div>
        
        <h1 className="message-title animate-slide-down">
          You Make My Heart Skip
        </h1>
        
        <div className="message-text animate-fade-up">
          <p>
            Do you know what happens when I see you? 💓<br/>
            My heart races, my face lights up, and suddenly<br/>
            everything feels right in the world.<br/>
            <br/>
            Your smile is my favorite sight,<br/>
            your laugh is my favorite sound,<br/>
            and your love is my favorite feeling.<br/>
            <br/>
            Thank you for being the reason I smile every day! 😊✨
          </p>
        </div>

        <button className="next-button animate-pulse" onClick={() => navigate('/message3')}>
          <span>Keep Going 💝</span>
        </button>
      </div>
    </div>
  );
}

export default Message2;
