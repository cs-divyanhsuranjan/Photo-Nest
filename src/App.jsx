import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import EditProfile from './pages/EditProfile';
import { Photographers } from './pages/Photographers';
import { PhotographerDetails } from './pages/PhotographerDetails';
import { Videographers } from './pages/Videographers';
import { VideographerDetails } from './pages/VideographerDetails';
import { Specializations } from './pages/Specializations';
import { QuoteEstimator } from './pages/QuoteEstimator';
// import EquipmentManager from './pages/EquipmentManager';
// import VerificationStandard from './pages/VerificationStandard';
// import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFF' }}>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
          {/* <Route path="/equipment-manager" element={<EquipmentManager />} /> */}
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/photographers/:id" element={<PhotographerDetails />} />
          <Route path="/videographers" element={<Videographers />} />
          <Route path="/videographers/:id" element={<VideographerDetails />} />
          <Route path="/specializations" element={<Specializations />} />
          <Route path="/quote-estimator" element={<QuoteEstimator />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}