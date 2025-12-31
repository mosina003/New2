import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoveLetter.css';

function LoveLetter() {
  const navigate = useNavigate();
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [showLoveJar, setShowLoveJar] = useState(false);
  const [pulledNotes, setPulledNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [jarShaking, setJarShaking] = useState(false);

  const loveNotes = [
    "You make my heart skip a beat every single time I see you! 💓",
    "Your laugh is the most beautiful thing I've ever seen. 😊",
    "I fall in love with you more and more each day. 💕",
    "You're my favorite person in the entire world! 🌍",
    "Thank you for being my rock and my safe place. 🏡",
    "Your laugh is my favorite sound in the universe. 😂",
    "I'm so grateful to have you in my life. 🙏",
    "I love how you always know how to make me smile. 😊",
    "You're not just my boyfriend, you're my best friend. 👫",
    "Every moment with you is a treasure. 💎",
    "You're the reason I believe in true love. 💖",
    "I love your kind heart and beautiful soul. ✨",
    "You make me want to be a better person. 🌟",
    "I'm so lucky to call you mine. 🍀",
    "Your hands are my favorite place to be. 🤗",
    "I love the way you look at me. 👀💕",
    "You're my today and all of my tomorrows. 📅",
    "I love you more than words can express! 💝",
    "Forever grateful for you, my love. 💗"
  ];

  useEffect(() => {
    if (envelopeOpen) {
      setTimeout(() => setLetterVisible(true), 800);
    }
  }, [envelopeOpen]);

  const handleEnvelopeClick = () => {
    if (!envelopeOpen) {
      setEnvelopeOpen(true);
    }
  };

  const pullNote = () => {
    const availableNotes = loveNotes.filter(note => !pulledNotes.includes(note));
    
    if (availableNotes.length === 0) {
      // Reset if all notes have been pulled
      setPulledNotes([]);
      return;
    }

    setJarShaking(true);
    
    setTimeout(() => {
      const randomNote = availableNotes[Math.floor(Math.random() * availableNotes.length)];
      setCurrentNote(randomNote);
      setPulledNotes([...pulledNotes, randomNote]);
      setJarShaking(false);
    }, 500);
  };

  return (
    <div className="loveletter-container">
      {/* Aurora/Northern Lights Background */}
      <div className="aurora-bg">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
      </div>

      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${0.5 + Math.random()}rem`
          }}
        >
          ✨
        </div>
      ))}

      <div className="content-wrapper">
        {!envelopeOpen && (
          <div className="envelope-section">
            <h2 className="section-title typing-effect">
              A Special Letter For You 💌
            </h2>
            <div className={`envelope ${envelopeOpen ? 'open' : ''}`} onClick={handleEnvelopeClick}>
              <div className="envelope-flap"></div>
              <div className="envelope-body"></div>
              <div className="heart-seal">💕</div>
              <p className="click-hint">Click to open</p>
            </div>
          </div>
        )}

        {letterVisible && !showLoveJar && (
          <div className="letter-section animate-fade-in">
            <div className="letter-paper">
              <div className="letter-content">
                <h2 className="letter-title">My Dearest Love,</h2>
                <div className="letter-text typing-text">
                  <p>
                    Happy New Year Jaan. You are the most incredible
                    thing that has ever happened to me.
                  </p>
                  <p>
                    From the way you laugh to the way you care, from your
                    strength to your kindness — everything about you makes
                    my world brighter. You've shown me what true love feels like.
                  </p>
                  <p>
                    This new year, I promise to love you more fiercely,
                    support you more deeply, and cherish every moment we share.
                    You're not just my boyfriend; you're my home, my safe place,
                    and my forever person.I know no one can ever be like you and no one can understand me like you do.
                  </p>
                  <p>
                    Thank you for being YOU. Thank you for loving ME.Thank you for tolerating me.
                    Here's to our beautiful journey ahead! 🌟
                  </p>
                  <p className="letter-signature">
                    Forever yours,<br/>
                    <span className="signature-name">Mosina 💖</span>
                  </p>
                </div>
              </div>
              <button 
                className="next-btn wave-button" 
                onClick={() => setShowLoveJar(true)}
              >
                <span>Continue 💝</span>
              </button>
            </div>
          </div>
        )}

        {showLoveJar && (
          <div className="lovejar-section animate-fade-in">
            <h2 className="section-title typing-effect">
              Pull a Love Note from the Jar! 💌
            </h2>
            
            <div className="jar-container">
              <div className={`love-jar ${jarShaking ? 'shake' : ''}`} onClick={pullNote}>
                <div className="jar-lid">🎀</div>
                <div className="jar-body">
                  <div className="jar-glass"></div>
                  <div className="jar-label">Love Notes</div>
                  {!currentNote && (
                    <div className="jar-notes">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="note-piece" style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${30 + Math.random() * 50}%`,
                          transform: `rotate(${Math.random() * 360}deg)`
                        }}>💌</div>
                      ))}
                    </div>
                  )}
                </div>
                <p className="jar-hint">Click the jar! 👆</p>
              </div>

              {currentNote && (
                <div className="love-note animate-fade-in">
                  <div className="note-content">
                    <p>{currentNote}</p>
                  </div>
                  <button className="pull-another" onClick={pullNote}>
                    Pull Another Note 💕
                  </button>
                </div>
              )}
            </div>

            {pulledNotes.length >= 5 && (
              <button 
                className="final-btn morph-button animate-bounce" 
                onClick={() => navigate('/')}
              >
                <span>Start Over ✨</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoveLetter;
