// =============================================
// PROPERTY DETAILS PAGE
// =============================================
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import { useForm } from 'react-hook-form';
import {
  FaBed, FaBath, FaRulerCombined, FaParking,
  FaMapMarkerAlt, FaHeart, FaShare, FaCheckCircle,
  FaPhoneAlt, FaEnvelope, FaArrowLeft,
  FaStar
} from 'react-icons/fa';
import { properties } from '../data/properties';
import { agents } from '../data/agents';
import { formatPrice, formatArea } from '../utils/formatPrice';
import { useContext } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';
import PropertyCard from '../components/PropertyCard/PropertyCard';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const { isWishlisted, toggleWishlist } = useContext(WishlistContext);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-lightSection dark:bg-primary pt-20">
        <div className="text-center">
          <h2 className="heading-md text-primary dark:text-white mb-4">Property Not Found</h2>
          <Link to="/properties" className="btn-gold">View All Properties</Link>
        </div>
      </div>
    );
  }

  const agent = agents.find((a) => a.id === property.agent.id) || agents[0];
  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  const onSubmit = (data) => {
    console.log('Inquiry:', data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 5000);
  };

  const amenityIcons = {
    'Swimming Pool': '🏊', 'Gym': '💪', 'Garden': '🌿', 'Security': '🔒',
    'Power Backup': '⚡', 'Modular Kitchen': '🍳', 'Club House': '🏛️',
    'Lift': '🛗', 'Sea View': '🌊', 'Terrace': '🌇', 'Concierge': '🎩',
    'Valet Parking': '🚗', 'Smart Home': '🏠', 'Jacuzzi': '🛁',
    'Home Theater': '🎬', 'Private Pool': '🏊‍♂️', 'Banquet Hall': '🎭',
  };

  return (
    <div className="min-h-screen bg-lightSection dark:bg-secondary pt-20">
      {/* Back Button */}
      <div className="container-custom pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-textGray hover:text-gold transition-colors font-poppins font-medium text-sm mb-6"
        >
          <FaArrowLeft size={14} />
          Back to Properties
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              {/* Main Swiper */}
              <div className="relative rounded-2xl overflow-hidden mb-3">
                <Swiper
                  modules={[Thumbs, Navigation, Pagination]}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-80 md:h-[480px]"
                  onSlideChange={(s) => setActiveImage(s.activeIndex)}
                >
                  {property.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`${property.title} ${i + 1}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className={`status-badge ${property.status === 'Featured' ? 'status-featured' : 'status-available'}`}>
                    {property.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10 price-badge text-base">
                  {formatPrice(property.price)}
                </div>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={4}
                  modules={[Thumbs]}
                  watchSlidesProgress
                  className="thumbs-swiper"
                >
                  {property.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className={`rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                        activeImage === i ? 'border-gold' : 'border-transparent'
                      }`}>
                        <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-20 object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </motion.div>

            {/* Property Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-primary/50 rounded-2xl p-8 shadow-card border border-borderColor dark:border-gray-700 mb-8"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-gold" size={14} />
                    <span className="text-textGray text-sm font-inter">{property.location}</span>
                  </div>
                  <h1 className="heading-md text-primary dark:text-white mb-1">{property.title}</h1>
                  <div className="text-3xl font-poppins font-extrabold text-gold">{formatPrice(property.price)}</div>
                  {property.pricePerSqft && (
                    <div className="text-textGray text-sm">₹{property.pricePerSqft.toLocaleString('en-IN')}/sq.ft</div>
                  )}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleWishlist(property.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all ${
                      isWishlisted(property.id)
                        ? 'bg-red-500 border-red-500 text-white'
                        : 'border-borderColor text-textGray hover:border-red-400 hover:text-red-400'
                    }`}
                  >
                    <FaHeart size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center border-2 border-borderColor text-textGray hover:border-gold hover:text-gold transition-all">
                    <FaShare size={16} />
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-borderColor dark:border-gray-700">
                {property.bedrooms > 0 && (
                  <div className="text-center p-3 bg-lightSection dark:bg-gray-700/50 rounded-xl">
                    <FaBed className="text-gold mx-auto mb-2" size={20} />
                    <div className="font-poppins font-bold text-primary dark:text-white">{property.bedrooms}</div>
                    <div className="text-textGray text-xs">Bedrooms</div>
                  </div>
                )}
                {property.bathrooms > 0 && (
                  <div className="text-center p-3 bg-lightSection dark:bg-gray-700/50 rounded-xl">
                    <FaBath className="text-gold mx-auto mb-2" size={20} />
                    <div className="font-poppins font-bold text-primary dark:text-white">{property.bathrooms}</div>
                    <div className="text-textGray text-xs">Bathrooms</div>
                  </div>
                )}
                {property.area > 0 && (
                  <div className="text-center p-3 bg-lightSection dark:bg-gray-700/50 rounded-xl">
                    <FaRulerCombined className="text-gold mx-auto mb-2" size={20} />
                    <div className="font-poppins font-bold text-primary dark:text-white">{property.area.toLocaleString('en-IN')}</div>
                    <div className="text-textGray text-xs">Sq.Ft Area</div>
                  </div>
                )}
                {property.parking > 0 && (
                  <div className="text-center p-3 bg-lightSection dark:bg-gray-700/50 rounded-xl">
                    <FaParking className="text-gold mx-auto mb-2" size={20} />
                    <div className="font-poppins font-bold text-primary dark:text-white">{property.parking}</div>
                    <div className="text-textGray text-xs">Parking</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-3">Description</h3>
                <p className="text-textGray font-inter leading-relaxed">{property.description}</p>
              </div>

              {/* Property Details Table */}
              <div className="mt-6">
                <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    { label: 'Property Type', value: property.type },
                    { label: 'Category', value: property.category },
                    { label: 'City', value: property.city },
                    { label: 'Status', value: property.status },
                    { label: 'Furnishing', value: property.furnishing },
                    { label: 'Possession', value: property.possession },
                    { label: 'Facing', value: property.facing },
                    { label: 'Year Built', value: property.yearBuilt || 'N/A' },
                    { label: 'Total Area', value: formatArea(property.area) },
                    { label: 'Price/Sq.Ft', value: property.pricePerSqft ? `₹${property.pricePerSqft.toLocaleString('en-IN')}` : 'N/A' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between py-2 border-b border-borderColor/50 dark:border-gray-700/50">
                      <span className="text-textGray text-sm font-inter">{label}</span>
                      <span className="font-poppins font-semibold text-primary dark:text-white text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-primary/50 rounded-2xl p-8 shadow-card border border-borderColor dark:border-gray-700 mb-8"
            >
              <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-6">Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {property.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 p-3 bg-lightSection dark:bg-gray-700/50 rounded-xl hover:border-gold border border-transparent transition-all"
                  >
                    <span className="text-xl">{amenityIcons[amenity] || '✅'}</span>
                    <span className="text-primary dark:text-white text-xs font-poppins font-medium">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-primary/50 rounded-2xl overflow-hidden shadow-card border border-borderColor dark:border-gray-700 mb-8"
            >
              <div className="p-6 border-b border-borderColor dark:border-gray-700">
                <h3 className="font-poppins font-bold text-xl text-primary dark:text-white">Location Map</h3>
                <p className="text-textGray text-sm font-inter mt-1">{property.location}</p>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-gold mx-auto mb-3" size={40} />
                  <div className="font-poppins font-semibold text-primary dark:text-white">{property.location}</div>
                  <div className="text-textGray text-sm mt-1">Map integration available on request</div>
                </div>
              </div>
            </motion.div>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-poppins font-bold text-2xl text-primary dark:text-white mb-6">
                  Similar <span className="text-gold-gradient font-playfair italic">Properties</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similarProperties.map((p, i) => (
                    <PropertyCard key={p.id} property={p} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-primary/50 rounded-2xl p-6 shadow-card border border-borderColor dark:border-gray-700 sticky top-24"
            >
              <h3 className="font-poppins font-bold text-lg text-primary dark:text-white mb-4">Listed By</h3>

              {/* Agent */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <div className="font-poppins font-bold text-primary dark:text-white">{agent.name}</div>
                  <div className="text-gold text-xs font-inter">{agent.role}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <FaStar className="text-gold" size={12} />
                    <span className="text-textGray text-xs font-inter">{agent.rating} ({agent.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Agent Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-lightSection dark:bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="font-poppins font-bold text-primary dark:text-white">{agent.experience}</div>
                  <div className="text-textGray text-xs">Experience</div>
                </div>
                <div className="bg-lightSection dark:bg-gray-700/50 rounded-xl p-3 text-center">
                  <div className="font-poppins font-bold text-primary dark:text-white">{agent.propertiesSold}+</div>
                  <div className="text-textGray text-xs">Properties Sold</div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <a href={`tel:${agent.phone}`} className="btn-gold justify-center">
                  <FaPhoneAlt size={14} />
                  Call Agent
                </a>
                <a href={`mailto:${agent.email}`} className="btn-outline-gold justify-center">
                  <FaEnvelope size={14} />
                  Email Agent
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="border-t border-borderColor dark:border-gray-700 pt-4">
                <h4 className="font-poppins font-semibold text-primary dark:text-white mb-4">
                  Send Inquiry
                </h4>

                {submitted ? (
                  <div className="text-center py-4">
                    <FaCheckCircle className="text-green-500 mx-auto mb-2" size={30} />
                    <p className="text-green-600 text-sm font-poppins font-semibold">Inquiry sent! We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Your Name *"
                      className="input-field text-sm"
                    />
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      placeholder="Phone Number *"
                      className="input-field text-sm"
                    />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Email Address"
                      className="input-field text-sm"
                    />
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder={`I'm interested in ${property.title}...`}
                      className="input-field text-sm resize-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-gold w-full justify-center"
                    >
                      Send Inquiry
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
