import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const gold = '#d4af37';
const navy = '#0a192f';
const soft = '#f7efe6';

const Gift = () => {
  const [showBarcode, setShowBarcode] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="gift-section section-parallax-surface py-5"
    >
      <div className="container text-center">
        <div className="text-center mb-4">
        <p style={{ color: gold, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '2rem', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          Gift & Hadiah
        </p>
        <h3 style={{ color: '#fff', fontFamily: '"Playfair Display", serif', fontSize: '2rem', marginBottom: '10px' }}>
          Sebuah doa dan dukungan dari Anda sangat berarti bagi kami.
        </h3>
      </div>

      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="gift-card"
      >
       
        <p style={{ color: gold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '1.1rem', marginBottom: '8px', textAlign: 'center' }}>
          Transfer / QRIS
        </p>
        <p style={{ color: soft, lineHeight: 1.7, marginBottom: '18px', textAlign: 'center' }}>
          Kami sangat menghargai setiap bentuk doa dan dukungan yang Anda berikan. Silakan gunakan tombol berikut jika Anda ingin melihat kode hadiah digital kami.
        </p>
       
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: '0 10px 24px rgba(212,175,55,0.25)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowBarcode((prev) => !prev)}
          className="gift-button"
        >
          {showBarcode ? 'Sembunyikan Barcode' : 'Lihat Barcode'}
        </motion.button>

        <AnimatePresence>
          {showBarcode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="gift-barcode-box"
            >
              <p style={{ color: gold, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '8px' }}>
                Barcode Hadiah
              </p>
              <div className="gift-barcode">
                [ Barcode QR ]
              </div>
              <p style={{ color: soft, marginTop: '10px', marginBottom: 0, fontSize: '0.95rem' }}>
                BCA 1234567890 a.n. Fahrul & Sinta
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
      </div>
    </motion.section>
  );
};

export default Gift;
