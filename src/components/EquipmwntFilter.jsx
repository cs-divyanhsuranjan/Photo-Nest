import React from 'react';
import { Camera, Cpu, Zap, Check } from 'lucide-react';

export const EquipmentFilter = ({ selectedGear, onToggleGear }) => {
  const gearCategories = [
    { id: 'sony-fx3', label: 'Sony FX3 Cinema', icon: Camera },
    { id: 'red-v-raptor', label: 'RED V-Raptor 8K', icon: Camera },
    { id: 'dji-inspire', label: 'DJI Drone Certified', icon: Cpu },
    { id: 'prime-lenses', label: 'f/1.2 - f/1.4 Primes', icon: Camera },
    { id: 'godox-lighting', label: 'Studio Strobe Rig', icon: Zap },
    { id: 'gimbal-rig', label: '3-Axis Gimbal Stabilizer', icon: Cpu }
  ];

  return (
    <div style={{
      background: '#121212',
      borderRadius: '12px',
      padding: '24px',
      color: '#FFFFFF',
      marginBottom: '32px',
      border: '1px solid #222'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#D4AF37' }}>Equipment & Tech Arsenal Filter</h3>
          <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '2px' }}>Find creators equipped with exact technical rigs for your shoot</p>
        </div>
        {selectedGear.length > 0 && (
          <span style={{ fontSize: '0.8rem', color: '#D4AF37', cursor: 'pointer' }} onClick={() => selectedGear.forEach(id => onToggleGear(id))}>
            Reset Filters
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {gearCategories.map((item) => {
          const isSelected = selectedGear.includes(item.id);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onToggleGear(item.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '30px',
                border: isSelected ? '1px solid #D4AF37' : '1px solid #333',
                background: isSelected ? 'rgba(212, 175, 55, 0.15)' : '#1A1A1A',
                color: isSelected ? '#D4AF37' : '#CCC',
                fontSize: '0.85rem',
                fontWeight: isSelected ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isSelected ? <Check size={14} color="#D4AF37" /> : <Icon size={14} color="#888" />}
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};