// =============================================
// NAVBAR COMPONENT
// =============================================
import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars, FaTimes, FaPhoneAlt,
  FaHeart, FaSearch, FaEnvelope
} from 'react-icons/fa';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants';
import { WishlistContext } from '../../contexts/WishlistContext';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { wishlist } = useContext(WishlistContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        className="hidden lg:block bg-primary text-textGray text-xs py-2"
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaPhoneAlt size={10} className="text-gold" />
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
              <FaEnvelope size={10} className="text-gold" />
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>{CONTACT_INFO.workingHours}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <nav
        className={`navbar fixed w-full z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'navbar-scrolled bg-primary/95 backdrop-blur-xl shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ top: isScrolled || !isHomePage ? '0' : '36px' }}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-xl px-3 py-1.5 shadow-lg"
            >
              <img
                src={logoImg}
                alt="K. Bhoomi Associates"
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 font-poppins font-medium text-sm transition-colors duration-300 rounded-lg group ${
                    isActive ? 'text-gold' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                        isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all duration-300"
            >
              <FaSearch size={14} />
            </button>

            {/* Wishlist */}
            <Link to="/properties" className="relative w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold transition-all duration-300">
              <FaHeart size={14} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-primary text-xs font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* CTA Button */}
            <Link to="/contact" className="btn-gold text-sm py-2.5 px-5">
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-white border border-white/20 rounded-lg hover:border-gold hover:text-gold transition-all"
            >
              {isMobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-white/10 bg-primary/95 backdrop-blur-xl"
            >
              <div className="container-custom py-4">
                <form onSubmit={handleSearchSubmit} className="flex gap-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search properties, locations, types..."
                    className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 rounded-xl focus:outline-none focus:border-gold transition-all"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="btn-gold py-3"
                  >
                    Search
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-primary z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link to="/" className="flex items-center">
                  <div className="bg-white rounded-xl px-3 py-1.5 shadow-md">
                    <img src={logoImg} alt="K. Bhoomi Associates" className="h-9 w-auto object-contain" />
                  </div>
                </Link>
                <button onClick={() => setIsMobileOpen(false)} className="text-white/70 hover:text-gold">
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="p-6 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-xl font-poppins font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-gold text-primary'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="px-6 pb-6 mt-4 border-t border-white/10 pt-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-textGray hover:text-gold mb-3">
                  <FaPhoneAlt className="text-gold" />
                  <span className="text-sm">{CONTACT_INFO.phone}</span>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-textGray hover:text-gold mb-6">
                  <FaEnvelope className="text-gold" />
                  <span className="text-sm">{CONTACT_INFO.email}</span>
                </a>
                <Link to="/contact" className="btn-gold w-full justify-center">
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
