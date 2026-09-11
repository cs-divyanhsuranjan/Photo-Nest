import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, MapPin, Video } from 'lucide-react';

export const VideographerCard = ({ videographer }) => {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
      border: '1px solid #ECECEC',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ position: 'relative', height: '220px' }}>
        <img src={videographer.profileImage} alt={videographer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {videographer.verified && (
          <span className="badge-gold" style={{ position: 'absolute', top: '12px', right: '12px', background: '#FFFFFF' }}>
            <CheckCircle size={12}/> Verified
          </span>
        )}
      </div>

      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{videographer.name}</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 700, color: '#D4AF37' }}>
            <Star size={14} fill="#D4AF37" /> {videographer.rating}
          </div>
        </div>

        <p style={{ color: '#666', fontSize: '0.88rem', marginBottom: '12px' }}>{videographer.businessName}</p>

        <div style={{ display: 'flex', gap: '12px', fontSize: '0.82rem', color: '#555', marginBottom: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14}/> {videographer.location}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Video size={14}/> {videographer.experience} Yrs Film</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {videographer.specializations.slice(0, 3).map((spec, i) => (
            <span key={i} style={{ background: '#F3F3F3', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', color: '#444' }}>
              {spec}
            </span>
          ))}
        </div>

        <Link to={`/videographers/${videographer.id}`} className="btn-dark" style={{ marginTop: 'auto', textAlign: 'center', width: '100%' }}>
          View Profile
        </Link>
      </div>
    </div>
  );
};