import { motion } from "framer-motion";

const works = [
  { id: 1, title: "Project 1", image: "/placeholder.svg", category: "Digital Art" },
  { id: 2, title: "Project 2", image: "/placeholder.svg", category: "Photography" },
  { id: 3, title: "Project 3", image: "/placeholder.svg", category: "Design" },
  { id: 4, title: "Project 4", image: "/placeholder.svg", category: "Illustration" },
  { id: 5, title: "Project 5", image: "/placeholder.svg", category: "Digital Art" },
  { id: 6, title: "Project 6", image: "/placeholder.svg", category: "Photography" },
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