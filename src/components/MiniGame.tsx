'use client';

import { useState, useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import { gameEvents, GameEvent } from '@/data/gameEvents';

// Helper function defined outside the component to keep the component pure
const generateRandomEco = () => {
  return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
};

const MiniGame = () => {
  const { updateSafetyPoints, updateEcoDriving, selectedCharacter } = useGame();
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'event' | 'finished'>('idle');
  const [message, setMessage] = useState('Siap untuk masuk ke kota virtual?');
  const [sessionScore, setSessionScore] = useState(0);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [eventQueue, setEventQueue] = useState<GameEvent[]>([]);
  const [currentCity, setCurrentCity] = useState('Safe City');

  const cities = ['Safe City', 'Ethica Town', 'SmartRoad City'];

  // Map vehicle to icon
  const getVehicleIcon = () => {
    if (!selectedCharacter) return '🚗';
    switch (selectedCharacter.id) {
      case 'andi': return '🛵';
      case 'sita': return '⚡🚗';
      case 'budi': return '🏍️';
      case 'maya': return '🚙';
      default: return selectedCharacter.icon || '🚗';
    }
  };

  const prepareSession = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    setCurrentCity(randomCity);
    const shuffled = [...gameEvents].sort(() => 0.5 - Math.random());
    setEventQueue(shuffled.slice(0, 5));
    setGameState('playing');
    setMessage(`Memasuki ${randomCity} sebagai ${selectedCharacter?.name || 'Pengendara'}...`);
    setSessionScore(0);
  };

  useEffect(() => {
    if (gameState === 'playing') {
      const timer = setTimeout(() => {
        if (eventQueue.length > 0) {
          const nextEvent = eventQueue[0];
          setEventQueue(prev => prev.slice(1));
          setCurrentEvent(nextEvent);
          setGameState('event');
          setMessage(nextEvent.message);
        } else {
          setGameState('finished');
          setMessage('Simulasi Perjalanan Selesai!');
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gameState, eventQueue]);

  const handleAction = (points: number, feedback: string) => {
    setSessionScore(prev => prev + points);
    updateSafetyPoints(points);
    
    if (points > 0) {
      updateEcoDriving(generateRandomEco());
      setMessage(feedback);
    } else {
      setMessage(feedback);
    }

    setCurrentEvent(null);
    setTimeout(() => {
      setGameState('playing');
    }, 1500);
  };

  return (
    <div className="glass" style={{ padding: '48px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ margin: 0 }}>Simulasi Berkendara AI</h2>
        {gameState !== 'idle' && (
          <div style={{ 
            padding: '4px 12px', 
            borderRadius: '20px', 
            background: 'rgba(0, 188, 212, 0.2)', 
            border: '1px solid var(--accent-cyan)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--accent-cyan)'
          }}>
            📍 {currentCity}
          </div>
        )}
      </div>
      
      {selectedCharacter && (
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>{selectedCharacter.icon}</span>
          <span style={{ fontWeight: 600 }}>{selectedCharacter.name} ({selectedCharacter.role})</span>
        </div>
      )}
      
      {/* Visual City Simulator Area */}
      <div style={{ 
        height: '350px', 
        background: '#0f172a', 
        borderRadius: '24px', 
        position: 'relative',
        marginBottom: '32px',
        border: '2px solid var(--accent-cyan)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
      }}>
        {/* Background Decorative City Elements */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.1, fontSize: '4rem' }}>🏙️</div>
        <div style={{ position: 'absolute', top: '15%', right: '10%', opacity: 0.1, fontSize: '3rem' }}>🏥</div>
        <div style={{ position: 'absolute', bottom: '20%', left: '15%', opacity: 0.1, fontSize: '3rem' }}>🏫</div>

        {/* Road Background */}
        <div style={{ 
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '120px',
          background: '#334155',
          borderTop: '4px solid #475569',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ width: '100%', height: '4px', borderTop: '4px dashed #94a3b8' }}></div>
        </div>

        {gameState === 'playing' && (
          <div className="float" style={{ fontSize: '4.5rem', zIndex: 10, marginBottom: '-80px' }}>
            {getVehicleIcon()}
          </div>
        )}
        
        {currentEvent && (
          <div className="fade-in" style={{ fontSize: '5rem', position: 'absolute', top: '20%', zIndex: 5 }}>
            {currentEvent.icon}
          </div>
        )}
        
        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          background: 'rgba(0,0,0,0.6)', 
          padding: '8px 20px', 
          borderRadius: '30px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ fontWeight: 600, color: 'var(--accent-cyan)', margin: 0 }}>{message}</p>
        </div>
      </div>

      {gameState === 'idle' && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Klik tombol di bawah untuk masuk ke kota pilihan AI.</p>
          <button className="btn-primary" onClick={prepareSession} style={{ padding: '16px 40px' }}>Masuk Ke Kota Virtual</button>
        </div>
      )}

      {gameState === 'event' && currentEvent && (
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          {currentEvent.actions.map((action, idx) => (
            <button 
              key={idx}
              className={action.points > 0 ? "btn-primary" : "glass"} 
              style={{ color: action.points > 0 ? 'white' : '#cbd5e1', padding: '12px 24px' }}
              onClick={() => handleAction(action.points, action.feedback)}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}

      {gameState === 'finished' && (
        <div>
          <h3 style={{ marginBottom: '16px' }}>🏁 Perjalanan di {currentCity} Selesai</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Poin Etika Diraih: {sessionScore}</p>
          <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Anda semakin dekat menjadi warga kota teladan!</p>
          <button className="btn-primary" onClick={prepareSession}>Pindah ke Kota Lain</button>
        </div>
      )}
    </div>
  );
};

export default MiniGame;
