import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Verified Creators', value: '450+' },
    { label: 'Shoots Completed', value: '3,200+' },
    { label: 'Cities Covered', value: '28' },
    { label: 'Client Satisfaction', value: '99.4%' }
  ];

  const pillars = [
    {
      icon: <ShieldCheck size={28} color="#D4AF37" />,
      title: 'Vetted Visual Excellence',
      description: 'Every photographer and videographer on PhotoNest undergoes strict identity, gear ownership, and color-grading audit.'
    },
    {
      icon: <Zap size={28} color="#D4AF37" />,
      title: 'Zero Direct Markups',
      description: 'We connect clients directly with creative teams without agency inflated quotes or hidden middleman service fees.'
    },
    {
      icon: <Award size={28} color="#D4AF37" />,
      title: 'Cinema Gear Transparency',
      description: 'Full portfolio clarity with exact camera gear lists—from RED and Sony Cinema FX lines to Hasselblad medium format.'
    }
  ];

  return (
    <div style={{ background: '#0A0A0A', color: '#FFFFFF', minHeight: '100vh', padding: '80px 0' }}>
      
      {/* 1. Header Hero */}
      <section style={{ padding: '0 24px 80px', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#D4AF37',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '20px'
          }}>
            <Sparkles size={14} /> Reimagining Visual Storytelling
          </span>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'calc(2.2rem + 1.5vw)',
            fontWeight: 800,
            lineHeight: '1.2',
            marginBottom: '24px'
          }}>
            Connecting Elite Visionaries with <br />
            <span style={{ color: '#D4AF37' }}>Unforgettable Moments</span>
          </h1>

          <p style={{ color: '#A0A0A0', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '750px', margin: '0 auto' }}>
            PhotoNest is India’s premier visual marketplace engineered to bridge the gap between discerning clients and verified master photographers, videographers, and editors.
          </p>
        </div>
      </section>

      {/* 2. Platform Impact Metrics */}
      <section style={{ background: '#121212', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '50px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#D4AF37', fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
              <div style={{ color: '#888', fontSize: '0.88rem', fontWeight: 600, marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Narrative Block */}
      <section style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div>
            <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Mission</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 800, margin: '12px 0 20px', lineHeight: '1.3' }}>
              Standardizing Excellence in the Visual Arts
            </h2>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '16px' }}>
              For too long, booking top-tier visual creators involved opaque pricing, unverified gear capabilities, and heavy agency markup fees. PhotoNest changes the paradigm.
            </p>
            <p style={{ color: '#999', lineHeight: '1.8', fontSize: '0.98rem', marginBottom: '28px' }}>
              We empower artists with direct control over their bookings and pricing while giving clients transparent access to certified talent across wedding, commercial, fashion, and real estate sectors.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['100% Identity & Equipment Verified', 'Direct Direct-to-Artist Inquiries', 'Transparent Portfolio & Color Science Standards'].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#DDD', fontSize: '0.92rem', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#D4AF37" /> {text}
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #333',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800"
                alt="Cinema Shoot"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.95) 100%)',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
              }}>
                <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem' }}>Crafting Visual Legacies</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '4px', fontFamily: 'Playfair Display, serif' }}>Cinema-Grade Production Quality</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Three Platform Pillars */}
      <section style={{ padding: '80px 24px', background: '#0D0D0D', borderTop: '1px solid #1F1F1F' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>Why PhotoNest</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 800, marginTop: '8px' }}>Built for Quality & Trust</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {pillars.map((pillar, idx) => (
              <div key={idx} style={{
                background: '#121212',
                border: '1px solid #222',
                borderRadius: '16px',
                padding: '36px 28px'
              }}>
                <div style={{ marginBottom: '20px' }}>{pillar.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>{pillar.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action Banner */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #181818 0%, #101010 100%)',
          border: '1px solid #333',
          borderRadius: '24px',
          padding: '60px 40px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>Ready to Capture Your Next Story?</h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto 32px', fontSize: '0.98rem' }}>
            Browse verified photographers and videographers across top destinations or apply as a creator today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/photographers" style={{
              padding: '14px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              background: '#D4AF37',
              color: '#000',
              fontWeight: 700,
              borderRadius: '8px'
            }}>
              Explore Artists <ArrowRight size={16} />
            </Link>
            <Link to="/register" style={{
              padding: '14px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: '#FFF',
              border: '1px solid #444',
              borderRadius: '8px',
              fontWeight: 700
            }}>
              Join Network
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}