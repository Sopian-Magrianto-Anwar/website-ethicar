'use client';

import { useGame } from '@/context/GameContext';
import { characters, Character } from '@/data/characters';

const CharacterCarousel = () => {
  const { selectedCharacter, setSelectedCharacter } = useGame();

  const handleCustomAvatar = () => {
    const name = prompt("Masukkan nama avatar kustom Anda:");
    if (name) {
      const customChar: Character = {
        id: "custom-" + Date.now(),
        name: name,
        role: "Pengendara Unik",
        vehicle: "Kendaraan Kustom",
        trait: "Pribadi yang berdedikasi",
        icon: "🦸"
      };
      setSelectedCharacter(customChar);
      alert(`Avatar kustom "${name}" berhasil dibuat dan dipilih!`);
    }
  };

  return (
    <section id="characters" style={{ padding: '100px 24px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Pilih Karakter Anda</h2>
          <p style={{ color: '#94a3b8' }}>Pilih karakter yang sesuai dengan gaya Anda dan kuasai kota.</p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: '24px', 
          overflowX: 'auto', 
          padding: '20px 0',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {characters.map((char) => (
            <div 
              key={char.id}
              onClick={() => setSelectedCharacter(char)}
              className="glass" 
              style={{ 
                minWidth: '280px', 
                padding: '32px', 
                textAlign: 'center',
                cursor: 'pointer',
                border: selectedCharacter?.id === char.id ? '2px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                transform: selectedCharacter?.id === char.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: selectedCharacter?.id === char.id ? 1 : 0.7
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '24px' }}>{char.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{char.name}</h3>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px' }}>{char.role}</p>
              <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#94a3b8' }}>
                <p><strong>Kendaraan:</strong> {char.vehicle}</p>
                <p><strong>Sifat:</strong> {char.trait}</p>
              </div>
            </div>
          ))}

          {/* Show custom character if selected and not in the main list */}
          {selectedCharacter && selectedCharacter.id.startsWith('custom-') && (
            <div 
              className="glass" 
              style={{ 
                minWidth: '280px', 
                padding: '32px', 
                textAlign: 'center',
                cursor: 'pointer',
                border: '2px solid var(--accent-cyan)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '24px' }}>{selectedCharacter.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{selectedCharacter.name}</h3>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px' }}>{selectedCharacter.role}</p>
              <div style={{ textAlign: 'left', fontSize: '0.9rem', color: '#94a3b8' }}>
                <p><strong>Kendaraan:</strong> {selectedCharacter.vehicle}</p>
                <p><strong>Sifat:</strong> {selectedCharacter.trait}</p>
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button className="btn-primary" onClick={handleCustomAvatar}>Buat Kustom Avatar</button>
        </div>
      </div>
    </section>
  );
};

export default CharacterCarousel;
