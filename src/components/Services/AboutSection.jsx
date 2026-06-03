// =============================================
// ABOUT SECTION (Home Page)
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaAward } from 'react-icons/fa';
import { COMPANY_DESCRIPTION } from '../../utils/constants';

const AboutSection = () => {
  const features = [
    "RERA Registered & Licensed Broker",
    "Expert Legal & Documentation Team",
    "Pan-India Network of 25+ Cities",
    "Dedicated NRI Property Services",
    "Transparent Zero-Hidden-Fee Policy",
    "12+ Years of Market Excellence",
  ];

  return (
    <section className="section-padding bg-white dark:bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="About K.-BHOOMI-ASSOCIATES"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Floating Card - Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-8 -right-8 bg-gold p-6 rounded-2xl shadow-gold-lg"
            >
              <div className="font-poppins font-black text-5xl text-primary">12+</div>
              <div className="font-poppins font-semibold text-primary/80 text-sm mt-1">Years of</div>
              <div className="font-poppins font-bold text-primary text-base">Excellence</div>
            </motion.div>

            {/* Floating Card - Award */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -top-6 -left-6 glass-card-dark p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                <FaAward className="text-primary" size={22} />
              </div>
              <div>
                <div className="font-poppins font-bold text-white text-sm">Award Winning</div>
                <div className="text-textGray text-xs">Real Estate Agency</div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-12 -left-12 w-64 h-64 rounded-full border-2 border-gold/20" />
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-gold/5" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" />
              <span>Our Story</span>
            </div>
            <h2 className="heading-lg text-primary dark:text-white mt-2 mb-4">
              India's Most <span className="text-gold-gradient font-playfair italic">Trusted</span>
              <br />
              Real Estate Partner
            </h2>
            <div className="gold-divider mb-6" />

            <p className="text-textGray font-inter leading-relaxed mb-4">
              {COMPANY_DESCRIPTION}
            </p>
            <p className="text-textGray font-inter leading-relaxed mb-8">
              With a passionate team of 50+ professionals, we've facilitated over
              ₹2,500 Crore in property transactions — making dreams come true, one
              property at a time.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  <span className="text-primary dark:text-textLight text-sm font-inter">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.04, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gold"
              >
                Learn More About Us
                <FaArrowRight size={14} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
