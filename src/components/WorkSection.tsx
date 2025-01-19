import { motion } from "framer-motion";

const works = [
  { 
    id: 1, 
    title: "Digital Art Project", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
    category: "Digital Art" 
  },
  { 
    id: 2, 
    title: "Photography Series", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
    category: "Photography" 
  },
  { 
    id: 3, 
    title: "Design Collection", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", 
    category: "Design" 
  },
  { 
    id: 4, 
    title: "Illustration Set", 
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", 
    category: "Illustration" 
  },
  { 
    id: 5, 
    title: "Digital Experience", 
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", 
    category: "Digital Art" 
  },
  { 
    id: 6, 
    title: "Photo Exhibition", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", 
    category: "Photography" 
  },
];

const WorkSection = () => {
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
          <span className="text-retro-yellow text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-retro-yellow text-4xl md:text-5xl font-bold mt-2">Selected Works</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-retro-yellow">{work.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;