import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from './componen/preloader';
import Cover from './componen/cover';
import Invitation from './componen/acara';
import Gift from './componen/gift';
import Ucapan from './componen/Ucapan';
import Awalkenal from './componen/awalkenal';
import ProfilPengantin from './componen/profilpengantin';
import Galery from './componen/galeri';



export default function App() {
  const [loading, setLoading] = useState(true);
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);

  // Mengambil nama dari URL, contoh: website.com/?to=Budi
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get('to') || 'Tamu Undangan';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    setOpening(true);
    setTimeout(() => {
      setOpening(false);
      setOpened(true);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {!opened ? (
            <>
              <Cover onOpen={handleOpenInvitation} guestName={guestName} />
              <AnimatePresence>
                {opening && (
                  <motion.div
                    key="opening-transition"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.45 }}
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                    style={{ background: 'radial-gradient(circle, rgba(10,25,47,0.98) 0%, rgba(5,10,18,1) 60%)', zIndex: 9998 }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ color: '#d4af37', fontFamily: '"Playfair Display", serif', fontSize: '2rem', letterSpacing: '3px' }}
                    >
                      Membuka undangan...
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <>
              <Invitation />
              <ProfilPengantin />
              <Awalkenal />
              <Galery />
              <Gift />
              <Ucapan />
              <footer className="text-center py-4" style={{ borderTop: '1px solid #d4af37' }}>
                <p style={{ color: '#d4af37', marginBottom: 0 }}>© 2026 Budi & Sinta</p>
              </footer>
            </>
          )}
        </>
      )}
    </>
  );
}