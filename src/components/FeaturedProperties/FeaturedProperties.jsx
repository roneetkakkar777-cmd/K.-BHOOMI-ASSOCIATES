// =============================================
// FEATURED PROPERTIES - SWIPER SECTION
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowRight, FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import PropertyCard from '../PropertyCard/PropertyCard';
import { featuredProperties } from '../../data/properties';

const FeaturedProperties = () => {

  return (
    <section className="section-padding bg-lightSection dark:bg-secondary overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" />
              <span>Hand-Picked Listings</span>
            </div>
            <h2 className="heading-lg text-primary dark:text-white">
              Featured <span className="text-gold-gradient font-playfair italic">Properties</span>
            </h2>
            <div className="gold-divider mt-4" />
            <p className="text-textGray mt-4 max-w-lg font-inter">
              Explore our curated selection of premium properties — each verified,
              legally clear, and ready for your investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            {/* Custom Nav Buttons */}
            <button
              className="featured-prev w-12 h-12 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Previous property"
            >
              <FaArrowLeft size={16} />
            </button>
            <button
              className="featured-next w-12 h-12 rounded-full bg-gold text-primary hover:bg-gold-light transition-all duration-300 flex items-center justify-center shadow-gold cursor-pointer"
              aria-label="Next property"
            >
              <FaArrowRight size={16} />
            </button>
            <Link
              to="/properties"
              className="flex items-center gap-2 text-gold font-poppins font-semibold hover:gap-3 transition-all duration-300 ml-4"
            >
              View All <FaChevronRight size={12} />
            </Link>
          </motion.div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: '.featured-prev',
              nextEl: '.featured-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredProperties.map((property, index) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
