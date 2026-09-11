import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Eye, MessageSquare, Star, Settings } from 'lucide-react';

export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div className="container" style={{ padding: '80px 0' }}>Please log in to access your dashboard.</div>;

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <h1 className="section-title">Welcome Back, {user.name}</h1>
      <p className="section-subtitle">Manage your creative profile performance and client requests</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
          <Eye size={24} color="#D4AF37" />
          <h3 style={{ fontSize: '1.8rem', margin: '8px 0 0 0' }}>1,240</h3>
          <p style={{ color: '#777', fontSize: '0.88rem' }}>Profile Impressions</p>
        </div>
        <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
          <MessageSquare size={24} color="#D4AF37" />
          <h3 style={{ fontSize: '1.8rem', margin: '8px 0 0 0' }}>18</h3>
          <p style={{ color: '#777', fontSize: '0.88rem' }}>Direct Inquiries</p>
        </div>
      </div>
    </div>
  );
};