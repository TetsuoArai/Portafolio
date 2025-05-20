import { useRef, useState } from "react";
import { icons } from "../Constant/Icons";
import { Categories } from "../Constant/Category";
import { motion, AnimatePresence, useInView } from "framer-motion";
import PixelCard from "./PixelCard";
import Particles from "./Particle";

export const MySkills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTechnologies = icons.filter(
    (tech) => activeCategory === "all" || tech.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black overflow-hidden py-16 pt-32"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Particles />
      </div>
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-6"
          >
            Mis habilidades
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Herramientas y lenguajes que utilizo para crear experiencias digitales
            excepcionales
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {Categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full text-white font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category.id
                  ? category.color
                  : "bg-gray-800 hover:bg-gray-700"
              },
                    `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <motion.span
                  className="absolute inset-0 opacity-20 bg-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="wait">
            {filteredTechnologies.map(({ name, pathIcon, color }, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-center justify-center"
                >
                  <PixelCard
                    variant={color}
                    className="backdrop-blur-md"
                    index={index}
                  >
                    <motion.div className="flex justify-center items-center w-full h-full absolute group">
                      <div className="relative flex flex-col items-center group">
                        <div className="w-[60px] h-[60px] transition-transform duration-300 group-hover:-translate-y-2">
                          <img src={`./assets/icons/${pathIcon}`} />
                        </div>
                        <motion.strong className="absolute top-[60px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {name}
                        </motion.strong>
                      </div>
                    </motion.div>
                  </PixelCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
