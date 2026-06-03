// =============================================
// PROPERTY CARD COMPONENT
// =============================================
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBed, FaBath, FaRulerCombined, FaHeart,
  FaMapMarkerAlt, FaArrowRight, FaParking
} from 'react-icons/fa';
import { WishlistContext } from '../../contexts/WishlistContext';
import { formatPrice, formatArea } from '../../utils/formatPrice';
import './PropertyCard.css';

const PropertyCard = ({ property, index = 0 }) => {
  const { isWishlisted, toggleWishlist } = useContext(WishlistContext);
  const wishlisted = isWishlisted(property.id);

  const statusClasses = {
    Available: 'status-available',
    Featured: 'status-featured',
    Sold: 'status-sold',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="property-card group dark:bg-secondary dark:border dark:border-gray-700"
    >
      {/* Image */}
      <div className="card-image">
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <span className={`status-badge ${statusClasses[property.status] || 'status-available'}`}>
          {property.status}
        </span>

        {/* Price Badge */}
        <div className="price-badge">
          {formatPrice(property.price)}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(property.id);
          }}
          className={`absolute bottom-4 right-4 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            wishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/20 text-white hover:bg-white hover:text-red-500'
          }`}
        >
          <FaHeart size={14} className={wishlisted ? 'fill-white' : ''} />
        </motion.button>

        {/* Category Tag */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/80 text-xs font-poppins font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {property.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-2">
          <FaMapMarkerAlt className="text-gold" size={12} />
          <span className="text-textGray text-xs font-inter truncate">{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-primary dark:text-white text-lg mb-3 leading-tight group-hover:text-gold transition-colors line-clamp-1">
          {property.title}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-4 mb-4 py-3 border-t border-b border-borderColor dark:border-gray-700">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-textGray">
              <FaBed size={14} className="text-gold/70" />
              <span className="text-xs font-inter">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-textGray">
              <FaBath size={14} className="text-gold/70" />
              <span className="text-xs font-inter">{property.bathrooms} Baths</span>
            </div>
          )}
          {property.area > 0 && (
            <div className="flex items-center gap-1.5 text-textGray">
              <FaRulerCombined size={14} className="text-gold/70" />
              <span className="text-xs font-inter">{formatArea(property.area)}</span>
            </div>
          )}
          {property.parking > 0 && (
            <div className="flex items-center gap-1.5 text-textGray">
              <FaParking size={14} className="text-gold/70" />
              <span className="text-xs font-inter">{property.parking}P</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-poppins font-extrabold text-primary dark:text-white text-xl">
              {formatPrice(property.price)}
            </div>
            {property.pricePerSqft && (
              <div className="text-textGray text-xs font-inter">
                ₹{property.pricePerSqft.toLocaleString('en-IN')}/sq.ft
              </div>
            )}
          </div>

          <Link to={`/properties/${property.id}`}>
            <motion.button
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gold/10 hover:bg-gold text-gold hover:text-primary px-4 py-2 rounded-full text-sm font-poppins font-semibold transition-all duration-300"
            >
              Details
              <FaArrowRight size={12} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
