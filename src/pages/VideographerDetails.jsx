import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, CheckCircle, Video, Phone, Film, Cpu, Disc } from 'lucide-react';
import { getVideographerById } from '../services/api';

export const VideographerDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getVideographerById(id).then(setProfile);
  }, [id]);

  if (!profile) return <div className="container" style={{ padding: '80px 0' }}>Loading videographer profile...</div>;

  return (
    <div>
      {/* Cover Banner */}
      <div style={{ position: 'relative', height: '320px', background: '#0D0D0D' }}>
        <img src={profile.coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
      </div>

      <div className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10, paddingBottom: '80px' }}>
        {/* Main Profile Info Box */}
        <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1px solid #E5E5E5' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <img src={profile.profileImage} alt={profile.name} style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #FFFFFF' }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>{profile.name}</h1>
                {profile.verified && <span className="badge-gold"><CheckCircle size={14}/> Verified Director</span>}
              </div>
              <p style={{ color: '#666', fontSize: '1.05rem' }}>{profile.businessName}</p>

              <div style={{ display: 'flex', gap: '16px', marginTop: '10px', color: '#555', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={16}/> {profile.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Video size={16}/> {profile.experience} Yrs Filming</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={16} fill="#D4AF37" color="#D4AF37"/> {profile.rating} ({profile.reviewCount} Reviews)</span>
              </div>
            </div>

            <button className="btn-gold"><Phone size={16}/> Direct Booking Inquiry</button>
          </div>
        </div>

        {/* Video Technical Specs & Gear Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Filmmaking Philosophy</h3>
            <p style={{ color: '#444', lineHeight: '1.8', marginBottom: '28px' }}>{profile.bio}</p>

            {/* Cinema Tech Stack */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Cinema Tech Specs</h3>
            <div style={{ background: '#F8F9FA', padding: '20px', borderRadius: '12px', border: '1px solid #ECECEC', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Disc size={18} color="#D4AF37" />
                <span style={{ fontSize: '0.92rem' }}><strong>Max Video Resolution:</strong> {profile.videoResolution || '4K HDR Cinema'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu size={18} color="#D4AF37" />
                <span style={{ fontSize: '0.92rem' }}><strong>Post-Production Suite:</strong> {profile.editingSoftware?.join(', ') || 'DaVinci Resolve, Premiere Pro'}</span>
              </div>
            </div>

            {/* Camera Systems */}
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '28px 0 16px 0' }}>Camera Systems & Cinema Lenses</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {profile.cameras?.map((cam, i) => (
                <span key={i} style={{ background: '#121212', color: '#FFF', padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                  {cam}
                </span>
              ))}
              {profile.lenses?.map((lens, i) => (
                <span key={i} style={{ background: '#FFF', border: '1px solid #CCC', padding: '8px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 500 }}>
                  {lens}
                </span>
              ))}
            </div>
          </div>

          {/* Show Reels & Audio/Gimbal Rig */}
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Featured Video Stills</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '28px' }}>
              {profile.portfolio?.map((img, i) => (
                <div key={i} style={{ position: 'relative', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={img} alt="Film Frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '48px', height: '48px', background: 'rgba(212,175,55,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Film size={22} color="#000" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>Audio, Lighting & Stabilizers</h3>
            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {profile.equipment?.map((eq, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: '#555', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '6px', height: '6px', background: '#D4AF37', borderRadius: '50%' }}></span> {eq}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};