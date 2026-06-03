// =============================================
// HOME PAGE
// =============================================
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero/Hero';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties';
import PropertySearch from '../components/PropertySearch/PropertySearch';
import CounterSection from '../components/CounterSection/CounterSection';
import AboutSection from '../components/Services/AboutSection';
import Testimonials from '../components/Testimonials/Testimonials';
import Gallery from '../components/Gallery/Gallery';
import CTA from '../components/CTA/CTA';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProperties />
      <PropertySearch />
      <CounterSection />
      <AboutSection />
      <Testimonials />
      <Gallery />
      <CTA />
    </>
  );
};

export default Home;
