// =============================================
// TESTIMONIALS SECTION
// =============================================
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card h-full flex flex-col">
    {/* Quote */}
    <div className="mb-4">
      <FaQuoteLeft className="text-gold/30" size={32} />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i} className="text-gold" size={14} />
      ))}
    </div>

    {/* Review */}
    <p className="text-textGray font-inter text-sm leading-relaxed flex-1 mb-6">
      "{testimonial.review}"
    </p>

    {/* Property */}
    <div className="text-xs text-gold font-poppins font-medium mb-4 truncate">
      🏠 {testimonial.property}
    </div>

    {/* Author */}
    <div className="flex items-center gap-4 pt-4 border-t border-borderColor dark:border-gray-700">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
      />
      <div>
        <div className="font-poppins font-bold text-primary dark:text-white text-sm">
          {testimonial.name}
        </div>
        <div className="text-textGray text-xs font-inter">{testimonial.role}</div>
        <div className="text-gold/60 text-xs font-inter">{testimonial.date}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="section-padding bg-lightSection dark:bg-secondary overflow-hidden">
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
            <span>Client Stories</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-primary dark:text-white mt-2">
            What Our <span className="text-gold-gradient font-playfair italic">Clients Say</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-textGray mt-4 font-inter">
            Thousands of happy families and investors have trusted K.-BHOOMI-ASSOCIATES
            for their real estate journey.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
