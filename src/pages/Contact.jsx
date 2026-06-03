// =============================================
// CONTACT PAGE
// =============================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaWhatsapp, FaCheckCircle, FaArrowRight
} from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS } from '../utils/constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Contact Form:', data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 5000);
  };

  const contactCards = [
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      details: [CONTACT_INFO.phone, CONTACT_INFO.phone2],
      action: `tel:${CONTACT_INFO.phone}`,
      color: '#D4AF37',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: [CONTACT_INFO.email, CONTACT_INFO.email2],
      action: `mailto:${CONTACT_INFO.email}`,
      color: '#3B82F6',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: [CONTACT_INFO.address],
      action: 'https://maps.google.com',
      color: '#10B981',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: [CONTACT_INFO.workingHours, 'Sunday: Closed'],
      action: null,
      color: '#8B5CF6',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary pt-20">
      {/* Hero */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=60" alt="Contact" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" /><span>Reach Us</span>
            </div>
            <h1 className="heading-xl text-white mt-2">
              Contact <span className="text-gold-gradient font-playfair italic">Us</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-xl font-inter">
              Ready to take the next step? Our expert consultants are here to help you
              find your perfect property or answer any questions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-16 bg-lightSection dark:bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-primary/50 rounded-2xl p-6 shadow-card border border-borderColor dark:border-gray-700 hover:border-gold transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${card.color}15` }}
                >
                  <card.icon size={24} style={{ color: card.color }} />
                </div>
                <h3 className="font-poppins font-bold text-primary dark:text-white text-lg mb-3">{card.title}</h3>
                {card.details.map((detail, j) => (
                  <div key={j}>
                    {card.action ? (
                      <a
                        href={card.action}
                        className="text-textGray hover:text-gold text-sm font-inter transition-colors block mb-1"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p className="text-textGray text-sm font-inter mb-1">{detail}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag">
                <div className="w-8 h-px bg-gold" /><span>Send Message</span>
              </div>
              <h2 className="heading-md text-primary dark:text-white mt-2 mb-2">
                Get Free <span className="text-gold-gradient font-playfair italic">Consultation</span>
              </h2>
              <div className="gold-divider mb-8" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-500" size={48} />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-primary dark:text-white mb-3">Message Sent!</h3>
                  <p className="text-textGray font-inter">We'll respond within 24 hours. Thank you!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Full Name *</label>
                      <input {...register('name', { required: 'Name required' })} type="text" placeholder="Ramesh Kumar" className="input-field" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Phone *</label>
                      <input {...register('phone', { required: 'Phone required' })} type="tel" placeholder="+91 98765 43210" className="input-field" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Email Address</label>
                    <input {...register('email')} type="email" placeholder="ramesh@example.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Subject *</label>
                    <select {...register('subject', { required: true })} className="select-field">
                      <option value="">Select subject...</option>
                      <option>Property Enquiry</option>
                      <option>Investment Advisory</option>
                      <option>Legal Assistance</option>
                      <option>Home Loan</option>
                      <option>NRI Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Budget Range</label>
                      <select {...register('budget')} className="select-field">
                        <option>Any Budget</option>
                        <option>Under ₹50 Lakh</option>
                        <option>₹50L - ₹1 Cr</option>
                        <option>₹1 Cr - ₹3 Cr</option>
                        <option>₹3 Cr - ₹5 Cr</option>
                        <option>Above ₹5 Cr</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Preferred Region</label>
                      <select {...register('city')} className="select-field">
                        <option value="">Any Region</option>
                        <option>Vasundhara</option>
                        <option>Indirapuram</option>
                        <option>Vaishali</option>
                        <option>Kaushambi</option>
                        <option>Noida</option>
                        <option>Delhi</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-primary dark:text-white mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your property requirements..."
                      className="input-field resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-gold w-full justify-center py-4 text-base"
                  >
                    Send Message
                    <FaArrowRight size={14} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-card-hover h-64 md:h-80 mb-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border border-borderColor dark:border-gray-700">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-gold mx-auto mb-3" size={48} />
                  <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-2">Our Office</h3>
                  <p className="text-textGray font-inter text-sm max-w-xs mx-auto">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <motion.a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block bg-green-500 text-white rounded-2xl p-6 mb-6 hover:bg-green-600 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaWhatsapp size={30} />
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-xl mb-1">Chat on WhatsApp</div>
                    <div className="text-white/80 font-inter text-sm">Get instant answers from our team</div>
                  </div>
                </div>
              </motion.a>

              {/* Office Hours */}
              <div className="bg-lightSection dark:bg-secondary rounded-2xl p-6 border border-borderColor dark:border-gray-700">
                <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-4">Office Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Saturday', time: '9:00 AM - 8:00 PM' },
                    { day: 'Sunday', time: '9:00 AM - 8:00 PM' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-borderColor dark:border-gray-700 last:border-0">
                      <span className="text-primary dark:text-white font-poppins font-medium text-sm">{day}</span>
                      <span className="font-inter text-sm text-gold font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
