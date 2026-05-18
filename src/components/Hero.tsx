import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '120px 24px 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 74, 153, 0.3) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 188, 212, 0.2) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: -1
      }}></div>

      <div className="fade-in">
        <div className="float" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <Image 
              src="/logo.png" 
              alt="Logo Besar ETHICAR" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          marginBottom: '16px',
          background: 'linear-gradient(to right, #fff, var(--accent-cyan))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ETHICAR
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
          maxWidth: '800px', 
          margin: '0 auto 40px',
          color: '#94a3b8',
          lineHeight: '1.6'
        }}>
          Simulator Edukasi Lalu Lintas Berbasis AI Terlengkap. 
          Kuasai etika berkendara, ambil keputusan cerdas, 
          dan jadilah pengendara paling bertanggung jawab di dunia virtual.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/quiz" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            Mulai Sekarang
          </Link>
          <Link href="/features" className="glass" style={{ 
            padding: '16px 32px', 
            fontSize: '1.1rem',
            color: 'white',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Jelajahi Fitur
          </Link>
        </div>
      </div>

      <div style={{ 
        marginTop: '60px', 
        display: 'flex', 
        gap: '40px', 
        color: '#64748b',
        fontSize: '0.9rem',
        fontWeight: 500
      }}>
        <span>✓ Analisis Perilaku AI</span>
        <span>✓ Skenario Realistis</span>
        <span>✓ Berbagai Pilihan Karakter</span>
      </div>
    </section>
  );
};

export default Hero;
