import { motion } from "framer-motion";

const brands = [
  { 
    id: 1, 
    name: "Tech Brand", 
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
  },
  { 
    id: 2, 
    name: "Creative Agency", 
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
  },
  { 
    id: 3, 
    name: "Design Studio", 
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
  },
  { 
    id: 4, 
    name: "Digital Lab", 
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
  },
];

const BrandSection = () => {
  return (
    <section className="bg-retro-background p-4 md:p-8 py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-retro-yellow text-sm uppercase tracking-wider">Clients</span>
          <h2 className="text-retro-yellow text-4xl md:text-5xl font-bold mt-2">Brands I've Worked With</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-32 h-32 object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;