import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', category: 'Photographer', gear: '' });

  return (
    <div style={{ background: '#0A0A0A', color: '#FFF', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
        
        <div>
          <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Creator Network
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 800, margin: '12px 0 20px', lineHeight: '1.2' }}>
            Join India’s Elite <br /><span style={{ color: '#D4AF37' }}>Visual Storytellers</span>
          </h1>
          <p style={{ color: '#A0A0A0', lineHeight: '1.7', marginBottom: '32px' }}>
            Get direct leads from premium clients, showcase your gear arsenal, and manage your bookings with zero commission markups.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { title: 'Zero Commission Fees', desc: 'Keep 100% of what you quote to your clients.' },
              { title: 'Verified Badge Prestige', desc: 'Gain credibility with automated gear and identity checks.' },
              { title: 'Direct Client Inquiries', desc: 'No agency middlemen—chat directly with event planners.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(212,175,55,0.1)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.3)' }}>
                  <ShieldCheck size={20} color="#D4AF37" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '2px', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#121212', border: '1px solid #262626', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '6px' }}>Apply for Verification</h3>
          <p style={{ color: '#777', fontSize: '0.88rem', marginBottom: '24px' }}>Fill out your details to begin the onboarding audit.</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#AAA', fontWeight: 600 }}>FULL NAME</label>
              <input type="text" placeholder="e.g. Vikramaditya Singh" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', marginTop: '6px' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#AAA', fontWeight: 600 }}>EMAIL</label>
                <input type="email" placeholder="name@domain.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', marginTop: '6px' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#AAA', fontWeight: 600 }}>PRIMARY ROLE</label>
                <select style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', marginTop: '6px' }}>
                  <option>Photographer</option>
                  <option>Videographer</option>
                  <option>Colorist / Post-Editor</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#AAA', fontWeight: 600 }}>PRIMARY CAMERA / GEAR</label>
              <input type="text" placeholder="e.g. Sony A1, RED V-Raptor, DJI Mavic 3 Pro" style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', marginTop: '6px' }} />
            </div>

            <button type="submit" style={{ marginTop: '12px', padding: '14px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', background: '#D4AF37', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}>
              Submit Application <ArrowRight size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}