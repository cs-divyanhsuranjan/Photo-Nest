import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, MapPin, Award } from 'lucide-react';

export const PhotographerCard = ({ photographer }) => {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      border: '1px solid #ECECEC',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease'
    }}>
      <div style={{ position: 'relative', height: '220px' }}>
        <img src={photographer.profileImage} alt={photographer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {photographer.verified && (
          <span className="badge-gold" style={{ position: 'absolute', top: '12px', right: '12px', background: '#FFFFFF' }}>
            <CheckCircle size={12}/> Verified
          </span>
        )}
      </div>

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{photographer.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 700, color: '#D4AF37' }}>
            <Star size={14} fill="#D4AF37" /> {photographer.rating}
          </div>
        </div>

        <p style={{ color: '#666', fontSize: '0.88rem', marginBottom: '12px' }}>{photographer.businessName}</p>

        <div style={{ display: 'flex', gap: '12px', fontSize: '0.82rem', color: '#555', marginBottom: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> {photographer.location}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Award size={14}/> {photographer.experience} Yrs Exp</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {photographer.specializations.slice(0, 3).map((spec, i) => (
            <span key={i} style={{ background: '#F3F3F3', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', color: '#444' }}>
              {spec}
            </span>
          ))}
        </div>

        <Link to={`/photographers/${photographer.id}`} className="btn-dark" style={{ marginTop: 'auto', textAlign: 'center', width: '100%' }}>
          View Profile
        </Link>
      </div>
    </div>
  );
};