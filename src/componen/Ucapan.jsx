import React, { useState } from 'react';
import { motion } from 'framer-motion';

const gold = '#d4af37';
const soft = '#f7efe6';
const navy = '#0a192f';

const initialMessages = [
  {
    name: 'Lia',
    attendance: 'Akan Hadir',
    message: 'Selamat menempuh langkah baru, semoga selalu bahagia dan diberkahi.',
  },
  {
    name: 'Rizki',
    attendance: 'Semoga Bisa Hadir',
    message: 'Doa terbaik untuk kalian berdua, semoga hari istimewa penuh kebahagiaan.',
  },
];

const Ucapan = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState('Akan Hadir');
  const [messages, setMessages] = useState(initialMessages);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setMessages((prev) => [
      {
        name: name.trim(),
        attendance,
        message: message.trim(),
      },
      ...prev,
    ]);

    setName('');
    setMessage('');
    setAttendance('Akan Hadir');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="ucapan-section section-parallax-surface py-5"
    >
      <div className="container">
        <div className="text-center mb-4">
        <p className="section-title">Ucapan & Konfirmasi</p>
        <h3 className="ucapan-title">Beri doa, pesan, dan kabar kehadiran Anda.</h3>
        <p className="ucapan-subtitle">Setiap ucapan dan kehadiran Anda akan muncul di halaman ini sebagai bentuk kebahagiaan bersama.</p>
      </div>

      <div className="row g-4 align-items-stretch">
        <div className="col-lg-5">
          <motion.article
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="ucapan-card text-start"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(10,25,47,0.88) 100%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p style={{ color: gold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '6px' }}>
              Form Ucapan
            </p>
            <h4 className="ucapan-card-title">Tinggalkan pesan untuk kami</h4>
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="mb-3">
                <label className="form-label text-light">Nama</label>
                <input
                  type="text"
                  className="form-control form-control-dark"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Ucapan</label>
                <textarea
                  className="form-control form-control-dark"
                  rows="4"
                  placeholder="Tulis doa atau pesan terbaik Anda"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Konfirmasi Kehadiran</label>
                <select
                  className="form-select form-select-dark"
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                >
                  <option>Akan Hadir</option>
                  <option>Semoga Bisa Hadir</option>
                  <option>Maaf Tidak Bisa Hadir</option>
                </select>
              </div>

              <button type="submit" className="btn btn-gold w-100">Kirim Ucapan</button>
            </form>
          </motion.article>
        </div>

        <div className="col-lg-7">
          <motion.article
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="ucapan-card"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(10,25,47,0.88) 100%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p style={{ color: gold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '6px' }}>
              Daftar Ucapan
            </p>
            <h4 className="ucapan-card-title">Pesan dari tamu undangan</h4>

            <div className="ucapan-list mt-3">
              {messages.map((item, index) => (
                <article key={`${item.name}-${index}`} className="ucapan-item">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                    <div>
                      <h5 className="ucapan-name mb-1">{item.name}</h5>
                      <span className="ucapan-badge">{item.attendance}</span>
                    </div>
                    <span className="ucapan-chip">#{index + 1}</span>
                  </div>
                  <p className="ucapan-text mb-0">“{item.message}”</p>
                </article>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default Ucapan;
