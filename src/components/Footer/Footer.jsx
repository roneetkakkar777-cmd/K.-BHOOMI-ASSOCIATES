// =============================================
// FOOTER COMPONENT
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin,
  FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaArrowRight, FaHeart
} from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS, COMPANY_NAME } from '../../utils/constants';
import logoImg from '../../assets/logo.png';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const propertyLinks = [
    { label: 'Apartments', path: '/properties?type=Apartment' },
    { label: 'Luxury Villas', path: '/properties?type=Villa' },
    { label: 'Commercial', path: '/properties?type=Commercial' },
    { label: 'Plots', path: '/properties?type=Plot' },
    { label: 'Luxury Homes', path: '/properties?category=Luxury Homes' },
  ];

  const serviceLinks = [
    { label: 'Residential Sales', path: '/services' },
    { label: 'Property Investment', path: '/services' },
    { label: 'Legal Assistance', path: '/services' },
    { label: 'Home Loans', path: '/services' },
    { label: 'NRI Services', path: '/services' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Gold Top Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white rounded-xl px-4 py-2 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                <img
                  src={logoImg}
                  alt="K. Bhoomi Associates"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-textGray text-sm font-inter leading-relaxed mb-6">
              Building Trust, Delivering Dreams. India's most trusted real estate
              partner since 2012 — with 1500+ properties sold across 25+ cities.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: FaFacebook, href: SOCIAL_LINKS.facebook, color: '#1877F2' },
                { icon: FaInstagram, href: SOCIAL_LINKS.instagram, color: '#E4405F' },
                { icon: FaTwitter, href: SOCIAL_LINKS.twitter, color: '#1DA1F2' },
                { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, color: '#0A66C2' },
                { icon: FaYoutube, href: SOCIAL_LINKS.youtube, color: '#FF0000' },
                { icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, color: '#25D366' },
              ].map(({ icon: Icon, href, color }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                  style={{ '--hover-color': color }}
                >
                  <Icon size={16} className="text-textGray hover:text-white" />
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-textGray hover:text-gold transition-colors text-sm">
                <FaPhoneAlt size={12} className="text-gold flex-shrink-0" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-textGray hover:text-gold transition-colors text-sm">
                <FaEnvelope size={12} className="text-gold flex-shrink-0" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-textGray text-sm">
                <FaMapMarkerAlt size={12} className="text-gold flex-shrink-0 mt-1" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-white text-base mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="footer-link flex items-center gap-2 group"
                  >
                    <FaArrowRight size={10} className="text-gold/50 group-hover:text-gold transition-colors group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-poppins font-bold text-white text-base mb-6 relative inline-block">
              Properties
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <ul className="space-y-3">
              {propertyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link flex items-center gap-2 group">
                    <FaArrowRight size={10} className="text-gold/50 group-hover:text-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-poppins font-bold text-white text-base mt-8 mb-4 relative inline-block">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <ul className="space-y-3">
              {serviceLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer-link flex items-center gap-2">
                    <FaArrowRight size={10} className="text-gold/50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-poppins font-bold text-white text-base mb-6 relative inline-block">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full" />
            </h4>
            <p className="text-textGray text-sm font-inter mb-6 leading-relaxed">
              Subscribe to get the latest property listings, market insights,
              and exclusive deals straight to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                <p className="text-green-400 text-sm font-poppins font-semibold">
                  🎉 Successfully subscribed!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-gold transition-all text-sm"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-gold justify-center"
                >
                  Subscribe
                  <FaArrowRight size={12} />
                </motion.button>
              </form>
            )}

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="font-poppins font-semibold text-white text-xs mb-2">WORKING HOURS</div>
              <div className="text-textGray text-xs font-inter">{CONTACT_INFO.workingHours}</div>
              <div className="text-textGray text-xs font-inter">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textGray text-sm font-inter">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="text-textGray text-sm font-inter flex items-center gap-2">
            Made with <FaHeart className="text-red-500" size={12} /> for Indian Real Estate
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-textGray hover:text-gold text-xs font-inter transition-colors">Privacy Policy</Link>
            <Link to="/about" className="text-textGray hover:text-gold text-xs font-inter transition-colors">Terms of Service</Link>
            <Link to="/about" className="text-textGray hover:text-gold text-xs font-inter transition-colors">RERA Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
