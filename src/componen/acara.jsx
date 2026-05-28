import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import preweddingPhoto from '../assets/gambar1.jpg'; 

const gold = '#d4af37';

const Invitation = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('December 20, 2026 08:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="shadow-lg overflow-hidden"
            style={{ 
              borderRadius: '30px', 
              background: '#0a192f', 
              border: `1px solid ${gold}`,
              width: '100%'
            }}
          >
            {/* --- AREA FOTO, JUDUL, & COUNTDOWN (Dibuat Rapat ke Bawah) --- */}
            <div style={{
              minHeight: '400px', 
              padding: '20px 20px 20px 20px',
              backgroundImage: `linear-gradient(to bottom, rgba(10,25,47,0.2) 0%, #0a192f 100%), url(${preweddingPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              textAlign: 'center',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end' // Mengubah ke flex-end agar konten menempel ke bawah (ke garis)
            }}>
              
              {/* Grup Judul dan Subtitle */}
              <div style={{ marginBottom: '15px' }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: '0' }}>Budi & Sinta</h1>
                <p style={{ fontStyle: 'italic', color: gold, margin: '0' }}>Menanti Hari Bahagia</p>
              </div>
              
              {/* Countdown Timer - Dibuat rapat ke bawah */}
              <div className="d-flex justify-content-center gap-2">
                {[ 
                  {label: 'Hari', val: timeLeft.days}, 
                  {label: 'Jam', val: timeLeft.hours}, 
                  {label: 'Menit', val: timeLeft.minutes},
                  {label: 'Detik', val: timeLeft.seconds} 
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)', padding: '8px 5px', borderRadius: '10px', minWidth: '60px' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: gold }}>{item.val}</div>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Garis Emas (Divider) */}
            {/* Garis Emas (Divider) - 50% lebar dan di tengah */}
            <hr style={{ 
             width: '50%', 
              margin: '0 auto', 
              border: '0', 
              borderTop: `1px solid ${gold}`, 
              opacity: 1 
              }} />
            {/* --- AREA DETAIL (Akad & Resepsi) --- */}
            <div className="p-4 text-center" style={{ color: '#fff' }}>
              <div className="mb-4">
                <h6 style={{ color: gold, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Akad Nikah</h6>
                <p className="mb-0">Sabtu, 20 Desember 2026</p>
                <small style={{ opacity: 0.7 }}>08.00 WIB - Selesai</small>
              </div>
              
              <div>
                <h6 style={{ color: gold, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Resepsi</h6>
                <p className="mb-0">Sabtu, 20 Desember 2026</p>
                <small style={{ opacity: 0.7 }}>11.00 - 14.00 WIB</small>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;