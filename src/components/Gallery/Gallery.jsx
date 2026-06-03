// =============================================
// GALLERY SECTION
// =============================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GALLERY_IMAGES } from '../../utils/constants';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

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
            <span>Visual Showcase</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-primary dark:text-white mt-2">
            Property <span className="text-gold-gradient font-playfair italic">Gallery</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-textGray mt-4 font-inter">
            A glimpse into our portfolio of stunning properties across India.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="gallery-item group relative"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-gold opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <FaExpand className="text-primary" size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
            >
              <FaTimes size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center text-white hover:text-primary transition-all z-10"
            >
              <FaChevronLeft size={18} />
            </button>

            {/* Image */}
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={GALLERY_IMAGES[activeIndex]}
              alt={`Gallery ${activeIndex + 1}`}
              referrerPolicy="no-referrer"
              className="max-w-4xl max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center text-white hover:text-primary transition-all z-10"
            >
              <FaChevronRight size={18} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-poppins">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
