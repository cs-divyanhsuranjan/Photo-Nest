import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Plus, X } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';

export const EditProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    location: '',
    experience: 0,
    bio: '',
    cameras: [],
    lenses: [],
    equipment: [],
    services: []
  });

  const [newCamera, setNewCamera] = useState('');
  const [newLens, setNewLens] = useState('');
  const [newService, setNewService] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        businessName: user.businessName || '',
        location: user.location || 'Delhi NCR',
        experience: user.experience || 1,
        bio: user.bio || '',
        cameras: user.cameras || ['Sony A7 IV'],
        lenses: user.lenses || ['Sony 24-70mm GM'],
        equipment: user.equipment || ['Godox Flash'],
        services: user.services || ['Wedding Photography', 'Pre-Wedding']
      });
    }
  }, [user]);

  if (!user) {
    return <div className="container" style={{ padding: '80px 0' }}>Please login to edit your profile.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('Profile updated successfully!');
    navigate('/dashboard');
  };

  const addItem = (field, item, setItem) => {
    if (item.trim()) {
      setFormData({ ...formData, [field]: [...formData[field], item.trim()] });
      setItem('');
    }
  };

  const removeItem = (field, index) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
  };

  return (
    <div className="container" style={{ padding: '60px 24px', maxWidth: '800px' }}>
      <button onClick={() => navigate('/dashboard')} className="btn-outline" style={{ marginBottom: '24px', display: 'flex', gap: '6px', alignItems: 'center' }}>
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <h1 className="section-title">Edit Creator Profile</h1>
      <p className="section-subtitle">Keep your gear, bio, and service offerings updated for prospective clients</p>

      <form onSubmit={handleSubmit} style={{ background: '#FFFFFF', padding: '36px', borderRadius: '12px', border: '1px solid #E5E5E5' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #EEE', paddingBottom: '8px' }}>
          General Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Brand / Studio Name</label>
            <input
              type="text"
              required
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Base Location</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Years Experience</label>
            <input
              type="number"
              min="0"
              required
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) || 0 })}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Professional Bio</label>
          <textarea
            rows={4}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #CCC', fontFamily: 'inherit' }}
            placeholder="Tell clients about your shooting style, tone, and experience..."
          />
        </div>

        {/* Camera Gear Section */}
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '32px 0 20px 0', borderBottom: '1px solid #EEE', paddingBottom: '8px' }}>
          Camera Bodies & Gear
        </h3>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Cameras</label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <input
              type="text"
              placeholder="e.g. Sony FX3 or Canon EOS R5"
              value={newCamera}
              onChange={(e) => setNewCamera(e.target.value)}
              style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
            <button type="button" className="btn-dark" onClick={() => addItem('cameras', newCamera, setNewCamera)}>
              <Plus size={16} /> Add
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {formData.cameras.map((cam, i) => (
              <span key={i} style={{ background: '#F1F1F1', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {cam} <X size={14} style={{ cursor: 'pointer' }} onClick={() => removeItem('cameras', i)} />
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', marginBottom: '6px' }}>Lenses</label>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
            <input
              type="text"
              placeholder="e.g. Sony 24-70mm GM II"
              value={newLens}
              onChange={(e) => setNewLens(e.target.value)}
              style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #CCC' }}
            />
            <button type="button" className="btn-dark" onClick={() => addItem('lenses', newLens, setNewLens)}>
              <Plus size={16} /> Add
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {formData.lenses.map((lens, i) => (
              <span key={i} style={{ background: '#F1F1F1', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {lens} <X size={14} style={{ cursor: 'pointer' }} onClick={() => removeItem('lenses', i)} />
              </span>
            ))}
          </div>
        </div>

        <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '16px' }}>
          <Save size={16} /> Save Changes
        </button>
      </form>
    </div>
  );
};