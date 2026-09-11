import React, { useState } from 'react';
import { ArrowRight, Calculator, Check, ShieldCheck } from 'lucide-react';

export const QuoteEstimator = () => {
  const [eventType, setEventType] = useState('wedding');
  const [hours, setHours] = useState(8);
  const [shootersCount, setShootersCount] = useState(2);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeAlbum, setIncludeAlbum] = useState(true);

  const baseRates = {
    wedding: 25000,
    corporate: 18000,
    fashion: 15000,
    prewedding: 20000
  };

  const estimatedCost = baseRates[eventType] +
    hours * 2500 +
    (shootersCount - 1) * 8000 +
    (includeDrone ? 12000 : 0) +
    (includeAlbum ? 15000 : 0);

  return (
    <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E5E5', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', padding: '36px', margin: '40px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <Calculator size={22} color="#D4AF37" />
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#222222' }}>Instant Shoot Cost Estimator</h3>
      </div>
      <p style={{ color: '#666', fontSize: '0.92rem', marginBottom: '28px' }}>
        Configure event variables to receive an immediate realistic budget range before booking.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#222222', marginBottom: '8px' }}>Event Domain</label>
            <select value={eventType} onChange={(event) => setEventType(event.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CCC', fontSize: '0.95rem' }}>
              <option value="wedding">Destination / Main Wedding</option>
              <option value="prewedding">Pre-Wedding / Engagement</option>
              <option value="corporate">Corporate Brand Film</option>
              <option value="fashion">Fashion Editorial / Lookbook</option>
            </select>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontWeight: 700, fontSize: '0.88rem', color: '#222222' }}>Shoot Duration (Hours)</label>
              <span style={{ fontWeight: 700, color: '#D4AF37' }}>{hours} Hours</span>
            </div>
            <input type="range" min="4" max="24" step="2" value={hours} onChange={(event) => setHours(parseInt(event.target.value, 10))} style={{ width: '100%', accentColor: '#D4AF37' }} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontWeight: 700, fontSize: '0.88rem', color: '#222222' }}>Cinematographers / Photographers</label>
              <span style={{ fontWeight: 700, color: '#D4AF37' }}>{shootersCount} Crew Members</span>
            </div>
            <input type="range" min="1" max="6" value={shootersCount} onChange={(event) => setShootersCount(parseInt(event.target.value, 10))} style={{ width: '100%', accentColor: '#D4AF37' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', cursor: 'pointer', fontSize: '0.9rem' }}>
              <input type="checkbox" checked={includeDrone} onChange={(event) => setIncludeDrone(event.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }} />
              Include 4K Aerial Drone Coverage (+₹12,000)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', cursor: 'pointer', fontSize: '0.9rem' }}>
              <input type="checkbox" checked={includeAlbum} onChange={(event) => setIncludeAlbum(event.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }} />
              Include Flush-Mount Italian Leather Album (+₹15,000)
            </label>
          </div>
        </div>

        <div style={{ background: '#121212', borderRadius: '12px', padding: '30px', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#AAA', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Investment</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#D4AF37', margin: '10px 0' }}>₹{estimatedCost.toLocaleString('en-IN')}</h2>
            <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.5' }}>*Estimate includes primary editing, raw data backup, color grading, and equipment deployment.</p>
            <div style={{ marginTop: '20px', borderTop: '1px solid #222', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.85rem', color: '#CCC', display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#D4AF37" /> Direct Creator Pricing Guarantee</div>
              <div style={{ fontSize: '0.85rem', color: '#CCC', display: 'flex', alignItems: 'center', gap: '6px' }}><ShieldCheck size={14} color="#D4AF37" /> Zero Agency Markup</div>
            </div>
          </div>
          <button className="btn-gold" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>Request Custom Quote <ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};
