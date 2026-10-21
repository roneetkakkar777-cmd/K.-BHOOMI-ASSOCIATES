// =============================================
// LOADER COMPONENT
// =============================================
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2800);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loader-wrapper"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="text-center"
      >
        {/* Logo Image */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="bg-white rounded-2xl px-6 py-4 shadow-[0_0_40px_rgba(212,175,55,0.5)]"
          >
            <img src={logoImg} alt="K. Bhoomi Associates" className="h-16 w-auto object-contain" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="loader-logo-text">K.-BHOOMI-ASSOCIATES</div>
          <div className="loader-logo-sub">Building Trust, Delivering Dreams</div>
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8 }}
        className="loader-bar"
      >
        <motion.div
          className="loader-bar-fill"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Dots */}
      <div className="loader-dots">
        {[0, 1, 2].map((i) => (
          <div key={i} className="loader-dot" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      {/* Progress number */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-3 text-textGray text-sm font-inter"
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default Loader;
