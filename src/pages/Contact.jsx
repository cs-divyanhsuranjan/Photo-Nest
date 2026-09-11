import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#0A0A0A', color: '#FFF', minHeight: '100vh', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Concierge Support
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 800, margin: '10px 0 16px' }}>
            How Can We Assist You?
          </h1>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Have questions regarding verified creator bookings, custom multi-crew shoots, or equipment audits? Reach out to our dedicated support team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'start' }}>
          
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#121212', border: '1px solid #222', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(212,175,55,0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                <Mail size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#666', display: 'block', fontWeight: 700, letterSpacing: '1px' }}>EMAIL CONCIERGE</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFF' }}>support@photonest.com</span>
              </div>
            </div>

            <div style={{ background: '#121212', border: '1px solid #222', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(212,175,55,0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                <Phone size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#666', display: 'block', fontWeight: 700, letterSpacing: '1px' }}>DIRECT LINE</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFF' }}>+91 (800) 555-7424</span>
              </div>
            </div>

            <div style={{ background: '#121212', border: '1px solid #222', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ background: 'rgba(212,175,55,0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                <Clock size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#666', display: 'block', fontWeight: 700, letterSpacing: '1px' }}>RESPONSE TIME</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFF' }}>Within 2 Business Hours</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ background: '#121212', border: '1px solid #262626', borderRadius: '20px', padding: '36px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', border: '1px solid #D4AF37', color: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Send size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Message Received</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Thank you for reaching out. A client concierge agent will follow up with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input required type="text" placeholder="e.g. Ananya Roy" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input required type="email" placeholder="ananya@example.com" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                    Inquiry Type
                  </label>
                  <select style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', outline: 'none' }}>
                    <option>General Booking Query</option>
                    <option>Creator Audit & Verification</option>
                    <option>Enterprise / Multi-Crew Hire</option>
                    <option>Technical Platform Issue</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                    Message
                  </label>
                  <textarea required rows={4} placeholder="Provide details about your project or inquiry..." style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', background: '#050505', border: '1px solid #333', color: '#FFF', outline: 'none', resize: 'none' }} />
                </div>

                <button type="submit" style={{ padding: '14px', borderRadius: '8px', background: '#D4AF37', color: '#000', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '6px' }}>
                  Send Concierge Inquiry <Send size={15} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}