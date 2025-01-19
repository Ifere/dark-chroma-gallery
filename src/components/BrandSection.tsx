import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "Brand 1", logo: "/placeholder.svg" },
  { id: 2, name: "Brand 2", logo: "/placeholder.svg" },
  { id: 3, name: "Brand 3", logo: "/placeholder.svg" },
  { id: 4, name: "Brand 4", logo: "/placeholder.svg" },
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
                className="w-32 h-32 object-contain filter invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;