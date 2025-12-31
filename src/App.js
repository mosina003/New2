import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Message1 from './components/Message1';
import Message2 from './components/Message2';
import Message3 from './components/Message3';
import Message4 from './components/Message4';
import Message5 from './components/Message5';
import LoveLetter from './components/LoveLetter';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

export const MusicContext = createContext();

function App() {
  const [isPlaying, setIsPlaying] = useState(true); // Changed to true for auto-play

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      <Router>
        <MusicPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message1" element={<Message1 />} />
          <Route path="/message2" element={<Message2 />} />
          <Route path="/message3" element={<Message3 />} />
          <Route path="/message4" element={<Message4 />} />
          <Route path="/message5" element={<Message5 />} />
          <Route path="/loveletter" element={<LoveLetter />} />
        </Routes>
      </Router>
    </MusicContext.Provider>
  );
}

export default App;
