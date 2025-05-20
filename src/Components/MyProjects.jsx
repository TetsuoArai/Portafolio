import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Particles from "./Particle";
import { Projects } from "../Constant/Projects";

export default function MyProjects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-black overflow-hidden py-16 pt-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Particles />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-16 relative"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Mis Proyectos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isVisible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Código</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
