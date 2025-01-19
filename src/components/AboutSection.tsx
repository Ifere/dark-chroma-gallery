import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-retro-background p-4 md:p-8">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-retro-yellow text-sm uppercase tracking-wider">About</span>
          <h2 className="text-retro-yellow text-4xl md:text-5xl font-bold mt-2 mb-8">The Artist</h2>
          <p className="text-retro-text text-lg md:text-xl leading-relaxed mb-6">
            With over a decade of experience in visual arts, I've developed a unique style that combines
            traditional techniques with modern digital innovation. My work has been featured in galleries
            across Europe and North America.
          </p>
          <p className="text-retro-text text-lg md:text-xl leading-relaxed">
            I believe in creating art that not only captures attention but also tells a story. Each piece
            is carefully crafted to evoke emotion and spark conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;