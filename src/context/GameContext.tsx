'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Character, characters } from '@/data/characters';

interface GameContextType {
  safetyPoints: number;
  ethicalScore: string;
  disciplineRank: string;
  ecoDriving: number;
  selectedCharacter: Character | null;
  updateSafetyPoints: (points: number) => void;
  updateEcoDriving: (value: number) => void;
  setSelectedCharacter: (char: Character) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [safetyPoints, setSafetyPoints] = useState(0);
  const [ecoDriving, setEcoDriving] = useState(0);
  const [selectedCharacter, setSelectedCharacterState] = useState<Character | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedPoints = localStorage.getItem('ethicar_points');
    const savedChar = localStorage.getItem('ethicar_char');
    const savedEco = localStorage.getItem('ethicar_eco');

    // Load states asynchronously in the next frame to prevent synchronous cascading renders during mount
    setTimeout(() => {
      if (savedPoints) setSafetyPoints(parseInt(savedPoints));
      if (savedEco) setEcoDriving(parseInt(savedEco));
      if (savedChar) {
        try {
          setSelectedCharacterState(JSON.parse(savedChar));
        } catch {
          setSelectedCharacterState(characters[0]);
        }
      } else {
        setSelectedCharacterState(characters[0]);
      }
      setIsLoaded(true);
    }, 0);
  }, []);

  // Save data to localStorage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ethicar_points', safetyPoints.toString());
      localStorage.setItem('ethicar_eco', ecoDriving.toString());
      if (selectedCharacter) {
        localStorage.setItem('ethicar_char', JSON.stringify(selectedCharacter));
      }
    }
  }, [safetyPoints, ecoDriving, selectedCharacter, isLoaded]);

  // Derive score and rank directly from safetyPoints dynamically to keep components pure and avoid extra renders
  const { ethicalScore, disciplineRank } = useMemo(() => {
    if (safetyPoints > 200) {
      return { ethicalScore: 'A+', disciplineRank: 'Legenda' };
    } else if (safetyPoints > 100) {
      return { ethicalScore: 'A', disciplineRank: 'Emas' };
    } else if (safetyPoints > 50) {
      return { ethicalScore: 'B', disciplineRank: 'Perak' };
    } else if (safetyPoints > 0) {
      return { ethicalScore: 'C', disciplineRank: 'Perunggu' };
    } else {
      return { ethicalScore: 'N/A', disciplineRank: 'Pemula' };
    }
  }, [safetyPoints]);

  const updateSafetyPoints = (points: number) => {
    setSafetyPoints(prev => prev + points);
  };

  const updateEcoDriving = (value: number) => {
    setEcoDriving(value);
  };

  const setSelectedCharacter = (char: Character) => {
    setSelectedCharacterState(char);
  };

  return (
    <GameContext.Provider value={{ 
      safetyPoints, 
      ethicalScore, 
      disciplineRank, 
      ecoDriving, 
      selectedCharacter,
      updateSafetyPoints, 
      updateEcoDriving,
      setSelectedCharacter
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
