import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Sistema de Videovigilancia Corporativo',
    client: 'Grupo Empresarial Costa Rica',
    category: 'CCTV',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop',
    description: 'Implementación de sistema de CCTV con 150+ cámaras IP para complejo empresarial.',
  },
  {
    title: 'Red de Fibra Óptica Campus Universitario',
    client: 'Universidad Tecnológica',
    category: 'Fibra Óptica',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbcbf?w=800&h=600&fit=crop',
    description: 'Despliegue de 10km de fibra óptica para conectar 25 edificios universitarios.',
  },
  {
    title: 'Plataforma de Gestión Empresarial',
    client: 'Distribuidora Nacional',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Sistema ERP personalizado para gestión de inventarios y logística.',
  },
  {
    title: 'Infraestructura de Red Hospitalaria',
    client: 'Hospital Regional',
    category: 'Redes',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    description: 'Red LAN/WAN crítica para centro médico con redundancia total.',
  },
  {
    title: 'Centro de Monitoreo 24/7',
    client: 'Municipalidad Central',
    category: 'CCTV',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Centro de comando con videowall y analíticas de video inteligentes.',
  },
  {
    title: 'Auditoría de Ciberseguridad',
    client: 'Institución Financiera',
    category: 'Ciberseguridad',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    description: 'Evaluación completa de seguridad y implementación de protocolos.',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#16213e] to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más de 500 proyectos exitosos nos respaldan en diversos sectores empresariales
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl glass-effect border border-white/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-ruby-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-ruby-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-ruby-500 text-sm mb-3">{project.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-ruby-500 font-semibold flex items-center"
                >
                  Ver detalles
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ruby-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-ruby-600 to-ruby-800 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-red-900/40 transition-all duration-300"
          >
            Ver Todos los Proyectos
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
