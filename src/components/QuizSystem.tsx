'use client';

import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { quizQuestions, QuizQuestion } from '@/data/quizQuestions';

const QuizSystem = () => {
  const { updateSafetyPoints } = useGame();
  // Initialize and shuffle questions directly in state to avoid cascading renders
  const [questions] = useState<QuizQuestion[]>(() => {
    return [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
  });
  const [step, setStep] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelectedIdx(idx);
    if (idx === questions[step].answer) {
      setSessionScore(prev => prev + 1);
      updateSafetyPoints(25);
    }
    
    setTimeout(() => {
      if (step + 1 < questions.length) {
        setStep(prev => prev + 1);
        setSelectedIdx(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return <div>Memuat tantangan AI...</div>;

  if (showResult) {
    return (
      <div className="glass fade-in" style={{ padding: '48px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '24px' }}>Hasil Quiz</h2>
        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🏆</div>
        <p style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Benar: {sessionScore} / {questions.length}</p>
        <p style={{ color: '#94a3b8', marginBottom: '32px' }}>
          Sesi ini selesai! Poin Anda telah tersimpan secara permanen.
        </p>
        <button className="btn-primary" onClick={() => window.location.reload()}>Mulai Sesi Baru</button>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="glass fade-in" style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '0.7rem', 
            background: 'var(--primary-blue)',
            color: 'white',
            fontWeight: 700
          }}>
            KATEGORI: {q.category}
          </span>
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
            {step + 1} / {questions.length}
          </span>
        </div>
        <h3 style={{ fontSize: '1.8rem', lineHeight: '1.4' }}>{q.question}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            disabled={selectedIdx !== null}
            onClick={() => handleAnswer(idx)}
            className="glass"
            style={{
              padding: '20px',
              textAlign: 'left',
              color: 'white',
              border: selectedIdx === idx 
                ? (idx === q.answer ? '2px solid #22c55e' : '2px solid #ef4444')
                : '1px solid var(--glass-border)',
              background: selectedIdx === idx 
                ? (idx === q.answer ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)')
                : 'var(--card-bg)',
              transition: 'all 0.2s ease',
              fontSize: '1rem'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      {selectedIdx !== null && (
        <div className="fade-in" style={{ 
          marginTop: '24px', 
          padding: '20px', 
          borderRadius: '12px', 
          background: 'rgba(0, 188, 212, 0.05)', 
          border: '1px solid var(--accent-cyan)' 
        }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong style={{ color: 'var(--accent-cyan)' }}>Analisis AI:</strong> {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizSystem;
