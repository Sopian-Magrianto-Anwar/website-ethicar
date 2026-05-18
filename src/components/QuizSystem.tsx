'use client';

import { useState, useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import { quizQuestions, QuizQuestion } from '@/data/quizQuestions';

const QuizSystem = () => {
  const { updateSafetyPoints } = useGame();
  const [mounted, setMounted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [step, setStep] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Perform shuffling only on client-side mount to prevent hydration mismatch
  useEffect(() => {
    // Defer state updates to the next event loop tick to satisfy the strict React 19 linter
    setTimeout(() => {
      const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
      setQuestions(shuffled);
      setMounted(true);
    }, 0);
  }, []);

  if (!mounted || questions.length === 0) {
    return (
      <div className="glass fade-in" style={{
        padding: '48px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div className="spinner" style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '3px solid rgba(255, 255, 255, 0.1)',
          borderTopColor: 'var(--accent-cyan)',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Mempersiapkan evaluasi berkendara...</p>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

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
