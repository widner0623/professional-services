import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import ReadyToMove from "../components/ReadyToMove";
import Footer from "../components/Footer";

const sectionAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection>
        <Process />
      </AnimatedSection>

      <AnimatedSection>
        <Reviews />
      </AnimatedSection>

      <AnimatedSection>
        <Gallery />
      </AnimatedSection>

      <AnimatedSection>
        <CTA />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <ReadyToMove />
      </AnimatedSection>

      <Footer />
    </>
  );
};

export default Home;