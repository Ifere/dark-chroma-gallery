import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BrandSection from "../components/BrandSection";
import WorkSection from "../components/WorkSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-retro-background min-h-screen"
    >
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <WorkSection />
    </motion.div>
  );
};

export default Index;