'use client';

import { useGame } from '@/context/GameContext';
import { useAIScoring } from '@/hooks/useAIScoring';

interface CertificateProps {
  onClose: () => void;
}

const Certificate = ({ onClose }: CertificateProps) => {
  const { safetyPoints, selectedCharacter } = useGame();
  const { grade, rank } = useAIScoring(safetyPoints);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fade-in" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(2, 6, 23, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    }}>
      <div className="glass" style={{
        width: '100%',
        maxWidth: '800px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '60px',
        position: 'relative',
        border: '4px solid var(--accent-cyan)',
        textAlign: 'center',
        boxShadow: '0 0 50px rgba(0, 188, 212, 0.4)'
      }}>
        {/* Decorative elements for certificate look */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '2rem' }}>💠</div>
        <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem' }}>💠</div>
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '2rem' }}>💠</div>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '2rem' }}>💠</div>

        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ color: 'var(--accent-cyan)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Sertifikat Kelayakan Berkendara AI
          </h4>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>ETHICAR</h2>
          <div style={{ width: '100px', height: '2px', background: 'var(--accent-cyan)', margin: '0 auto' }}></div>
        </div>

        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '24px' }}>Diberikan Kepada:</p>
        
        <h3 style={{ fontSize: '3rem', marginBottom: '8px', color: 'white' }}>
          {selectedCharacter?.name || "Pengguna ETHICAR"}
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '40px' }}>
          {selectedCharacter?.role || "Peserta Pelatihan"}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px' }}>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Poin Etika</p>
            <h4 style={{ fontSize: '2rem', color: 'var(--accent-yellow)' }}>{safetyPoints}</h4>
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Predikat AI</p>
            <h4 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>{grade}</h4>
          </div>
          <div>
            <p style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase' }}>Pangkat</p>
            <h4 style={{ fontSize: '2rem', color: 'var(--accent-orange)' }}>{rank}</h4>
          </div>
        </div>

        <p style={{ color: '#64748b', maxWidth: '500px', margin: '0 auto 40px', lineHeight: '1.6', fontSize: '0.9rem' }}>
          Telah berhasil menyelesaikan simulasi edukasi transportasi beretika dengan standar AI tertinggi. 
          Dinyatakan kompeten dalam pengambilan keputusan keselamatan di jalan raya.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }} className="no-print">
          <button className="btn-primary" onClick={handlePrint}>Unduh Sertifikat (PDF)</button>
          <button className="glass" style={{ color: 'white', padding: '12px 24px' }} onClick={onClose}>Tutup</button>
        </div>

        {/* AI Signature Seal */}
        <div style={{ 
          position: 'absolute', 
          bottom: '40px', 
          right: '40px', 
          width: '100px', 
          height: '100px', 
          border: '2px dashed var(--accent-cyan)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.7rem',
          color: 'var(--accent-cyan)',
          transform: 'rotate(-15deg)'
        }}>
          VERIFIED BY AI
        </div>
      </div>

      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          body * { visibility: hidden; }
          .fade-in, .fade-in * { visibility: visible; }
          .fade-in { position: absolute; left: 0; top: 0; width: 100%; height: 100%; padding: 0; }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
