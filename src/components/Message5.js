import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MessagePage.css';

function Message5() {
  const navigate = useNavigate();

  return (
    <div className="message-container theme5">
      {/* Floating sparkles */}
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="floating-sparkle" 
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${0.8 + Math.random() * 1}rem`
          }}
        >
          ✨
        </div>
      ))}

      <div className="message-content animate-fade-in">
        <div className="emoji-large animate-bounce">💖</div>
        
        <h1 className="message-title animate-slide-down romantic-font">
          Forever & Always, It's You
        </h1>
        
        <div className="message-text animate-fade-up">
          <p>
            As we step into this new year,<br/>
            I want you to know something important... 🌟<br/>
            <br/>
            <strong style={{ fontSize: '1.3em', color: '#ff69b4' }}>
              I LOVE YOU MORE THAN WORDS CAN EXPRESS! 💕
            </strong><br/>
            <br/>
            You are my yesterday, my today, and all my tomorrows.<br/>
            My love for you grows stronger with each passing day,<br/>
            and I can't wait to spend another amazing year with you! 🎊<br/>
            <br/>
            Here's to more laughter, more adventures,<br/>
            more memories, and more love! 🥂<br/>
            <br/>
            <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2em' }}>
              Happy New Year, My Love! 💝
            </span>
          </p>
        </div>

        <button className="next-button special-button animate-pulse" onClick={() => navigate('/loveletter')}>
          <span>One More Surprise 💌</span>
        </button>
      </div>

      {/* Fireworks effect */}
      <div className="fireworks">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`firework firework-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Message5;
