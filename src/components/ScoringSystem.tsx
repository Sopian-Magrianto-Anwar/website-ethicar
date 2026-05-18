'use client';

import { useState } from 'react';
import { useGame } from '@/context/GameContext';
import { useAIScoring } from '@/hooks/useAIScoring';
import Certificate from '@/components/Certificate';

const ScoringSystem = () => {
  const { safetyPoints, ecoDriving } = useGame();
  const { grade, rank, feedback } = useAIScoring(safetyPoints);
  const [showCertificate, setShowCertificate] = useState(false);

  const scores = [
    { label: "Poin Keselamatan", value: safetyPoints.toLocaleString(), color: "var(--accent-cyan)", icon: "🛡️" },
    { label: "Skor Etika", value: grade, color: "var(--accent-yellow)", icon: "⚖️" },
    { label: "Lencana Disiplin", value: rank, color: "var(--accent-orange)", icon: "🏅" },
    { label: "Eco Driving", value: `${ecoDriving}%`, color: "#22c55e", icon: "🌱" }
  ];

  return (
    <section id="scoring" style={{ padding: '100px 24px', background: 'rgba(2, 6, 23, 0.5)' }}>
      {showCertificate && <Certificate onClose={() => setShowCertificate(false)} />}
      
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>DNA Berkendara Anda</h2>
          <p style={{ color: '#94a3b8' }}>Bukan sekadar kecepatan—ini tentang bagaimana Anda menghargai jalanan.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px' 
        }}>
          {scores.map((score, index) => (
            <div key={index} className="glass" style={{ 
              padding: '32px', 
              textAlign: 'center',
              borderBottom: `4px solid ${score.color}`
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{score.icon}</div>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                {score.label}
              </p>
              <h3 style={{ fontSize: '2.5rem', color: score.color }}>{score.value}</h3>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ maxWidth: '500px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Evaluasi Perilaku AI</h3>
            <div className="glass" style={{ padding: '24px' }}>
              <p style={{ color: '#94a3b8', fontStyle: 'italic', lineHeight: '1.6' }}>
                {feedback}
              </p>
              <p style={{ marginTop: '16px', fontWeight: 700, color: 'var(--accent-cyan)' }}>— Asisten AI ETHICAR</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '20px', fontSize: '3rem' }}>📜</div>
            <button 
              disabled={safetyPoints === 0}
              onClick={() => setShowCertificate(true)}
              className="btn-primary" 
              style={{ 
                padding: '16px 32px', 
                opacity: safetyPoints === 0 ? 0.5 : 1,
                cursor: safetyPoints === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Lihat Sertifikat Digital
            </button>
            {safetyPoints === 0 && (
              <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '10px' }}>
                Selesaikan minimal satu sesi untuk mengklaim sertifikat.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoringSystem;
