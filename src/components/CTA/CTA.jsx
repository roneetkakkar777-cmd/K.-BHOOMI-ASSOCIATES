// =============================================
// CTA SECTION
// =============================================
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('CTA Form:', data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 5000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        {/* Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" />
              <span>Get In Touch</span>
            </div>
            <h2 className="heading-lg text-white mt-3 mb-4">
              Ready to Find Your
              <br />
              <span className="text-gold-gradient font-playfair italic">Dream Property?</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-white/70 font-inter mb-8 leading-relaxed">
              Leave your details and our expert property consultant will contact you
              within 24 hours for a FREE consultation. No strings attached.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gold/20 group-hover:bg-gold rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaPhoneAlt className="text-gold group-hover:text-primary" size={16} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-inter">Call Us Now</div>
                  <div className="text-white font-poppins font-semibold">{CONTACT_INFO.phone}</div>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-green-500/20 group-hover:bg-green-500 rounded-xl flex items-center justify-center transition-all duration-300">
                  <FaWhatsapp className="text-green-400 group-hover:text-white" size={18} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-inter">WhatsApp</div>
                  <div className="text-white font-poppins font-semibold">Chat Instantly</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-secondary rounded-3xl p-8 shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-textGray font-inter text-sm">
                  Our consultant will reach you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-6">
                  Get Free Consultation
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Full Name *"
                      className="input-field"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      type="tel"
                      placeholder="Phone Number *"
                      className="input-field"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Email Address"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <select {...register('propertyType')} className="select-field">
                      <option value="">Looking for...</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Commercial</option>
                      <option>Plot</option>
                      <option>Luxury Home</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Any specific requirements? (optional)"
                      className="input-field resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-gold w-full justify-center py-4 text-base"
                  >
                    Get Free Consultation
                    <FaArrowRight size={14} />
                  </motion.button>
                </form>

                <p className="text-textGray text-xs font-inter text-center mt-4">
                  🔒 Your data is 100% secure. No spam, guaranteed.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
