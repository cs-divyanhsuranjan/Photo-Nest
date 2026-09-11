import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, ShieldCheck, Award, Heart } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer style={{ background: '#0A0A0A', color: '#F5F5F5', borderTop: '1px solid #222', paddingTop: '70px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Newsletter CTA Block */}
        <div style={{
          background: 'linear-gradient(135deg, #181818 0%, #101010 100%)',
          border: '1px solid #333',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '60px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <div>
            <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Exclusive Updates
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginTop: '4px', color: '#FFF' }}>
              Subscribe to Visual Trends & Creator Spotlights
            </h3>
            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '4px' }}>
              Get curated lookbooks, pricing benchmarks, and seasonal shoot ideas once a month.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', flex: '1', maxWidth: '450px' }}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: '8px',
                background: '#050505',
                border: '1px solid #333',
                color: '#FFF',
                fontSize: '0.9rem'
              }}
            />
            <button type="submit" className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              {subscribed ? 'Joined!' : <>Join List <Send size={15} /></>}
            </button>
          </form>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '50px',
          borderBottom: '1px solid #222'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', background: '#D4AF37', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={20} color="#000" />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px', color: '#FFF', fontFamily: 'Playfair Display, serif' }}>
                PHOTO<span style={{ color: '#D4AF37' }}>NEST</span>
              </span>
            </div>
            <p style={{ color: '#888', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '20px' }}>
              India’s premier network connecting clients directly with verified photographers, cinematographers, and visual storytellers.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ width: '36px', height: '36px', background: '#1A1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', border: '1px solid #333' }}>
                <Instagram size={18} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', background: '#1A1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', border: '1px solid #333' }}>
                <Youtube size={18} />
              </a>
              <a href="#" style={{ width: '36px', height: '36px', background: '#1A1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', border: '1px solid #333' }}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 700, marginBottom: '18px' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><Link to="/photographers" style={{ color: '#AAA', textDecoration: 'none' }}>Photographers Directory</Link></li>
              <li><Link to="/videographers" style={{ color: '#AAA', textDecoration: 'none' }}>Cinematographers</Link></li>
              <li><Link to="/specializations" style={{ color: '#AAA', textDecoration: 'none' }}>Shoot Categories</Link></li>
              <li><Link to="/about" style={{ color: '#AAA', textDecoration: 'none' }}>About PhotoNest</Link></li>
              <li><Link to="/contact" style={{ color: '#AAA', textDecoration: 'none' }}>Support & Contact</Link></li>
            </ul>
          </div>

          {/* Creator Portal */}
          <div>
            <h4 style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 700, marginBottom: '18px' }}>For Professionals</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><Link to="/register" style={{ color: '#AAA', textDecoration: 'none' }}>Apply as a Creator</Link></li>
              <li><Link to="/login" style={{ color: '#AAA', textDecoration: 'none' }}>Creator Dashboard</Link></li>
              <li><Link to="/profile/edit" style={{ color: '#AAA', textDecoration: 'none' }}>Equipment Arsenal Manager</Link></li>
              <li><a href="#" style={{ color: '#AAA', textDecoration: 'none' }}>Verification Standard</a></li>
            </ul>
          </div>

          {/* Verification & Trust */}
          <div>
            <h4 style={{ color: '#D4AF37', fontSize: '1rem', fontWeight: 700, marginBottom: '18px' }}>Quality Assurance</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ShieldCheck size={20} color="#D4AF37" />
                <span style={{ fontSize: '0.85rem', color: '#CCC' }}>100% Identity & Gear Verified</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Award size={20} color="#D4AF37" />
                <span style={{ fontSize: '0.85rem', color: '#CCC' }}>Zero Commission Markups</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          padding: '24px 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#666'
        }}>
          <div>
            &copy; {new Date().getFullYear()} PhotoNest Platform. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};