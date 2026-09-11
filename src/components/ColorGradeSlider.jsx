import React, { useCallback, useRef, useState } from 'react';
import { Sliders } from 'lucide-react';

export const ColorGradeSlider = ({
  rawImage,
  gradedImage,
  title = 'RAW vs Color Graded Comparison'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const position = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  }, []);

  const handleMouseMove = (event) => {
    if (isDragging) handleMove(event.clientX);
  };

  const handleTouchMove = (event) => {
    if (isDragging) handleMove(event.touches[0].clientX);
  };

  return (
    <div style={{ margin: '30px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#121212', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sliders size={18} color="#D4AF37" /> {title}
        </h4>
        <span style={{ fontSize: '0.85rem', color: '#666' }}>Drag handle left or right</span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        style={{ position: 'relative', width: '100%', height: '420px', overflow: 'hidden', borderRadius: '12px', cursor: 'ew-resize', userSelect: 'none', boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}
      >
        <img src={gradedImage} alt="Color graded" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(212, 175, 55, 0.9)', color: '#000', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem' }}>
          FINAL GRADED
        </div>

        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: `${sliderPosition}%`, overflow: 'hidden' }}>
          <img src={rawImage} alt="RAW footage" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }} />
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0, 0, 0, 0.75)', color: '#FFF', padding: '4px 12px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem' }}>
            FLAT RAW
          </div>
        </div>

        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPosition}%`, width: '3px', background: '#D4AF37', transform: 'translateX(-50%)', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '38px', height: '38px', borderRadius: '50%', background: '#121212', border: '2px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '12px', fontWeight: 'bold' }}>
            &#8594;&#8592;
          </div>
        </div>
      </div>
    </div>
  );
};
