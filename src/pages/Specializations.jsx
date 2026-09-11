import React from 'react';
import { useNavigate } from 'react-router-dom';
import { specializationsData } from '../data/specializations';
import { ArrowRight } from 'lucide-react';

export const Specializations = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
        <h1 className="section-title" style={{ color: '#FFFFFF' }}>Specialization Directory</h1>
        <p className="section-subtitle" style={{ color: '#AAAAAA' }}>Discover creators by exact creative domain, technical workflow, and event type</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {specializationsData.map((spec, i) => (
          <div
            key={i}
            onClick={() => navigate(`/photographers?spec=${spec.slug}`)}
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #E5E5E5',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease'
            }}
          >
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img src={spec.img} alt={spec.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{spec.name}</h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4AF37' }}>{spec.count} Pros</span>
              </div>
              <p style={{ color: '#666', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '16px' }}>
                {spec.desc}
              </p>
              <span style={{ color: '#121212', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Explore Professionals <ArrowRight size={14} color="#D4AF37" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};