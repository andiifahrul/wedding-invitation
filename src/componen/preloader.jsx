import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="d-flex flex-column justify-content-center align-items-center vh-100 position-fixed w-100"
      style={{ background: 'radial-gradient(circle at top, #17253a 0%, #090f18 45%, #04070b 100%)', zIndex: 9999 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.div
        className="position-absolute"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0], opacity: [0.18, 0.35, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.35)', filter: 'blur(1px)' }}
      />
      <motion.div
        className="position-absolute"
        animate={{ y: [0, 14, 0], x: [0, 8, 0], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{ width: 240, height: 240, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', filter: 'blur(2px)' }}
      />

      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        <motion.h1
          animate={{ scale: [1, 1.04, 1], textShadow: ['0 0 0 rgba(212,175,55,0)', '0 0 18px rgba(212,175,55,0.35)', '0 0 0 rgba(212,175,55,0)'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '4.5rem',
            color: '#d4af37',
            letterSpacing: '0.6rem',
            marginBottom: '0',
          }}
        >
          f & ?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.55, 0.9, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white mt-3"
          style={{ letterSpacing: '0.35rem', fontSize: '0.95rem', textTransform: 'uppercase' }}
        >
          Undangan Pernikahan
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;