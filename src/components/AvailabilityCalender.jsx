import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle, XCircle } from 'lucide-react';

export const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Simulated booked dates
  const bookedDates = [5, 12, 18, 19, 25, 26];

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '30px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CalendarIcon size={18} color="#D4AF37" /> Shoot Availability (Current Month)
        </h4>
        <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#4CAF50' }}>
            <span style={{ width: '8px', height: '8px', background: '#4CAF50', borderRadius: '50%' }}></span> Available
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#E53935' }}>
            <span style={{ width: '8px', height: '8px', background: '#E53935', borderRadius: '50%' }}></span> Booked
          </span>
        </div>
      </div>

      {/* Grid Calendar View */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '8px',
        textAlign: 'center'
      }}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
          <div key={idx} style={{ fontWeight: 700, fontSize: '0.8rem', color: '#888', paddingBottom: '6px' }}>
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => {
          const isBooked = bookedDates.includes(day);
          const isSelected = selectedDate === day;

          return (
            <button
              key={day}
              disabled={isBooked}
              onClick={() => setSelectedDate(day)}
              style={{
                height: '40px',
                borderRadius: '8px',
                border: isSelected ? '2px solid #D4AF37' : '1px solid #E5E5E5',
                background: isBooked ? '#FFEBEE' : isSelected ? 'rgba(212, 175, 55, 0.15)' : '#FAFAFA',
                color: isBooked ? '#D32F2F' : isSelected ? '#121212' : '#333',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.85rem',
                cursor: isBooked ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                textDecoration: isBooked ? 'line-through' : 'none'
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div style={{ marginTop: '16px', padding: '12px', background: '#F8F9FA', borderRadius: '8px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#333' }}>
            Selected Date: <strong>Day {selectedDate}</strong> is open for booking.
          </span>
          <span style={{ color: '#4CAF50', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle size={14} /> Ready to Reserve
          </span>
        </div>
      )}
    </div>
  );
};