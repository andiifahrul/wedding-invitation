import React from 'react';
import { motion } from 'framer-motion';

const gold = '#d4af37';

const ProfilPengantin = () => {
  const pengantin = [
    { nama: "Budi", desk: "Putra dari Bpk. ... & Ibu ..." },
    { nama: "Sinta", desk: "Putri dari Bpk. ... & Ibu ..." }
  ];

  return (
    <div className="container py-5">
      {/* Judul Bagian */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h2 style={{ color: gold, fontFamily: "'Playfair Display', serif" }}>Mempelai</h2>
        <div style={{ width: '50px', height: '2px', background: gold, margin: '10px auto' }}></div>
        <p style={{ color: '#fff', opacity: 0.7 }}>Perkenalkan kedua calon mempelai</p>
      </motion.div>

      {/* Grid Kartu Pengantin */}
      <div className="row justify-content-center">
        {pengantin.map((item, index) => (
          <div key={index} className="col-md-5 mb-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              style={{
                background: 'rgba(10, 25, 47, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '20px',
                border: `1px solid ${gold}40`,
                textAlign: 'center',
                color: '#fff'
              }}
            >
              {/* Tempat Foto */}
              <div style={{ 
                width: '120px', 
                height: '120px', 
                background: `${gold}20`, 
                borderRadius: '50%', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${gold}`
              }}>
                <span style={{ color: gold, fontSize: '0.8rem' }}>Foto</span>
              </div>
              
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: gold }}>{item.nama}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.desk}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilPengantin;