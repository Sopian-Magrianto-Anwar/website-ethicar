'use client';

import { useState } from 'react';

const scenarios = [
  {
    id: 1,
    title: "Dilema Lampu Kuning",
    context: "Anda sedang terburu-buru ke sekolah. Anda mendekati persimpangan dan lampu berubah menjadi kuning. Apa yang Anda lakukan?",
    options: [
      { text: "Terobos saja", score: -20, feedback: "BERBAHAYA! Menerobos lampu kuning meningkatkan risiko tabrakan hingga 40%. AI mendeteksi perilaku agresif.", status: "fail" },
      { text: "Pelan dan berhenti", score: +20, feedback: "LUAR BIASA. Berhenti saat lampu kuning menjamin keselamatan pejalan kaki dan kendaraan lain. AI mendeteksi perilaku disiplin.", status: "success" },
      { text: "Rem mendadak", score: -5, feedback: "BERISIKO. Meskipun Anda berhenti, pengereman mendadak dapat menyebabkan tabrakan beruntun. Jaga jarak lebih baik.", status: "warning" }
    ]
  },
  {
    id: 2,
    title: "Prioritas Pejalan Kaki",
    context: "Seorang lansia sedang menunggu untuk menyeberang di zebra cross. Tidak ada lampu lalu lintas di sana.",
    options: [
      { text: "Berhenti dan beri jalan", score: +30, feedback: "SANTUN. Menghormati pejalan kaki adalah inti dari etika berkendara. AI mendeteksi empati yang tinggi.", status: "success" },
      { text: "Klakson dan jalan terus", score: -30, feedback: "TIDAK BERETIKA. Pejalan kaki memiliki prioritas di zebra cross. AI mendeteksi tingkat kesabaran yang rendah.", status: "fail" },
      { text: "Ngebut agar lewat duluan", score: -50, feedback: "KEGAGALAN KRITIS. Anda hampir menyebabkan kecelakaan. Skor keselamatan berkurang drastis.", status: "fail" }
    ]
  }
];

interface ScenarioOption {
  text: string;
  score: number;
  feedback: string;
  status: string;
}

const InteractiveScenario = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ScenarioOption | null>(null);
  const [totalScore, setTotalScore] = useState(0);

  const handleSelect = (option: ScenarioOption) => {
    setSelectedOption(option);
    setTotalScore(prev => prev + option.score);
  };

  const nextScenario = () => {
    setSelectedOption(null);
    setCurrentIdx(prev => (prev + 1) % scenarios.length);
  };

  const scenario = scenarios[currentIdx];

  return (
    <section id="scenarios" style={{ padding: '100px 24px', background: 'rgba(2, 6, 23, 0.5)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Uji Skenario AI</h2>
          <p style={{ color: '#94a3b8' }}>Bagaimana reaksi Anda? Biarkan AI kami mengevaluasi etika berkendara Anda.</p>
        </div>

        <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '48px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
            Skor Keselamatan: {totalScore}
          </div>

          <h3 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--accent-cyan)' }}>{scenario.title}</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', lineHeight: '1.6' }}>{scenario.context}</p>

          {!selectedOption ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {scenario.options.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="glass" 
                  style={{ 
                    padding: '20px', 
                    textAlign: 'left', 
                    fontSize: '1rem',
                    color: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                >
                  {option.text}
                </button>
              ))}
            </div>
          ) : (
            <div className="fade-in">
              <div style={{ 
                padding: '24px', 
                borderRadius: '12px', 
                background: selectedOption.status === 'success' ? 'rgba(34, 197, 94, 0.1)' : selectedOption.status === 'fail' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                border: `1px solid ${selectedOption.status === 'success' ? '#22c55e' : selectedOption.status === 'fail' ? '#ef4444' : '#eab308'}`,
                marginBottom: '32px'
              }}>
                <h4 style={{ 
                  color: selectedOption.status === 'success' ? '#22c55e' : selectedOption.status === 'fail' ? '#ef4444' : '#eab308',
                  marginBottom: '8px'
                }}>
                  {selectedOption.status === 'success' ? '✓ Keputusan Benar' : selectedOption.status === 'fail' ? '✗ Tidak Aman' : '! Hati-hati'}
                </h4>
                <p style={{ lineHeight: '1.5' }}>{selectedOption.feedback}</p>
              </div>
              <button className="btn-primary" onClick={nextScenario}>
                Skenario Berikutnya
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveScenario;
