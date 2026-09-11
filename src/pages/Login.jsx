import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ArrowRight } from 'lucide-react';
import PhotoNestLogo from '../components/PhotoNestLogo';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('client');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', remember: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'creator') {
      navigate('/edit-profile');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      background: '#0A0A0A',
      color: '#FFFFFF',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(18, 18, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid #262626',
        borderRadius: '24px',
        padding: '40px 32px',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)',
        position: 'relative',
        zIndex: 2
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '16px' }}>
            <PhotoNestLogo />
          </Link>
          <p style={{ color: '#888', fontSize: '0.88rem', margin: 0 }}>Sign in to manage your bookings and portfolios</p>
        </div>

        {/* Role Selector */}
        <div style={{
          background: '#050505',
          border: '1px solid #222',
          borderRadius: '12px',
          padding: '4px',
          display: 'flex',
          marginBottom: '28px'
        }}>
          <button
            type="button"
            onClick={() => setRole('client')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              background: role === 'client' ? '#1A1A1A' : 'transparent',
              color: role === 'client' ? '#D4AF37' : '#888',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Client Access
          </button>
          <button
            type="button"
            onClick={() => setRole('creator')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              background: role === 'creator' ? '#1A1A1A' : 'transparent',
              color: role === 'creator' ? '#D4AF37' : '#888',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Creator Portal
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={18} color="#666" style={{ position: 'absolute', left: '14px' }} />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '10px',
                  background: '#050505',
                  border: '1px solid #333',
                  color: '#FFF',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.78rem', color: '#AAA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Password
              </label>
              <a href="#" style={{ fontSize: '0.8rem', color: '#D4AF37', textDecoration: 'none' }}>Forgot?</a>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock size={18} color="#666" style={{ position: 'absolute', left: '14px' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 42px',
                  borderRadius: '10px',
                  background: '#050505',
                  border: '1px solid #333',
                  color: '#FFF',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '14px', background: 'none', border: 'none', color: '#666', cursor: 'pointer', padding: 0 }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              id="remember"
              checked={formData.remember}
              onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
              style={{ accentColor: '#D4AF37', width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <label htmlFor="remember" style={{ fontSize: '0.85rem', color: '#AAA', cursor: 'pointer' }}>
              Keep me signed in for 30 days
            </label>
          </div>

          <button
            type="submit"
            style={{
              padding: '14px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#D4AF37',
              color: '#000',
              border: 'none',
              cursor: 'pointer',
              marginTop: '6px'
            }}
          >
            Sign In as {role === 'client' ? 'Client' : 'Creator'} <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #222', textAlign: 'center', fontSize: '0.88rem', color: '#777' }}>
          Don’t have an account?{' '}
          <Link to="/register" style={{ color: '#D4AF37', fontWeight: 700, textDecoration: 'none' }}>
            Apply as a Pro
          </Link>
        </div>

      </div>
    </div>
  );
}