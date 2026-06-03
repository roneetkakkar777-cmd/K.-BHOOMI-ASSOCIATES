// =============================================
// COUNTER SECTION
// =============================================
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '../../utils/constants';

gsap.registerPlugin(ScrollTrigger);

const CounterItem = ({ stat, index }) => {
  const numRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        // Use a plain object as the tween target — closure reference is reliable
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 2.5,
          ease: 'power3.out',
          onUpdate: () => {
            if (el) el.textContent = Math.round(counter.val).toLocaleString('en-IN');
          },
        });
      },
    });

    return () => trigger.kill();
  }, [stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="counter-item text-center"
    >
      <div className="flex items-end justify-center gap-1 mb-2">
        <span
          ref={numRef}
          className="font-poppins font-black text-5xl lg:text-6xl text-gold leading-none"
        >
          0
        </span>
        <span className="font-poppins font-black text-4xl lg:text-5xl text-gold leading-none mb-1">
          {stat.suffix}
        </span>
      </div>
      <div className="font-poppins font-bold text-white text-lg mb-1">{stat.label}</div>
      <div className="text-textGray text-sm font-inter">{stat.sublabel}</div>
    </motion.div>
  );
};

const CounterSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center">
            <div className="w-8 h-px bg-gold" />
            <span>Our Track Record</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="heading-lg text-white mt-2">
            Numbers That <span className="text-gold-gradient font-playfair italic">Speak For Us</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <CounterItem key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
