'use client';

import { useState } from 'react';
import { features } from '@/data/features';

const FeatureShowcase = () => {
  const [analysisActive, setAnalysisActive] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);
  const [weatherMode, setWeatherMode] = useState<'sunny' | 'rainy'>('sunny');

  return (
    <section id="features" style={{ padding: '100px 24px', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Fitur Utama AI</h2>
          <p style={{ color: '#94a3b8' }}>Simulasi canggih untuk membentuk generasi pengendara masa depan yang beretika.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px' 
        }}>
          {features.map((feature) => (
            <div key={feature.id} className="glass" style={{ padding: '40px', textAlign: 'left', transition: 'all 0.3s ease' }}>
              <div style={{ 
                fontSize: '2.5rem', marginBottom: '24px', background: feature.color,
                width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '12px', boxShadow: `0 10px 20px ${feature.color}33`
              }}>
                {feature.id === 'adaptive-scenarios' && weatherMode === 'rainy' ? '⛈️' : feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{feature.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
                {feature.description}
              </p>
              
              <div className="glass" style={{ padding: '16px', background: 'rgba(0,0,0,0.2)' }}>
                {feature.id === 'behavior-analysis' && (
                  <>
                    <button 
                      onClick={() => setAnalysisActive(!analysisActive)}
                      className="btn-primary" 
                      style={{ width: '100%', marginBottom: '12px', fontSize: '0.8rem' }}
                    >
                      {analysisActive ? 'Hentikan Analisis' : 'Uji Simulasi Analisis'}
                    </button>
                    {analysisActive && (
                      <div className="fade-in" style={{ fontSize: '0.85rem' }}>
                        <p style={{ color: 'var(--accent-cyan)' }}>✓ {feature.demoMessage}</p>
                        <div style={{ width: '100%', height: '4px', background: '#334155', marginTop: '8px', borderRadius: '2px' }}>
                          <div style={{ width: '85%', height: '100%', background: 'var(--accent-cyan)', borderRadius: '2px' }}></div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {feature.id === 'voice-assistant' && (
                  <>
                    <button 
                      onClick={() => {
                        setVoiceActive(true);
                        setTimeout(() => setVoiceActive(false), 3000);
                      }}
                      className="btn-primary" 
                      style={{ width: '100%', marginBottom: '12px', fontSize: '0.8rem', background: 'linear-gradient(135deg, var(--accent-cyan), var(--primary-blue))' }}
                    >
                      Putar Contoh Suara
                    </button>
                    {voiceActive && (
                      <div className="fade-in" style={{ 
                        padding: '8px', borderRadius: '4px', background: 'rgba(0,188,212,0.1)', 
                        border: '1px solid var(--accent-cyan)', fontSize: '0.85rem', fontStyle: 'italic'
                      }}>
                        &quot;{feature.demoMessage}&quot;
                      </div>
                    )}
                  </>
                )}

                {feature.id === 'adaptive-scenarios' && (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem' }}>Mode Lingkungan:</span>
                      <button 
                        onClick={() => setWeatherMode(weatherMode === 'sunny' ? 'rainy' : 'sunny')}
                        style={{ 
                          padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', 
                          background: weatherMode === 'sunny' ? 'var(--accent-yellow)' : '#475569',
                          color: weatherMode === 'sunny' ? '#000' : '#fff', fontWeight: 700
                        }}
                      >
                        {weatherMode === 'sunny' ? 'Cerah' : 'Hujan'}
                      </button>
                    </div>
                    <p style={{ fontSize: '0.75rem', marginTop: '10px', color: '#64748b' }}>
                      {weatherMode === 'sunny' ? 'Lalu lintas normal, visibilitas tinggi.' : 'Jalanan licin, jarak pandang berkurang 40%.'}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
