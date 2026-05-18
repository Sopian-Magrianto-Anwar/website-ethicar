'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      marginTop: '0'
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '40px', height: '40px', position: 'relative' }}>
          <Image src="/logo.png" alt="Logo ETHICAR" fill style={{ objectFit: 'cover' }} />
        </div>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>ETHICAR</span>
      </Link>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="nav-links">
        <Link href="/features">Fitur</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/game">Game AI</Link>
        <Link href="/characters">Karakter</Link>
        <Link href="/scoring">Penilaian</Link>
        <Link href="/game" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Main Sekarang
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
