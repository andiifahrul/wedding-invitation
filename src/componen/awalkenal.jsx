import React from 'react';
import { motion } from 'framer-motion';

const gold = '#d4af37';

const AwalKenalan = () => {
  const stages = [
    {
      id: "01",
      title: "Pertemuan Pertama",
      desc: "Awal mula takdir mempertemukan kami di suatu tempat yang tak terlupakan."
    },
    {
      id: "02",
      title: "Mulai Serius",
      desc: "Menyadari kesamaan visi, kami memutuskan untuk berkomitmen melangkah lebih jauh."
    },
    {
      id: "03",
      title: "Hari Bahagia",
      desc: "Tibalah waktunya kami mengikat janji suci untuk menempuh hidup bersama."
    }
  ];

  return (
    <div className="container py-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h2 style={{ color: gold, fontFamily: "'Playfair Display', serif" }}>Kisah Kami</h2>
        <div style={{ width: '50px', height: '2px', background: gold, margin: '10px auto' }}></div>
      </motion.div>

      <div className="row g-4 justify-content-center">
        {stages.map((stage, index) => (
          <motion.div 
            key={index}
            className="col-12 col-md-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div style={{
              background: 'rgba(10, 25, 47, 0.7)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderRadius: '20px',
              border: `1px solid ${gold}40`,
              textAlign: 'center',
              color: '#fff',
              height: '100%'
            }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: `${gold}20`, 
                color: gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                {stage.id}
              </div>
              <h5 style={{ color: gold, marginBottom: '15px' }}>{stage.title}</h5>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.6' }}>{stage.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwalKenalan;