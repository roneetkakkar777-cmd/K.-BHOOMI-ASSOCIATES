// =============================================
// PROPERTY CATEGORIES SECTION
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { PROPERTY_CATEGORIES } from '../../utils/constants';

const PropertySearch = () => {
  return (
    <section className="section-padding bg-white dark:bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-tag justify-center">
            <div className="w-8 h-px bg-gold" />
            <span>Browse by Type</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-primary dark:text-white mt-2">
            Property <span className="text-gold-gradient font-playfair italic">Categories</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-textGray mt-4 font-inter">
            Find exactly what you're looking for — from cozy apartments to grand luxury estates.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROPERTY_CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/properties?category=${cat.name}`}
                className="category-card block relative overflow-hidden rounded-2xl aspect-[3/4] group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-poppins font-bold text-white text-base mb-1 group-hover:text-gold transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-inter">{cat.count}+ listings</span>
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="w-7 h-7 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    >
                      <FaArrowRight size={10} className="text-primary" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-2xl z-20 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
