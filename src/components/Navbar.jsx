import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import PhotoNestLogo from './PhotoNestLogo';

export default function Navabar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Updated section links list
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Specializations', path: '/specializations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #1F1F1F',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      padding: '14px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <PhotoNestLogo />
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          justifyContent: 'center'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: isActive(link.path) ? '#D4AF37' : '#BBB',
                borderBottom: isActive(link.path) ? '2px solid #D4AF37' : '2px solid transparent',
                paddingBottom: '4px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <Link to="/login" style={{
            textDecoration: 'none',
            color: '#FFF',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '8px 12px'
          }}>
            Sign In
          </Link>
          <Link to="/register" style={{
            textDecoration: 'none',
            background: '#D4AF37',
            color: '#000',
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '8px 14px',
            borderRadius: '6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <ShieldCheck size={15} /> Apply as Pro
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFF',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: '#121212',
          padding: '16px',
          borderTop: '1px solid #222',
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: isActive(link.path) ? '#D4AF37' : '#CCC'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}