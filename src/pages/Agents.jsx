// =============================================
// AGENTS PAGE
// =============================================
import { motion } from 'framer-motion';
import {
  FaPhoneAlt, FaEnvelope, FaStar, FaLinkedin,
  FaTwitter, FaInstagram, FaMapMarkerAlt
} from 'react-icons/fa';
import { agents } from '../data/agents';
import CTA from '../components/CTA/CTA';

const AgentCard = ({ agent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="agent-card group dark:border dark:border-gray-700"
  >
    {/* Image */}
    <div className="relative h-72 overflow-hidden">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

      {/* Social Icons on Hover */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>

      {/* Name Overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="font-poppins font-bold text-white text-xl">{agent.name}</div>
        <div className="text-gold text-sm font-poppins">{agent.role}</div>
        <div className="text-white/60 text-xs mt-1">{agent.specialization}</div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Rating & Reviews */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < Math.floor(agent.rating) ? 'text-gold' : 'text-gray-200'}
            />
          ))}
          <span className="text-primary dark:text-white text-sm font-poppins font-bold ml-1">{agent.rating}</span>
        </div>
        <span className="text-textGray text-xs font-inter">({agent.reviews} reviews)</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-b border-borderColor dark:border-gray-700">
        <div>
          <div className="font-poppins font-bold text-primary dark:text-white text-lg">{agent.experience}</div>
          <div className="text-textGray text-xs font-inter">Experience</div>
        </div>
        <div>
          <div className="font-poppins font-bold text-primary dark:text-white text-lg">{agent.propertiesSold}+</div>
          <div className="text-textGray text-xs font-inter">Properties Sold</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-textGray text-sm font-inter leading-relaxed mb-4 line-clamp-2">
        {agent.description}
      </p>

      {/* Cities */}
      <div className="flex items-center gap-2 mb-4">
        <FaMapMarkerAlt className="text-gold flex-shrink-0" size={12} />
        <span className="text-textGray text-xs font-inter">{agent.cities.join(', ')}</span>
      </div>

      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-4">
        {agent.languages.map((lang) => (
          <span key={lang} className="text-xs px-2 py-1 bg-gold/10 text-gold rounded-full font-poppins font-medium">
            {lang}
          </span>
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-3">
        <a
          href={`tel:${agent.phone}`}
          className="flex-1 flex items-center justify-center gap-2 btn-gold py-2.5 text-sm"
        >
          <FaPhoneAlt size={12} />
          Call
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex-1 flex items-center justify-center gap-2 btn-outline-gold py-2.5 text-sm"
        >
          <FaEnvelope size={12} />
          Email
        </a>
      </div>
    </div>
  </motion.div>
);

const Agents = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary pt-20">
      {/* Hero */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&q=60" alt="Agents" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" /><span>Our Team</span>
            </div>
            <h1 className="heading-xl text-white mt-2">
              Expert <span className="text-gold-gradient font-playfair italic">Agents</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-xl font-inter">
              Meet our team of certified real estate professionals dedicated to
              making your property journey smooth, transparent, and rewarding.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Agents Grid */}
      <section className="section-padding bg-lightSection dark:bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Agents;
