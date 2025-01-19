import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-retro-background p-4 md:p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
            alt="Artist Portrait"
            className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
            style={{ maxWidth: "600px" }}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-retro-yellow text-5xl md:text-7xl font-bold mb-6">
            Jane Doe
          </h1>
          <p className="text-retro-text text-xl md:text-2xl leading-relaxed">
            Visual Artist & Designer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;