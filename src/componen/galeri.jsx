import React from 'react';
import { motion } from 'framer-motion';

const Galery = () => {
  // Array contoh foto (ganti dengan link gambar asli Anda)
  const photos = [1, 2, 3, 4, 5, 6]; 

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ color: '#d4af37', fontFamily: "'Playfair Display', serif" }}>Galeri Foto</h2>
      <div className="row g-3">
        {photos.map((item, i) => (
          <motion.div 
            key={i} 
            className="col-6 col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ 
              aspectRatio: '1/1', 
              background: '#1b2a4a', 
              borderRadius: '15px',
              overflow: 'hidden',
              border: '2px solid rgba(212, 175, 55, 0.2)'
            }}>
              {/* Masukkan <img src={...} style={{width:'100%', height:'100%', objectFit:'cover'}} /> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Galery;