// =============================================
// 404 NOT FOUND PAGE
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaArrowRight } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=60"
          alt="404"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Gold Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
          className="font-poppins font-black text-[200px] text-gold/10 leading-none select-none"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="-mt-20 relative z-10"
        >
          {/* Logo */}
          <div className="flex justify-center mx-auto mb-6">
            <div className="bg-white rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(212,175,55,0.5)]">
              <img src={logoImg} alt="K. Bhoomi Associates" className="h-14 w-auto object-contain" />
            </div>
          </div>

          <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-white mb-4">
            Page <span className="text-gold font-playfair italic">Not Found</span>
          </h1>

          <p className="text-textGray font-inter text-lg mb-10 leading-relaxed">
            The property you're looking for seems to have moved.
            <br />
            Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold text-base px-8 py-4"
              >
                <FaHome size={16} />
                Back to Home
              </motion.button>
            </Link>
            <Link to="/properties">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-gold text-base px-8 py-4"
              >
                <FaSearch size={14} />
                Browse Properties
              </motion.button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { label: 'Properties', path: '/properties' },
              { label: 'Services', path: '/services' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-textGray hover:text-gold text-sm font-poppins transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
