import React, { useState } from 'react';
import { motion } from 'framer-motion';
import praweddingPhoto from '../assets/gambar1.jpg';

const Cover = ({ onOpen, guestName }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => onOpen(), 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="cover-shell"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.72)), url(${praweddingPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        aria-hidden="true"
        className="ambient-orb ambient-orb-one"
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="ambient-orb ambient-orb-two"
        animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="d-flex justify-content-center mb-4"
        >
          <motion.div
            animate={{ y: isOpening ? -6 : 0, scale: isOpening ? 1.03 : 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="cover-card"
          >
            <div className="cover-card-glow" />
            <div className="cover-inner">
              <div style={{ marginTop: '4px' }}>
                <span className="cover-tag">The Wedding of</span>
                <span className="cover-name">Fahrul & Sinta</span>
              </div>
              <div className="cover-guest-box">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <div className="cover-line" />
                  <div className="cover-line-soft" />
                </div>
                <span className="cover-guest-label">Kepada Yth:</span>
                <span className="cover-guest-name">{guestName ? guestName.replace(/-/g, ' ') : 'Tamu Undangan'}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                  <div className="cover-line-soft" />
                  <div className="cover-line" />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 18px rgba(212,175,55,0.45)' }}
                whileTap={{ scale: 0.97 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleOpen}
                className="cover-button"
              >
                Buka Undangan
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Cover;