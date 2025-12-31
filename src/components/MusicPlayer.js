import React, { useRef, useEffect, useContext } from 'react';
import { MusicContext } from '../App';
import './MusicPlayer.css';

function MusicPlayer() {
  const audioRef = useRef(null);
  const { isPlaying, setIsPlaying } = useContext(MusicContext);

  // Auto-play on mount
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Auto-play blocked. Will play on first user interaction.');
        });
      }
    };

    // Try to play immediately
    playAudio();

    // If blocked, play on first user interaction
    const handleInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Audio play prevented:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} loop>
        <source src="/music/Love Story.mp3" type="audio/mpeg" />
      </audio>
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '🔊' : '🔇'}
      </button>
    </div>
  );
}

export default MusicPlayer;
