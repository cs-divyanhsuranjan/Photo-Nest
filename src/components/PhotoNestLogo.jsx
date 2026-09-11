import React from 'react';

export default function PhotoNestLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* SVG Camera Icon */}
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="4" stroke="#D4AF37" strokeWidth="2" />
      </svg>

      {/* Brand Text */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '1px', lineHeight: 1 }}>
          <span style={{ color: '#FFFFFF' }}>PHOTO</span>
          <span style={{ color: '#D4AF37' }}>NEST</span>
        </div>
        <span style={{ fontSize: '0.55rem', color: '#888888', letterSpacing: '2.5px', marginTop: '3px', textTransform: 'uppercase' }}>
          DISCOVER. CONNECT.
        </span>
      </div>
    </div>
  );
}