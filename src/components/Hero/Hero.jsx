// =============================================
// HERO SECTION
// =============================================
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import {
  FaSearch, FaMapMarkerAlt, FaHome, FaBuilding,
  FaArrowRight, FaPlay, FaShieldAlt, FaStar
} from 'react-icons/fa';
import { cities, propertyTypes } from '../../data/properties';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');
  const [city, setCity] = useState('All Cities');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${encodeURIComponent(search)}&type=${encodeURIComponent(type)}&city=${encodeURIComponent(city)}`);
  };




  // GSAP hero animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-bg-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-particle',
        { opacity: 0, y: 50, rotation: -10 },
        {
          opacity: 1, y: 0, rotation: 0,
          duration: 1.5, stagger: 0.15,
          ease: 'power3.out', delay: 0.5,
        }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] } },
  };




  return (
    <section ref={heroRef} className="hero-section min-h-screen relative flex items-center">
      {/* Background Image */}
      <div className="hero-bg-image absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90"
          alt="Luxury Property"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute w-2 h-2 rounded-full bg-gold/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content — Two Column Grid */}
      <div className="container-custom relative z-10 pt-32 pb-24 w-full">
        <div className="hero-two-col">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-left"
          >
            {/* Tag */}
            <motion.div variants={itemVariants} className="section-tag mb-6">
              <div className="w-8 h-px bg-gold" />
              <span>India's Most Trusted Real Estate Partner</span>
              <div className="w-8 h-px bg-gold" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-poppins font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
            >
              Find Your
              <br />
              <span className="text-gold-gradient font-playfair italic">Dream Property</span>
              <br />
              In India
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg max-w-xl mb-10 font-inter leading-relaxed"
            >
              From luxury villas to commercial spaces — discover verified properties
              across 25+ cities with expert guidance and complete legal support.
            </motion.p>

            {/* Stats Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: FaHome, value: '1500+ Properties', label: 'Verified' },
                { icon: FaShieldAlt, value: '100% Safe', label: 'Transactions' },
                { icon: FaMapMarkerAlt, value: '25+ Cities', label: 'Pan India' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 glass-card px-4 py-2.5">
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="text-gold" size={14} />
                  </div>
                  <div>
                    <div className="text-white font-poppins font-semibold text-sm">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/properties">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold text-base px-8 py-4 shadow-gold-lg"
                >
                  Explore Properties
                  <FaArrowRight size={14} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-outline-gold text-base px-8 py-4"
                >
                  <FaPlay size={12} />
                  Free Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN — Premium Image Mosaic ── */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="hero-right"
          >
            {/* Glow blob */}
            <div className="hero-glow-blob" />

            {/* Image Mosaic Grid */}
            <div className="hero-mosaic">
              {/* Large top-left image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="hero-mosaic-main"
              >
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=85"
                  alt="Luxury Villa"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="hero-mosaic-img"
                />
                <div className="hero-mosaic-overlay">
                  <span className="hero-mosaic-tag">Luxury Villa</span>
                  <span className="hero-mosaic-price">₹4.5 Cr</span>
                </div>
              </motion.div>

              {/* Right column — two stacked images */}
              <div className="hero-mosaic-stack">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="hero-mosaic-sm"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&q=85"

                    alt="Penthouse"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="hero-mosaic-img"
                  />
                  <div className="hero-mosaic-overlay">
                    <span className="hero-mosaic-tag">Penthouse</span>
                    <span className="hero-mosaic-price">₹3.8 Cr</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="hero-mosaic-sm"
                >
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=85"
                    alt="Commercial"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="hero-mosaic-img"
                  />
                  <div className="hero-mosaic-overlay">
                    <span className="hero-mosaic-tag">Commercial</span>
                    <span className="hero-mosaic-price">₹9.5 Cr</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Badge — top right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-float-stat hero-float-stat--tl"
            >
              <FaStar size={14} className="text-gold mb-1" />
              <span className="hero-float-num">4.9★</span>
              <span className="hero-float-lbl">Rating</span>
            </motion.div>

            {/* Floating Sold Badge — bottom left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hero-float-stat hero-float-stat--br"
            >
              <FaShieldAlt size={14} className="text-gold mb-1" />
              <span className="hero-float-num">100%</span>
              <span className="hero-float-lbl">Verified</span>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Search Bar — Full Width Below ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="search-bar mt-14"
        >
          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 items-end">
            {/* Search Input */}
            <div className="flex-1 w-full">
              <label className="block text-xs font-poppins font-semibold text-textGray uppercase tracking-wider mb-2">
                Location / Property
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold z-10 pointer-events-none" size={14} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by city, location, property..."
                  className="input-field !pl-10 py-3.5 text-sm"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1 w-full md:max-w-[160px]">
              <label className="block text-xs font-poppins font-semibold text-textGray uppercase tracking-wider mb-2">
                Type
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gold z-10 pointer-events-none" size={14} />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="select-field !pl-10 py-3.5 text-sm"
                >
                  {propertyTypes.map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* City */}
            <div className="flex-1 w-full md:max-w-[160px]">
              <label className="block text-xs font-poppins font-semibold text-textGray uppercase tracking-wider mb-2">
                City
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gold z-10 pointer-events-none" size={14} />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="select-field !pl-10 py-3.5 text-sm"
                >
                  {cities.map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-gold py-3.5 px-8 text-sm w-full justify-center"
              >
                <FaSearch size={14} />
                Search
              </motion.button>
            </div>
          </form>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-borderColor">
            <span className="text-xs text-textGray font-poppins">Popular:</span>
            {['Apartments', 'Villas', 'Commercial', 'Plots', 'Luxury Homes'].map(cat => (
              <Link
                key={cat}
                to={`/properties?type=${cat}`}
                className="text-xs px-3 py-1 rounded-full border border-borderColor text-textGray hover:border-gold hover:text-gold transition-all duration-300"
              >
                {cat}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-poppins uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
