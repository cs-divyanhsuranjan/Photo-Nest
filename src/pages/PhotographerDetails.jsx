import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Camera, Phone, Mail } from 'lucide-react';
import { getPhotographerById } from '../services/api';

export const PhotographerDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getPhotographerById(id).then(setProfile);
  }, [id]);

  if (!profile) return <div className="container" style={{ padding: '80px 0' }}>Loading profile details...</div>;

  return (
    <div>
      {/* Profile Header Hero */}
      <div style={{ position: 'relative', height: '300px', background: '#111' }}>
        <img src={profile.coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
      </div>

      <div className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10, paddingBottom: '80px' }}>
        <div style={{ background: '#FFF', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <img src={profile.profileImage} alt={profile.name} style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #FFF' }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>{profile.name}</h1>
                {profile.verified && <span className="badge-gold"><CheckCircle size={14}/> Verified Pro</span>}
              </div>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>{profile.businessName}</p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px', color: '#555', fontSize: '0.9rem' }}>
                <span><MapPin size={16}/> {profile.location}</span>
                <span><Star size={16} fill="#D4AF37" color="#D4AF37"/> {profile.rating} ({profile.reviewCount} Reviews)</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-gold"><Phone size={16}/> Contact Direct</button>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>About Professional</h3>
            <p style={{ color: '#444', lineHeight: '1.8' }}>{profile.bio}</p>

            <h3 style={{ fontSize: '1.4rem', margin: '32px 0 16px 0' }}>Camera Equipment</h3>
            <ul style={{ listStyle: 'none' }}>
              {profile.cameras?.map((cam, i) => (
                <li key={i} style={{ background: '#FFF', padding: '12px', borderRadius: '8px', marginBottom: '8px', border: '1px solid #EEE', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <Camera size={16} color="#D4AF37"/> {cam}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Portfolio Showcase</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {profile.portfolio?.map((img, i) => (
                <img key={i} src={img} alt="Portfolio" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};