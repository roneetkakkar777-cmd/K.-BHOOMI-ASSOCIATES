// =============================================
// ABOUT PAGE
// =============================================
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa';
import { COMPANY_DESCRIPTION, STATS } from '../utils/constants';
import CounterSection from '../components/CounterSection/CounterSection';
import { agents } from '../data/agents';
import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    { year: '2012', title: 'Founded', desc: 'K.-BHOOMI-ASSOCIATES established in Delhi NCR with a vision to revolutionize Indian real estate.' },
    { year: '2015', title: 'Pan-India Expansion', desc: 'Expanded to 10 cities across India with specialized regional teams.' },
    { year: '2018', title: 'Digital Innovation', desc: 'Launched India\'s first AI-powered property matching platform.' },
    { year: '2020', title: 'Virtual Tours', desc: 'Introduced virtual property tours during pandemic, serving NRI clients seamlessly.' },
    { year: '2023', title: '1500+ Properties Sold', desc: 'Crossed landmark of ₹2500 Crore in successful property transactions.' },
    { year: '2024', title: '25+ Cities', desc: 'Present across 25+ cities with 50+ dedicated property consultants.' },
  ];

  const values = [
    { icon: FaHandshake, title: 'Trust', desc: 'Every transaction built on complete transparency and integrity.' },
    { icon: FaAward, title: 'Excellence', desc: '12+ years of award-winning service in Indian real estate.' },
    { icon: FaUsers, title: 'Client-First', desc: 'Your dream, our mission. Every decision centered on client success.' },
    { icon: FaBuilding, title: 'Innovation', desc: 'Pioneering technology to make property buying seamless and smart.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary pt-20">
      {/* Hero */}
      <div className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=60" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-tag">
              <div className="w-8 h-px bg-gold" />
              <span>Our Story</span>
            </div>
            <h1 className="heading-xl text-white mt-2">
              About <span className="text-gold-gradient font-playfair italic">K.-BHOOMI</span>
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl font-inter leading-relaxed">
              {COMPANY_DESCRIPTION}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Counter */}
      <CounterSection />

      {/* Vision & Mission */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag">
                <div className="w-8 h-px bg-gold" />
                <span>Our Mission</span>
              </div>
              <h2 className="heading-md text-primary dark:text-white mt-2 mb-6">
                Building Trust, <span className="text-gold-gradient font-playfair italic">Delivering Dreams</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-textGray font-inter leading-relaxed mb-6">
                Our mission is simple yet powerful — to make property buying, selling, and investing
                a completely transparent, stress-free, and rewarding experience for every Indian.
              </p>
              <p className="text-textGray font-inter leading-relaxed mb-8">
                We believe that every family deserves their dream home, and every investor deserves
                maximum returns. That's why we combine deep market expertise with cutting-edge
                technology and unwavering ethical standards.
              </p>

              {[
                'RERA Registered & Compliant in all states',
                'Partnered with 50+ leading banks for home loans',
                'In-house legal team with 20+ specialists',
                'Digital property management platform',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <FaCheckCircle className="text-gold flex-shrink-0" size={16} />
                  <span className="text-primary dark:text-textLight text-sm font-inter">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=80"
                  alt="Team"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-2xl shadow-gold-lg">
                <div className="font-poppins font-black text-4xl text-primary">50+</div>
                <div className="font-poppins font-semibold text-primary/80 text-sm">Expert</div>
                <div className="font-poppins font-bold text-primary">Consultants</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-lightSection dark:bg-secondary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-tag justify-center"><div className="w-8 h-px bg-gold" /><span>What Drives Us</span><div className="w-8 h-px bg-gold" /></div>
            <h2 className="heading-lg text-primary dark:text-white mt-2">Our Core <span className="text-gold-gradient font-playfair italic">Values</span></h2>
            <div className="gold-divider gold-divider-center" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-white dark:bg-primary rounded-2xl shadow-card hover:shadow-card-hover border border-borderColor dark:border-gray-700 hover:border-gold transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gold/10 group-hover:bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <val.icon size={28} className="text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-3">{val.title}</h3>
                <p className="text-textGray text-sm font-inter leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="section-tag justify-center"><div className="w-8 h-px bg-gold" /><span>Our Journey</span><div className="w-8 h-px bg-gold" /></div>
            <h2 className="heading-lg text-primary dark:text-white mt-2">Key <span className="text-gold-gradient font-playfair italic">Milestones</span></h2>
            <div className="gold-divider gold-divider-center" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center mb-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-4 lg:mb-0`}>
                    <div className="inline-flex items-center justify-center w-16 h-10 bg-gold rounded-xl font-poppins font-black text-primary text-sm mb-3">
                      {m.year}
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-primary dark:text-white mb-2">{m.title}</h3>
                    <p className="text-textGray font-inter text-sm">{m.desc}</p>
                  </div>
                  <div className={`hidden lg:flex items-center justify-center ${i % 2 === 0 ? 'lg:col-start-2 lg:justify-start lg:pl-12' : 'lg:col-start-1 lg:row-start-1 lg:justify-end lg:pr-12'}`}>
                    <div className="w-4 h-4 bg-gold rounded-full shadow-gold" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-lightSection dark:bg-secondary">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="section-tag justify-center"><div className="w-8 h-px bg-gold" /><span>Meet The Team</span><div className="w-8 h-px bg-gold" /></div>
            <h2 className="heading-lg text-primary dark:text-white mt-2">Our <span className="text-gold-gradient font-playfair italic">Expert Agents</span></h2>
            <div className="gold-divider gold-divider-center" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {agents.slice(0, 3).map((agent, i) => (
              <motion.div key={agent.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="agent-card dark:border dark:border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <img src={agent.image} alt={agent.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-poppins font-bold text-white">{agent.name}</div>
                    <div className="text-gold text-sm">{agent.role}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-textGray font-inter">{agent.experience} Experience</div>
                      <div className="text-sm text-textGray font-inter">{agent.propertiesSold}+ Properties Sold</div>
                    </div>
                    <div className="flex items-center gap-1 bg-gold/10 px-3 py-1 rounded-full">
                      <span className="text-gold text-xs font-poppins font-bold">★ {agent.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/agents" className="btn-gold">
              Meet All Agents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
