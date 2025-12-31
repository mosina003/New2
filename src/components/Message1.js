import React from 'react';
import { useNavigate } from 'react-router-dom';
import TypingEffect from './TypingEffect';
import './MessagePage.css';

function Message1() {
  const navigate = useNavigate();

  return (
    <div className="message-container theme1">
      {/* Shooting stars */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={`shoot-${i}`}
          className="shooting-star" 
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
        />
      ))}

      {/* Floating elements */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="floating-heart" 
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${5 + Math.random() * 3}s`
          }}
        >
          ❤️
        </div>
      ))}

      <div className="message-content animate-fade-in">
        <div className="emoji-large animate-bounce">🌟</div>
        
        <h1 className="message-title animate-slide-down">
          <TypingEffect text="You Are My Everything" speed={100} />
        </h1>
        
        <div className="message-text animate-fade-up">
          <p>
            <TypingEffect 
              text="From the moment I met you, my world became brighter. ✨ You're not just my boyfriend, you're my best friend, my partner in crime, and my greatest adventure." 
              speed={30} 
              delay={2000}
            />
          </p>
          <p style={{marginTop: '20px'}}>
            <TypingEffect 
              text="Every day with you feels like a blessing, and I can't wait to create more beautiful memories in this new year together! 💕" 
              speed={30} 
              delay={7000}
            />
          </p>
        </div>

        <button className="next-button animate-pulse" onClick={() => navigate('/message2')}>
          <span>Click Me Again 💖</span>
        </button>
      </div>
    </div>
  );
}

export default Message1;
