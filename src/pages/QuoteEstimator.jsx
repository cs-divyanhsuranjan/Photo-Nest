import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const QuoteEstimator = () => {
  const [eventType, setEventType] = useState('wedding');
  const [hours, setHours] = useState(8);
  const [crew, setCrew] = useState(2);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeTeaser, setIncludeTeaser] = useState(true);

  // Dynamic pricing calculation
  const getBaseRate = () => {
    switch (eventType) {
      case 'wedding': return 40000;
      case 'prewedding': return 20000;
      case 'commercial': return 35000;
      default: return 25000;
    }
  };

  const totalEstimate =
    getBaseRate() +
    hours * 3500 +
    crew * 6000 +
    (includeDrone ? 8000 : 0) +
    (includeTeaser ? 4000 : 0);

  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '20px',
      padding: '36px',
      border: '1px solid #EAEAEA',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
    }}>
      {/* Top Description */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <Calculator size={22} color="#D4AF37" />
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Instant Pricing Calculator
        </span>
      </div>
      <p style={{ color: '#666666', fontSize: '0.95rem', marginBottom: '32px' }}>
        Configure event variables to receive an immediate realistic budget range before booking.
      </p>

      {/* Grid Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Left Side: Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Dropdown */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#333333', marginBottom: '8px' }}>
              Select Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#F8F9FA',
                color: '#111111',
                border: '1px solid #DDDDDD',
                borderRadius: '10px',
                fontSize: '0.95rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="wedding">Destination / Main Wedding</option>
              <option value="prewedding">Pre-Wedding Shoot</option>
              <option value="commercial">Commercial / Fashion</option>
            </select>
          </div>

          {/* Slider 1: Hours */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333333' }}>Coverage Duration</span>
              <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.95rem' }}>{hours} Hours</span>
            </div>
            <input
              type="range"
              min="2"
              max="24"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer' }}
            />
          </div>

          {/* Slider 2: Crew */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333333' }}>Team Size</span>
              <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.95rem' }}>{crew} Crew Members</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={crew}
              onChange={(e) => setCrew(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer' }}
            />
          </div>

          {/* Checkboxes with Visible Dark Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#222222', fontSize: '0.92rem', fontWeight: 500, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={includeDrone}
                onChange={(e) => setIncludeDrone(e.target.checked)}
                style={{ accentColor: '#D4AF37', width: '18px', height: '18px', cursor: 'pointer' }}
              />
              Include Drone / Aerial Coverage
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#222222', fontSize: '0.92rem', fontWeight: 500, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={includeTeaser}
                onChange={(e) => setIncludeTeaser(e.target.checked)}
                style={{ accentColor: '#D4AF37', width: '18px', height: '18px', cursor: 'pointer' }}
              />
              Same-Day Teaser Edit
            </label>
          </div>
        </div>

        {/* Right Side: Estimated Investment Card */}
        <div style={{
          background: '#0D0D0D',
          borderRadius: '16px',
          padding: '32px',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between',
          height: '100%'
        }}>
          <div>
            <span style={{ color: '#888888', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              Estimated Investment
            </span>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#D4AF37', margin: '12px 0 16px 0' }}>
              ₹{totalEstimate.toLocaleString('en-IN')}
            </div>
            <p style={{ color: '#888888', fontSize: '0.82rem', lineHeight: '1.6', marginBottom: '24px' }}>
              *Estimate includes primary editing, raw data backup, color grading, and equipment deployment.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', borderTop: '1px solid #222222', paddingTop: '20px' }}>
              <div style={{ color: '#CCCCCC', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#D4AF37" /> Direct Creator Pricing Guarantee
              </div>
              <div style={{ color: '#CCCCCC', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#D4AF37" /> Zero Agency Markup
              </div>
            </div>

            <button style={{
              width: '100%',
              padding: '14px',
              background: '#D4AF37',
              color: '#000000',
              fontWeight: 700,
              fontSize: '0.95rem',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background 0.2s ease'
            }}>
              Request Custom Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};