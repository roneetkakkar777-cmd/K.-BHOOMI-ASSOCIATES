// =============================================
// SERVICES PAGE
// =============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome, FaBuilding, FaChartLine, FaFileContract,
  FaHandshake, FaSearch, FaKey, FaShieldAlt, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import { services } from '../data/services';
import CTA from '../components/CTA/CTA';

const iconMap = {
  FaHome, FaBuilding, FaChartLine, FaFileContract,
  FaHandshake, FaSearch, FaKey, FaShieldAlt
};

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-primary pt-20">
      {/* Hero */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=60" alt="Services" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" /><span>What We Offer</span>
            </div>
            <h1 className="heading-xl text-white mt-2">
              Our <span className="text-gold-gradient font-playfair italic">Services</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl font-inter">
              Comprehensive real estate solutions tailored for buyers, sellers, investors, and NRIs.
              From search to settlement — we handle everything.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setActiveService(activeService?.id === service.id ? null : service)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${
                    activeService?.id === service.id
                      ? 'border-gold bg-gold/5 shadow-gold'
                      : 'border-borderColor dark:border-gray-700 bg-white dark:bg-secondary hover:border-gold/50'
                  }`}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ background: `${service.color}15` }}
                  >
                    {IconComponent && <IconComponent size={24} style={{ color: service.color }} />}
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-2">{service.title}</h3>
                  <p className="text-textGray text-sm font-inter">{service.shortDesc}</p>
                  <div className="mt-4 flex items-center gap-2 text-gold font-poppins font-semibold text-sm">
                    Learn more <FaArrowRight size={10} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Service Detail Panel */}
          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-lightSection dark:bg-secondary rounded-3xl p-8 border border-borderColor dark:border-gray-700">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="heading-md text-primary dark:text-white mb-4">{activeService.title}</h2>
                      <p className="text-textGray font-inter mb-6 leading-relaxed">{activeService.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <FaCheckCircle className="text-gold flex-shrink-0" size={14} />
                            <span className="text-primary dark:text-white text-sm font-inter">{f}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/contact" className="btn-gold mt-6 inline-flex">
                        Get This Service <FaArrowRight size={14} />
                      </Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64 lg:h-80">
                      <img src={activeService.image} alt={activeService.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Services;
