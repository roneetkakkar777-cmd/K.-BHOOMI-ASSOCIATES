// =============================================
// WHY CHOOSE US SECTION
// =============================================
import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaHandshake, FaFileContract,
  FaChartLine, FaHome, FaKey
} from 'react-icons/fa';
import { whyChooseUs } from '../../data/services';

const iconMap = {
  FaShieldAlt, FaHandshake, FaFileContract,
  FaChartLine, FaHome, FaKey
};

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <section className="section-padding bg-white dark:bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-tag justify-center">
            <div className="w-8 h-px bg-gold" />
            <span>Our Advantages</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-primary dark:text-white mt-2">
            Why Choose <span className="text-gold-gradient font-playfair italic">K.-BHOOMI?</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-textGray mt-4 font-inter">
            We go beyond just selling properties. Our mission is to build
            lasting trust through transparency, expertise, and exceptional service.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-2xl border border-borderColor dark:border-gray-700 bg-white dark:bg-secondary hover:border-gold hover:shadow-card-hover transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Number */}
                <div className="absolute top-4 right-6 font-poppins font-black text-5xl text-borderColor dark:text-gray-700 group-hover:text-gold/20 transition-colors duration-500 leading-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative w-16 h-16 bg-gold/10 group-hover:bg-gold rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm">
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      className="text-gold group-hover:text-primary transition-colors duration-300"
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-3 relative group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-textGray text-sm font-inter leading-relaxed relative">
                  {item.description}
                </p>

                {/* Bottom Gold Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gold-gradient w-0 group-hover:w-full transition-all duration-700 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
