import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear = new Date('December 31, 2025 23:05:00').getTime();
      const now = new Date().getTime();
      const diff = newYear - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        // Countdown finished!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setShowCelebration(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showCelebration && window.startFireworks) {
      window.startFireworks();
    }
    return () => {
      if (window.stopFireworks) window.stopFireworks();
    };
  }, [showCelebration]);

  const handleClick = () => {
    navigate('/message1');
  };

  return (
    <div className="home-container">
      {/* Celebration with cloud text */}
      {showCelebration && (
        <div className="celebration-content">
          <h1 className="happy-new-year">🎉 Happy New Year 2026! 🎉</h1>
          <h1 className="love-message">💖 I Love You My Dumby 💖</h1>
          <button className="click-button celebration-button" onClick={handleClick}>
            <span>Click Me 💕</span>
          </button>
        </div>
      )}

      {/* Show countdown only when celebration hasn't started */}
      {!showCelebration && (
        <>
          {/* Floating Hearts */}
          {[...Array(9)].map((_, i) => (
            <div 
              key={i}
              className="heart" 
              style={{
                left: `${(i + 1) * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${9 + (i % 4)}s`
              }}
            />
          ))}

          {/* Sparkles */}
          <div className="sparkles-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="sparkle" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="content">
            <h1 className="title">✨ Countdown to Our New Year 💕 ✨</h1>
            
            <div className="countdown">
              <div className="time-box">
                <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
                <small>Days</small>
              </div>
              <div className="time-box">
                <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                <small>Hours</small>
              </div>
              <div className="time-box">
                <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <small>Minutes</small>
              </div>
              <div className="time-box">
                <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <small>Seconds</small>
              </div>
            </div>

            <p className="subtitle">
              Something special is waiting for you... 💖
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
