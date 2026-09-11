import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Camera, Film, Search, Star, Sparkles, MapPin, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { getPhotographers, getVideographers } from '../services/api';

// Premium Feature Components
import { ColorGradeSlider } from '../components/ColorGradeSlider';
import { QuoteEstimator } from '../components/QuoteEstimator';
import { HomeExtensions } from '../components/HomeExtensions';

export const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [featuredPhotographers, setFeaturedPhotographers] = useState([]);
  const [featuredVideographers, setFeaturedVideographers] = useState([]);

  useEffect(() => {
    // Fetch top featured creators for showcase
    getPhotographers().then((data) => setFeaturedPhotographers(data.slice(0, 3)));
    getVideographers().then((data) => setFeaturedVideographers(data.slice(0, 3)));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery || selectedCity) {
      navigate(`/photographers?query=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(selectedCity)}`);
    } else {
      navigate('/photographers');
    }
  };

  const specializations = [
    { name: 'Wedding & Pre-Wedding', count: '120+ Creators', tag: 'High Demand' },
    { name: 'Commercial & Fashion', count: '85+ Creators', tag: 'Trending' },
    { name: 'Events & Concerts', count: '60+ Creators', tag: 'Live Crew' },
    { name: 'Architecture & Real Estate', count: '45+ Creators', tag: 'HDR Drone' },
    { name: 'Portrait & Headshots', count: '90+ Creators', tag: 'Studio' },
    { name: 'Product & E-Commerce', count: '70+ Creators', tag: 'Catalog' }
  ];

  return (
    <div style={{ background: '#FFFFFF' }}>
      {/* 1. HERO SECTION */}
      <section style={{
        background: 'linear-gradient(180deg, #0D0D0D 0%, #171717 100%)',
        color: '#FFFFFF',
        padding: '100px 0 80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="badge-gold" style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} color="#D4AF37" /> India's Premier Visual Network
          </span>

          <h1 style={{
            fontSize: 'calc(2.2rem + 1.5vw)',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 800,
            lineHeight: '1.2',
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            Capture Life’s Masterpieces with <br />
            <span style={{ color: '#D4AF37' }}>Verified Storytellers</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#B0B0B0',
            maxWidth: '750px',
            margin: '0 auto 40px auto',
            lineHeight: '1.7'
          }}>
            Discover elite photographers, filmmakers, and colorists equipped with cinema-grade gear. Direct bookings, transparent portfolios, and zero hidden markups.
          </p>

          <form onSubmit={handleSearch} style={{
            background: '#FFFFFF',
            padding: '10px',
            borderRadius: '12px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ flex: '2', minWidth: '220px', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 12px' }}>
              <Search size={20} color="#888" />
              <input
                type="text"
                placeholder="Search by specialty, event, or camera..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '0.95rem', color: '#121212' }}
              />
            </div>

            <div style={{ flex: '1', minWidth: '160px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', borderLeft: '1px solid #EEE' }}>
              <MapPin size={18} color="#888" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', fontSize: '0.95rem', color: '#555', cursor: 'pointer' }}
              >
                <option value="">All Locations</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Goa">Goa</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
            </div>

            <button type="submit" className="btn-gold" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>
              Explore Creators
            </button>
          </form>
        </div>
      </section>

      {/* 2. TOP MASTER PHOTOGRAPHERS (PRIORITY TOP SECTION) */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '8px' }}>Curated Artists</span>
              <h2 className="section-title">Top Master Photographers</h2>
            </div>
            <Link to="/photographers" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              View All Photographers <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredPhotographers.map((pro) => (
              <div
                key={pro.id}
                onClick={() => navigate(`/photographers/${pro.id}`)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E5E5E5',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={pro.coverImage || pro.portfolio?.[0]} alt={pro.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.75)',
                    color: '#D4AF37',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="#D4AF37" /> {pro.rating}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <img src={pro.profileImage} alt={pro.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{pro.name}</h3>
                      <p style={{ color: '#666', fontSize: '0.85rem' }}>{pro.businessName}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                    {pro.cameras?.slice(0, 2).map((cam, i) => (
                      <span key={i} style={{ background: '#F1F1F1', color: '#444', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {cam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPECIALIZATIONS CATEGORY SECTION */}
      <section style={{ padding: '70px 0', background: '#FAFAFA', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge-gold" style={{ marginBottom: '8px' }}>Categorized Talent</span>
            <h2 className="section-title">Explore by Specialization</h2>
            <p className="section-subtitle">Find dedicated crews tailored specifically to your event style</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/specializations`)}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E2E2',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase' }}>{spec.tag}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '2px', color: '#111' }}>{spec.name}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#777', marginTop: '4px' }}>{spec.count}</p>
                </div>
                <div style={{ width: '36px', height: '36px', background: '#F5F5F5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CINEMATOGRAPHERS & VIDEOGRAPHERS SPOTLIGHT SECTION */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '8px' }}>Cinema Directors</span>
              <h2 className="section-title">Featured Videographers & Cinematographers</h2>
            </div>
            <Link to="/videographers" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              View All Videographers <Film size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredVideographers.map((pro) => (
              <div
                key={pro.id}
                onClick={() => navigate(`/videographers/${pro.id}`)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E5E5E5',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={pro.coverImage || pro.portfolio?.[0]} alt={pro.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.75)',
                    color: '#D4AF37',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Film size={12} color="#D4AF37" /> 4K Cinema
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <img src={pro.profileImage} alt={pro.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{pro.name}</h3>
                      <p style={{ color: '#666', fontSize: '0.85rem' }}>{pro.businessName}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                    {pro.cameras?.slice(0, 2).map((cam, i) => (
                      <span key={i} style={{ background: '#111', color: '#D4AF37', padding: '4px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                        {cam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLOR-GRADING COMPARISON SLIDER */}
      <section style={{ padding: '70px 0', background: '#FAFAFA', borderTop: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="badge-gold" style={{ marginBottom: '8px' }}>Cinema Quality Standard</span>
            <h2 className="section-title">Color Grading & RAW Processing</h2>
            <p className="section-subtitle">Experience the transformative power of elite post-production color science</p>
          </div>

          <ColorGradeSlider
            title="Interactive RAW Footage vs. Final Cinematic Grade"
            rawImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&sat=-60&con=-15"
            gradedImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200"
          />
        </div>
      </section>

      {/* 6. INSTANT SHOOT COST ESTIMATOR WIDGET */}
      <section style={{ padding: '70px 0', background: '#F8F9FA', borderTop: '1px solid #ECECEC' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <QuoteEstimator />
        </div>
      </section>

      {/* 7. DESTINATION HUBS & WORKFLOW EXTENSIONS */}
      <HomeExtensions />
    </div>
  );
};