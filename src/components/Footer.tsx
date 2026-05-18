import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ padding: '80px 24px 40px', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '48px',
          marginBottom: '60px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ borderRadius: '50%', overflow: 'hidden', width: '40px', height: '40px', position: 'relative' }}>
                <Image src="/logo.png" alt="Logo ETHICAR" fill style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>ETHICAR</span>
            </div>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              Mendefinisikan ulang edukasi lalu lintas melalui kekuatan AI. Bergabunglah dalam gerakan untuk jalan raya yang lebih aman dan beretika.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Game</h4>
            <ul style={{ listStyle: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link href="/features">Fitur</Link></li>
              <li><Link href="/scenarios">Skenario</Link></li>
              <li><Link href="/characters">Karakter</Link></li>
              <li><Link href="/scoring">Peringkat</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Komunitas</h4>
            <ul style={{ listStyle: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px' }}>Bantuan</h4>
            <ul style={{ listStyle: 'none', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#">Dokumentasi</a></li>
              <li><a href="#">Umpan Balik</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          paddingTop: '40px', 
          borderTop: '1px solid var(--glass-border)',
          color: '#475569',
          fontSize: '0.9rem'
        }}>
          © {new Date().getFullYear()} ETHICAR (Ethical Transportation Education Car Simulator). Hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
