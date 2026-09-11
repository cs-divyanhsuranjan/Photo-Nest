import React from 'react';
import { MapPin, CheckCircle, ShieldCheck, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomeExtensions = () => {
  const destinations = [
    { city: 'Delhi NCR', count: '140+ Pros', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600' },
    { city: 'Udaipur', count: '85+ Pros', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwYstLIaCfHUKm2qqxT9e0S3Rze1ywrHH5uFaFBA4GA&s=10' },
    { city: 'Goa', count: '95+ Pros', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600' },
    { city: 'Mumbai', count: '120+ Pros', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600' }
  ];

  return (
    <div>
      {/* Popular Destination Hubs */}
      <section style={{ padding: '80px 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge-gold" style={{ marginBottom: '10px' }}>Explore by Destination</span>
            <h2 className="section-title">Top Shoot Hubs Across India</h2>
            <p className="section-subtitle">Find local talent and crews accustomed to premier venues and regional lighting</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {destinations.map((item, idx) => (
              <Link
                key={idx}
                to={`/photographers?location=${item.city}`}
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                }}
              >
                <img src={item.img} alt={item.city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFF'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D4AF37', fontSize: '0.85rem', fontWeight: 700 }}>
                    <MapPin size={14} /> {item.count}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px' }}>{item.city}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">How PhotoNest Works</h2>
            <p className="section-subtitle">Simple, direct, and transparent booking experience</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#F9F9F9', padding: '32px', borderRadius: '12px', border: '1px solid #EEE' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', marginBottom: '12px' }}>01</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Explore Portfolios & Gear</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Filter creators by camera setups, style categories, and sample color-grading clips.
              </p>
            </div>

            <div style={{ background: '#F9F9F9', padding: '32px', borderRadius: '12px', border: '1px solid #EEE' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', marginBottom: '12px' }}>02</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Calculate Estimate</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Use our built-in quote estimator to calculate your target budget based on duration and crew size.
              </p>
            </div>

            <div style={{ background: '#F9F9F9', padding: '32px', borderRadius: '12px', border: '1px solid #EEE' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', marginBottom: '12px' }}>03</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>Connect Directly</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Inquire directly with your chosen team with zero agency markups or hidden service fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};