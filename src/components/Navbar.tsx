'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/features', label: 'Fitur' },
    { href: '/quiz', label: 'Quiz' },
    { href: '/game', label: 'Game AI' },
    { href: '/characters', label: 'Karakter' },
    { href: '/scoring', label: 'Penilaian' },
  ];

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
      <Link href="/" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: '40px', height: '40px', position: 'relative' }}>
          <Image src="/logo.png" alt="Logo ETHICAR" fill style={{ objectFit: 'cover' }} />
        </div>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent-cyan)' }}>ETHICAR</span>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-item">
            {link.label}
          </Link>
        ))}
        <Link href="/game" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
          Main Sekarang
        </Link>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        style={{
          display: 'none', // Shown only on mobile via media query
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '26px',
          height: '18px',
          padding: 0,
          zIndex: 1001,
          position: 'relative'
        }}
        className="hamburger-btn"
      >
        <span style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--accent-cyan)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          boxShadow: '0 0 8px var(--accent-cyan)'
        }} />
        <span style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--accent-cyan)',
          transition: 'all 0.3s ease',
          opacity: isOpen ? 0 : 1,
          boxShadow: '0 0 8px var(--accent-cyan)'
        }} />
        <span style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--accent-cyan)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
          boxShadow: '0 0 8px var(--accent-cyan)'
        }} />
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="mobile-menu glass" style={{
          position: 'absolute',
          top: '75px',
          left: 0,
          right: 0,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderRadius: '16px',
          border: '1px solid rgba(0, 188, 212, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 188, 212, 0.15)',
          animation: 'slideDown 0.3s ease forwards',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item"
              style={{ 
                fontSize: '1.1rem', 
                fontWeight: 500, 
                padding: '10px 0', 
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--foreground)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/game" 
            onClick={() => setIsOpen(false)} 
            className="btn-primary" 
            style={{ 
              textAlign: 'center', 
              padding: '12px 20px', 
              marginTop: '10px',
              fontSize: '1rem'
            }}
          >
            Main Sekarang
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-item:hover {
          color: var(--accent-cyan);
          text-shadow: 0 0 8px rgba(0, 188, 212, 0.4);
        }
        .mobile-nav-item {
          transition: all 0.2s ease !important;
        }
        .mobile-nav-item:hover {
          color: var(--accent-cyan) !important;
          padding-left: 8px !important;
          text-shadow: 0 0 8px rgba(0, 188, 212, 0.4);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
