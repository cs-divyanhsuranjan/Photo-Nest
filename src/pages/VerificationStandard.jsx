// import React from 'react';
// import { ShieldCheck, Award, FileCheck, Cpu, CheckCircle2 } from 'lucide-react';

// export default function VerificationStandard() {
//   const steps = [
//     {
//       icon: <FileCheck size={28} />,
//       title: '1. Identity & Compliance Audit',
//       desc: 'Government registration, identification verification, and business legitimacy checks to prevent platform fraud.'
//     },
//     {
//       icon: <Cpu size={28} />,
//       title: '2. Gear Ownership Audit',
//       desc: 'Serial number checks and capability audits for cinema-grade camera bodies, prime lenses, and audio rig chains.'
//     },
//     {
//       icon: <Award size={28} />,
//       title: '3. Color & Production Review',
//       desc: 'Quality evaluation of raw camera files versus final color-graded deliverables by our industry review panel.'
//     }
//   ];

//   return (
//     <div style={{ background: '#0A0A0A', color: '#FFF', minHeight: '100vh', padding: '80px 24px' }}>
//       <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//           <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
//             Quality Assurance
//           </span>
//           <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 800, margin: '12px 0 16px' }}>
//             The PhotoNest <span style={{ color: '#D4AF37' }}>Verification Standard</span>
//           </h1>
//           <p style={{ color: '#999', maxWidth: '650px', margin: '0 auto', lineHeight: '1.7', fontSize: '1rem' }}>
//             We maintain rigorous quality criteria so clients can hire creators with complete certainty regarding gear specs, identity, and artistic execution.
//           </p>
//         </div>

//         {/* 3 Step Cards */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
//           {steps.map((step, idx) => (
//             <div key={idx} style={{
//               background: '#121212',
//               border: '1px solid #222',
//               borderRadius: '16px',
//               padding: '36px 28px',
//               position: 'relative'
//             }}>
//               <div style={{ color: '#D4AF37', marginBottom: '20px' }}>{step.icon}</div>
//               <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
//               <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Criteria Summary Checklist */}
//         <div style={{
//           background: '#121212',
//           border: '1px solid #262626',
//           borderRadius: '20px',
//           padding: '40px',
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '24px'
//         }}>
//           <div>
//             <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: '#D4AF37', marginBottom: '10px' }}>
//               Minimum Technical Baseline
//             </h3>
//             <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6' }}>
//               To receive a verified badge, creators must maintain equipment and portfolio criteria.
//             </p>
//           </div>

//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
//             {[
//               '4K 10-bit Color Depth Recording Capability',
//               'Dual-Card Backup Systems for Live Events',
//               'Minimum 3+ Years of Professional Portfolio Work',
//               'Clean Dispute & Timely Delivery History'
//             ].map((text, i) => (
//               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#DDD', fontSize: '0.9rem', fontWeight: 600 }}>
//                 <CheckCircle2 size={18} color="#D4AF37" /> {text}
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }