import React, { useState, useEffect } from 'react';
import { PhotographerCard } from '../components/PhotographerCard';
import { getPhotographers } from '../services/api';

export const Photographers = () => {
  const [photographers, setPhotographers] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All');

  useEffect(() => {
    getPhotographers().then(setPhotographers);
  }, []);

  const filtered = photographers.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.specializations.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesLoc = location === 'All' || p.location.includes(location);
    return matchesSearch && matchesLoc;
  });

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <h1 className="section-title">Find Photographers</h1>
      <p className="section-subtitle">Browse through top industry photographers, inspect equipment lists & portfolios</p>

      {/* Filters Bar */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Filter by name or specialization..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: '240px', padding: '12px', borderRadius: '8px', border: '1px solid #CCC' }}
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #CCC' }}>
          <option value="All">All Locations</option>
          <option value="Delhi">Delhi NCR</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>

      <div className="grid-cards">
        {filtered.map((p) => (
          <PhotographerCard key={p.id} photographer={p} />
        ))}
      </div>
    </div>
  );
};