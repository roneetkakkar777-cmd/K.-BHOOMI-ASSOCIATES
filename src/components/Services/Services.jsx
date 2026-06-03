// =============================================
// SERVICES SECTION (Home preview - redirect to page)
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHome, FaBuilding, FaChartLine, FaHandshake, FaKey, FaShieldAlt } from 'react-icons/fa';
import { services } from '../../data/services';

const iconMap = { FaHome, FaBuilding, FaChartLine, FaHandshake, FaKey, FaShieldAlt };

const ServicesSection = () => {
  return (
    <section className="section-padding bg-lightSection dark:bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="section-tag"><div className="w-8 h-px bg-gold" /><span>What We Do</span></div>
            <h2 className="heading-lg text-primary dark:text-white">Our <span className="text-gold-gradient font-playfair italic">Services</span></h2>
            <div className="gold-divider mt-3" />
          </motion.div>
          <Link to="/services" className="flex items-center gap-2 text-gold font-poppins font-semibold hover:gap-3 transition-all">
            All Services <FaArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-primary rounded-2xl p-6 shadow-card border border-borderColor dark:border-gray-700 hover:border-gold transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${service.color}15` }}>
                  {IconComponent && <IconComponent size={22} style={{ color: service.color }} />}
                </div>
                <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-2">{service.title}</h3>
                <p className="text-textGray text-sm font-inter">{service.shortDesc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
